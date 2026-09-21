# ListoPatches encoding and duplicate audit

Audited main commit `225af6179d8fb59137a463ed9456d7ac368109f2`.

## SPELLS.txt: confirmed repository corruption

The committed file was 360,061 bytes and failed strict UTF-8 decoding at byte offset 1 (`0xAA`). Decoding the first bytes as UTF-16 big-endian with replacement reproduces the reported preview exactly:

> 妪砭껩�힝ꋫ榺�計Ꝫ孨釩�ힾ瓧瓨떩梺�뙘ꝺ쵋쯈ᐛᡞ奜蠘宙࠙�饜顛ࠜ�嬛࠙ᥘ�岘崚寛鳂诋점�鳛�夘崙夈ᦜ鯛䠓

Base64-encoding those corrupted bytes exposes this prefix:

```text
Warningtruncatedoutputoriginaltokencount175053Totaloutputlines1Ly8gUGxheWVyIGFuZCBnZW5lcmFsIHNwZWxsI
```

This is evidence that truncated tool output, including the warning text, was incorrectly passed as a base64 upload in the earlier consolidation. The problem already existed in commit `28e7cce`; the subsequent ordering commit `9619d17` also contains a corrupted payload. This was an error in the earlier assistant upload, not a normal file-size display limit or hidden legitimate spell data. Changing the encoding selector cannot recover content lost to truncation.

Original corrupted blob SHA-256: `e2c77662ee62e088fbc65c596f7a5d03113f47f00c02a29c986d2920460edb25`.

The intact local consolidation was recovered and verified against the pre-consolidation repository at `0d292ba5a53d4faea96fd4dc800a11e61cb201d8`. Comparison covered all SpellData blocks in ListoMasterSpells/Public text files except `_NPC Spells.txt`, plus the earlier `ConsolidatedIdenticalEntries.txt`. The declaration multiset matches exactly: **922 source declarations, 922 restored, 0 missing, 0 extra**. Comparison ignores blank lines, comment-only lines, and outer line whitespace; quoted values and directive order are preserved. Six whitespace-only comment tails were cleaned. The restored file retains the previously arranged spell families and contains 8,275 lines of ASCII-compatible UTF-8.

A readable Notepad++ copy therefore need not be the same bytes as the broken committed file. Use the SHA-256 in [validation.md](validation.md) to compare the restored download with the local copy. The precise behavior of the user's browser and local editor was not observed directly.

## Localization: both current documents are valid

Both files contain 602,280 bytes, 3,305 physical lines, and 3,280 unique content entries. They are byte-identical and pass both Python ElementTree and lxml XML parsing. They use UTF-8, matching their declarations. No invalid XML characters, NUL bytes, replacement characters, embedded BOMs, zero-width characters, bidirectional controls, DTDs, external entity declarations, CDATA sections, or stylesheet instructions were found.

The only non-ASCII characters are 10 opening curly quotes, 10 closing curly quotes, 6 curly apostrophes, and one each of `û`, `é`, and `è`. All are valid XML characters. XML entities such as `&lt;`, `&gt;`, and `&amp;` are intentional encoding: an XML reader resolves them into characters, and BG3 can interpret the resulting tooltip markup. The encoded representation may look different in a source editor and a rendered view. There are no nested XML elements inside content strings and no remaining double-escaped angle brackets.

No XML-byte defect explaining the reported browser failure was reproduced in the current repository files. These findings do not establish a particular GitHub UI limit or browser cause. No localization text was changed. XML parsing does not establish that every BG3 content handle or tooltip resolves in game.

## Duplicate review

See [every duplicate and location](duplicates.md) and the [CSV occurrence inventory](duplicate-occurrences.csv).

- 57 Data text files; 2,111 declarations; 2,039 unique `(type, name)` identities.
- 63 repeated identities, comprising 135 occurrences (72 beyond one per identity).
- 3 groups have identical declaration lines; 60 have differing declaration lines.
- Includes duplicates within a single file and across files, using the restored SPELLS.txt.
- Same names under different types are treated as distinct identities.
- No duplicate entry was deleted or consolidated by this PR.

Seven source-inherited Spirit Guardians `TooltipStatusApply` lines omit whitespace between the key and value. Their locations and full text appear in [validation.md](validation.md); they were left for review. This audit checks text integrity and entry structure, not all BG3 expression semantics or gameplay behavior.

## Cross-mod follow-up

The [DeGreaser / ListoPatches comparison](crossmod-duplicates.md) scans both complete Stats folders by `(type, name)`. It finds **2 shared identities across 4 occurrences**, both with differing declarations and none with identical content. Full declarations, source locations, and diffs are included, along with a [CSV inventory](crossmod-occurrences.csv). No mod entries were changed. Run `python tools/audit_crossmod_stats.py` to reproduce this comparison.

## Reproduce the original internal audit

Run `python tools/audit_listopatches.py` from the repository. It validates current text/XML, recreates the duplicate inventory and validation report, and never rewrites mod files. Locations in the reports refer to this PR's content.
