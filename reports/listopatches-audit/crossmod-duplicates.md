# DeGreaser / ListoPatches shared stat entries

Audited commit: `f20b3f620cf88c7e024506323caf169befe1685d` (PR #8, including the repaired SPELLS.txt).

Scope: all `.txt` files recursively beneath `DeGreaser/Public/DeGreaser/Stats` and `ListoPatches/Public/ListoPatches/Stats`. Exact, case-sensitive `(type, name)` pairs identify entries. Same names under different types remain distinct. Treasure-table declarations use a different syntax and are not entry/type identities.

| Mod | Text files scanned | Files with entries | Declarations | Unique identities |
| --- | ---: | ---: | ---: | ---: |
| DeGreaser | 17 | 16 | 201 | 199 |
| ListoPatches | 58 | 57 | 2111 | 2039 |

- Shared identities: **2**.
- Identical declaration groups across both mods: **0**.
- Differing declaration groups across both mods: **2**.
- Total occurrences belonging to shared identities: **4**.

No mod entries were changed or removed. Comparison ignores comment-only lines, blank lines, and outer line whitespace, but preserves quoted values and directive order. Missing or ambiguous entry types cause the audit to stop rather than silently omit entries.

These are overlapping definitions, not proof of an accidental duplicate. Inheritance and load order need review before consolidation. The shield patch explicitly uses its own existing entry name as its parent and appears intentional. The Halsin status sets a different parent and a different Boosts value. Neither pair is eligible for identical-content consolidation.

Reproduce with `python tools/audit_crossmod_stats.py`. Internal-only duplicates are excluded from this cross-mod report; the earlier ListoPatches internal audit remains in `duplicates.md`.

## Armor: `DeGreaser_Shield_of_Spell_Reflection`

### DeGreaser

[DeGreaser/Public/DeGreaser/Stats/Generated/Data/Armor.txt:37](https://github.com/ajaxxxxxxxx/ajaxxxxxxxx.github.io/blob/f20b3f620cf88c7e024506323caf169befe1685d/DeGreaser/Public/DeGreaser/Stats/Generated/Data/Armor.txt#L37)

```text
new entry "DeGreaser_Shield_of_Spell_Reflection"
type "Armor"
using "ARM_Shield"
data "RootTemplate" "4b255ce5-912c-414e-b936-d9ae4dca0dbd"
data "Rarity" "VeryRare"
data "Boosts" "Resistance(Acid,Resistant)"
data "ArmorClass" "+2"
data "Weight" "1"
data "ValueUUID" "a57433fc-8be8-4efb-ac6b-a625b3bdcd18"
data "ValueScale" "4"
data "PassivesOnEquip" "MageSlayer_Advantage;MageSlayer_AttackCaster;MageSlayer_BreakConcentration"
data "Unique" "1"
```

### ListoPatches

[ListoPatches/Public/ListoPatches/Stats/Generated/Data/DegreaserAdamantStuff.txt:1](https://github.com/ajaxxxxxxxx/ajaxxxxxxxx.github.io/blob/f20b3f620cf88c7e024506323caf169befe1685d/ListoPatches/Public/ListoPatches/Stats/Generated/Data/DegreaserAdamantStuff.txt#L1)

```text
new entry "DeGreaser_Shield_of_Spell_Reflection"
type "Armor"
using "DeGreaser_Shield_of_Spell_Reflection"
data "Rarity" "Legendary"
data "Boosts" "CriticalHit(AttackTarget,Success,Never);Resistance(Cold, Resistant);Resistance(Acid, Resistant)"
data "ValueScale" "5.5"
data "PassivesOnEquip" "MAG_MeleeDebuff_AttackDebuff1_OnDamage_Shield_Passive;MOD_AdamantineClad_Shield;MAG_ShieldRiposte_Passive;MageSlayer_Advantage;MageSlayer_AttackCaster;MageSlayer_BreakConcentration"
```

### Declaration differences

```diff
--- DeGreaser
+++ ListoPatches
@@ -1,12 +1,7 @@
 new entry "DeGreaser_Shield_of_Spell_Reflection"
 type "Armor"
-using "ARM_Shield"
-data "RootTemplate" "4b255ce5-912c-414e-b936-d9ae4dca0dbd"
-data "Rarity" "VeryRare"
-data "Boosts" "Resistance(Acid,Resistant)"
-data "ArmorClass" "+2"
-data "Weight" "1"
-data "ValueUUID" "a57433fc-8be8-4efb-ac6b-a625b3bdcd18"
-data "ValueScale" "4"
-data "PassivesOnEquip" "MageSlayer_Advantage;MageSlayer_AttackCaster;MageSlayer_BreakConcentration"
-data "Unique" "1"
+using "DeGreaser_Shield_of_Spell_Reflection"
+data "Rarity" "Legendary"
+data "Boosts" "CriticalHit(AttackTarget,Success,Never);Resistance(Cold, Resistant);Resistance(Acid, Resistant)"
+data "ValueScale" "5.5"
+data "PassivesOnEquip" "MAG_MeleeDebuff_AttackDebuff1_OnDamage_Shield_Passive;MOD_AdamantineClad_Shield;MAG_ShieldRiposte_Passive;MageSlayer_Advantage;MageSlayer_AttackCaster;MageSlayer_BreakConcentration"
```

## StatusData: `HALSIN_SHADOWPORTAL_HARDCORE`

### DeGreaser

[DeGreaser/Public/DeGreaser/Stats/Generated/Data/Act1NerfPassives.txt:1](https://github.com/ajaxxxxxxxx/ajaxxxxxxxx.github.io/blob/f20b3f620cf88c7e024506323caf169befe1685d/DeGreaser/Public/DeGreaser/Stats/Generated/Data/Act1NerfPassives.txt#L1)

```text
new entry "HALSIN_SHADOWPORTAL_HARDCORE"
type "StatusData"
data "StatusType" "BOOST"
using "HALSIN_SHADOWPORTAL_HARDCORE"
data "Boosts" ""
```

### ListoPatches

[ListoPatches/Public/ListoPatches/Stats/Generated/Data/Status_BOOST.txt:259](https://github.com/ajaxxxxxxxx/ajaxxxxxxxx.github.io/blob/f20b3f620cf88c7e024506323caf169befe1685d/ListoPatches/Public/ListoPatches/Stats/Generated/Data/Status_BOOST.txt#L259)

```text
new entry "HALSIN_SHADOWPORTAL_HARDCORE"
type "StatusData"
data "StatusType" "BOOST"
using "DIFFICULTY_GUSTAVDEV"
data "Boosts" "IncreaseMaxHP(1%)"
```

### Declaration differences

```diff
--- DeGreaser
+++ ListoPatches
@@ -1,5 +1,5 @@
 new entry "HALSIN_SHADOWPORTAL_HARDCORE"
 type "StatusData"
 data "StatusType" "BOOST"
-using "HALSIN_SHADOWPORTAL_HARDCORE"
-data "Boosts" ""
+using "DIFFICULTY_GUSTAVDEV"
+data "Boosts" "IncreaseMaxHP(1%)"
```
