#!/usr/bin/env python3
"""Report exact (type, name) overlaps between DeGreaser and ListoPatches."""
from collections import defaultdict
from pathlib import Path
import csv
import difflib
import re
import subprocess
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'reports/listopatches-audit'
OUT.mkdir(parents=True, exist_ok=True)
revision = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip()
mods = {}
summary = {}
for mod in ('DeGreaser', 'ListoPatches'):
    base = ROOT / mod / 'Public' / mod / 'Stats'
    files = sorted(base.rglob('*.txt'))
    assert files, f'Missing Stats files for {mod}'
    groups = defaultdict(list)
    files_with_entries = 0
    for path in files:
        lines = path.read_bytes().decode('utf-8-sig', errors='strict').splitlines()
        starts = [i for i, l in enumerate(lines) if re.match(r'^\s*new\s+entry\b', l)]
        files_with_entries += bool(starts)
        for j, start in enumerate(starts):
            end = starts[j+1] if j+1 < len(starts) else len(lines)
            block = lines[start:end]
            name = re.match(r'^\s*new\s+entry\s+"([^"]+)"', block[0])
            types = [m[1] for l in block if (m := re.match(r'^\s*type\s+"([^"]+)"', l))]
            assert name and len(types) == 1, (path, start + 1, block)
            declaration = '\n'.join(l.strip() for l in block
                                    if l.strip() and not l.lstrip().startswith('//'))
            groups[types[0], name[1]].append((path.relative_to(ROOT).as_posix(), start+1, declaration))
    mods[mod] = groups
    summary[mod] = (len(files), files_with_entries, sum(map(len, groups.values())), len(groups))

a, b = mods.values()
shared = sorted(a.keys() & b.keys())
identical = sum(len({o[2] for o in a[k]+b[k]}) == 1 for k in shared)
out = ['# DeGreaser / ListoPatches shared stat entries', '',
       f'Audited commit: `{revision}` (PR #8, including the repaired SPELLS.txt).', '',
       'Scope: all `.txt` files recursively beneath `DeGreaser/Public/DeGreaser/Stats` and `ListoPatches/Public/ListoPatches/Stats`. Exact, case-sensitive `(type, name)` pairs identify entries. Same names under different types remain distinct. Treasure-table declarations use a different syntax and are not entry/type identities.', '',
       '| Mod | Text files scanned | Files with entries | Declarations | Unique identities |',
       '| --- | ---: | ---: | ---: | ---: |']
for mod, metrics in summary.items():
    out.append('| ' + mod + ' | ' + ' | '.join(map(str, metrics)) + ' |')
out += ['', f'- Shared identities: **{len(shared)}**.',
        f'- Identical declaration groups across both mods: **{identical}**.',
        f'- Differing declaration groups across both mods: **{len(shared)-identical}**.',
        f'- Total occurrences belonging to shared identities: **{sum(len(a[k])+len(b[k]) for k in shared)}**.', '',
        'No mod entries were changed or removed. Comparison ignores comment-only lines, blank lines, and outer line whitespace, but preserves quoted values and directive order. Missing or ambiguous entry types cause the audit to stop rather than silently omit entries.', '',
        'These are overlapping definitions, not proof of an accidental duplicate. Inheritance and load order need review before consolidation. The shield patch explicitly uses its own existing entry name as its parent and appears intentional. The Halsin status sets a different parent and a different Boosts value. Neither pair is eligible for identical-content consolidation.', '',
        'Reproduce with `python tools/audit_crossmod_stats.py`. Internal-only duplicates are excluded from this cross-mod report; the earlier ListoPatches internal audit remains in `duplicates.md`.', '']
rows = []
for kind, name in shared:
    out += [f'## {kind}: `{name}`', '']
    for mod in mods:
        for path, line, declaration in mods[mod][kind, name]:
            url = f'https://github.com/ajaxxxxxxxx/ajaxxxxxxxx.github.io/blob/{revision}/{quote(path)}#L{line}'
            out += [f'### {mod}', '', f'[{path}:{line}]({url})', '', '```text', declaration, '```', '']
            rows.append([kind, name, mod, path, line, declaration])
    if len(a[kind, name]) == len(b[kind, name]) == 1:
        diff = '\n'.join(difflib.unified_diff(a[kind, name][0][2].splitlines(),
                                             b[kind, name][0][2].splitlines(),
                                             fromfile='DeGreaser', tofile='ListoPatches', lineterm=''))
        out += ['### Declaration differences', '', '```diff', diff, '```', '']
(OUT / 'crossmod-duplicates.md').write_text('\n'.join(out), encoding='utf-8')
with (OUT / 'crossmod-occurrences.csv').open('w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f, lineterminator='\n')
    writer.writerow(['type', 'name', 'mod', 'path', 'line', 'declaration'])
    writer.writerows(rows)
print(summary)
print(f'{len(shared)} shared identities; {identical} identical groups; {len(rows)} occurrences')
