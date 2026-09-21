# ListoPatches duplicate entry review

Scope: `ListoPatches/Public/ListoPatches/Stats/Generated/Data/**/*.txt`.

Identity is the exact, case-sensitive `(type, name)` pair. Different types sharing a name are not duplicates. All occurrences are retained for review.

- Files scanned: 57
- Declarations: 2111
- Unique identities: 2039
- Repeated identities: 63
- Occurrences in repeated identities: 135
- Occurrences beyond one per identity: 72
- Groups with identical declaration lines: 3
- Groups with differing declaration lines: 60

Comparison ignores blank lines, comment-only lines, and outer line whitespace; it preserves directive order and quoted values. Differing groups may also contain identical subsets.

Locations below are relative to the Data folder, with 1-based line numbers in this PR.

## PassiveData: `BB_PiercingWind_Passive`

2 occurrences; differing declarations.

Differing data fields: `Description`, `DescriptionParams`, `StatsFunctors`.

- [GraphicFade_Patches.txt:29](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/GraphicFade_Patches.txt#L29)
- [GraphicFade_Patches.txt:51](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/GraphicFade_Patches.txt#L51)

## PassiveData: `CSS_HelmArmor_Pass_Weavebane`

2 occurrences; differing declarations.

Differing data fields: `Boosts`.

- [Objects.txt:789](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/Objects.txt#L789)
- [Objects.txt:828](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/Objects.txt#L828)

## PassiveData: `JWL_Passive_SymbolKelemvor`

2 occurrences; differing declarations.

Differing data fields: `Conditions`, `StatsFunctorContext`, `StatsFunctors`.

- [Discordant Instruments.txt:66](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/Discordant%20Instruments.txt#L66)
- [GraphicFade_Patches.txt:1273](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/GraphicFade_Patches.txt#L1273)

## PassiveData: `MAG_Marsh_Strider_Passive`

2 occurrences; differing declarations.

Differing data fields: `Description`.

- [GraphicFade_Patches.txt:984](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/GraphicFade_Patches.txt#L984)
- [stolenDIQMiscPatches.txt:235](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/stolenDIQMiscPatches.txt#L235)

## PassiveData: `PP_FeastOnTheWounded_Passive`

2 occurrences; differing declarations.

Differing data fields: `StatsFunctors`.

- [GraphicFade_Patches.txt:479](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/GraphicFade_Patches.txt#L479)
- [GraphicFade_Patches.txt:723](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/GraphicFade_Patches.txt#L723)

## SpellData: `ProjectileStrike_ConjureVolley`

2 occurrences; identical declarations.

- [SPELLS.txt:715](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L715)
- [SPELLS.txt:721](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L721)

## SpellData: `Projectile_ArrowOfSmokepowder`

2 occurrences; differing declarations.

Differing data fields: `CastEffect`, `Description`, `DescriptionParams`, `DisplayName`, `ExplodeRadius`, `PrepareEffect`, `PrepareLoopSound`, `PrepareSound`, `SpellFail`, `SpellProperties`, `SpellRoll`, `SpellSuccess`, `TooltipAttackSave`, `TooltipDamageList`, `TooltipOnSave`, `Trajectories`.

- [IMDCSpell_Projectile.txt:123](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/IMDCSpell_Projectile.txt#L123)
- [Objects.txt:853](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/Objects.txt#L853)

## SpellData: `Projectile_EldritchBlast`

2 occurrences; differing declarations.

Differing data fields: `CombatAIOverrideSpell`, `SpellSuccess`, `SpellType`, `TargetConditions`, `TooltipDamageList`.

- [Adjustable Shove-Pull Targeting patches.txt:46](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/Adjustable%20Shove-Pull%20Targeting%20patches.txt#L46)
- [SPELLS.txt:16](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L16)

## SpellData: `Shout_HolyWeapon_Burst`

2 occurrences; differing declarations.

Differing data fields: `CastEffect`, `CastSound`, `CastTextEvent`, `DamageType`, `Description`, `DisplayName`, `ExtraDescription`, `HitAnimationType`, `Icon`, `PositionEffect`, `PrepareEffect`, `SpellAnimation`, `SpellSuccess`, `TargetEffect`, `TargetSound`, `TooltipOnSave`, `TooltipPermanentWarnings`, `TooltipStatusApply`, `VerbalIntent`.

- [SPELLS.txt:1841](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L1841)
- [SPELLS.txt:1858](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L1858)

## SpellData: `Target_ATT_IncendiaryCloud_Recast`

2 occurrences; identical declarations.

- [NPC_SPELLS.txt:94](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L94)
- [NPC_SPELLS.txt:104](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L104)

## SpellData: `Target_ConjureIntellectDevour`

2 occurrences; differing declarations.

Differing data fields: `Cooldown`, `Requirements`, `SpellProperties`.

- [CompanionSummonSpells.txt:25](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/CompanionSummonSpells.txt#L25)
- [SPELLS.txt:3201](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L3201)

## SpellData: `Target_DisarmingStrike`

2 occurrences; differing declarations.

Differing data fields: `CombatAIOverrideSpell`, `SpellSuccess`.

- [RandomCahootFixes.txt:21](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/RandomCahootFixes.txt#L21)
- [SPELLS.txt:3385](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L3385)

## SpellData: `Target_ElementalWeapon_Acid_5`

2 occurrences; differing declarations.

Differing data fields: `DescriptionParams`, `PowerLevel`, `RootSpellID`, `SpellContainerID`, `SpellFlags`, `SpellProperties`, `SpellType`, `TooltipStatusApply`, `UseCosts`.

- [SPELLS.txt:3511](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L3511)
- [SPELLS.txt:3516](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L3516)

## SpellData: `Target_ElementalWeapon_Cold_5`

2 occurrences; differing declarations.

Differing data fields: `DescriptionParams`, `PowerLevel`, `RootSpellID`, `SpellContainerID`, `SpellFlags`, `SpellProperties`, `SpellType`, `TooltipStatusApply`, `UseCosts`.

- [SPELLS.txt:3587](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L3587)
- [SPELLS.txt:3592](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L3592)

## SpellData: `Target_ElementalWeapon_Fire_5`

2 occurrences; differing declarations.

Differing data fields: `DescriptionParams`, `PowerLevel`, `RootSpellID`, `SpellContainerID`, `SpellFlags`, `SpellProperties`, `SpellType`, `TooltipStatusApply`, `UseCosts`.

- [SPELLS.txt:3663](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L3663)
- [SPELLS.txt:3668](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L3668)

## SpellData: `Target_ElementalWeapon_Lightning_5`

2 occurrences; differing declarations.

Differing data fields: `DescriptionParams`, `PowerLevel`, `RootSpellID`, `SpellContainerID`, `SpellFlags`, `SpellProperties`, `SpellType`, `TooltipStatusApply`, `UseCosts`.

- [SPELLS.txt:3739](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L3739)
- [SPELLS.txt:3744](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L3744)

## SpellData: `Target_ElementalWeapon_Thunder_5`

2 occurrences; differing declarations.

Differing data fields: `DescriptionParams`, `PowerLevel`, `RootSpellID`, `SpellContainerID`, `SpellFlags`, `SpellProperties`, `SpellType`, `TooltipStatusApply`, `UseCosts`.

- [SPELLS.txt:3815](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L3815)
- [SPELLS.txt:3820](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L3820)

## SpellData: `Target_FindFamiliar`

2 occurrences; differing declarations.

Differing data fields: `Cooldown`, `RequirementConditions`, `Requirements`.

- [SPELLS.txt:4085](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4085)
- [SPELLS.txt:4093](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4093)

## SpellData: `Target_FindFamiliar_Boo`

2 occurrences; differing declarations.

Differing data fields: `Cooldown`.

- [CompanionSummonSpells.txt:33](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/CompanionSummonSpells.txt#L33)
- [SPELLS.txt:4102](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4102)

## SpellData: `Target_FindFamiliar_Dog`

2 occurrences; differing declarations.

Differing data fields: `Cooldown`, `SpellProperties`.

- [CompanionSummonSpells.txt:1](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/CompanionSummonSpells.txt#L1)
- [SPELLS.txt:4111](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4111)

## SpellData: `Target_HolyRebuke`

2 occurrences; differing declarations.

Differing data fields: `DescriptionParams`, `UseCosts`.

- [SPELLS.txt:4715](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4715)
- [SPELLS.txt:4721](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4721)

## SpellData: `Target_HolyWeapon`

2 occurrences; differing declarations.

Differing data fields: `CastEffect`, `CastSound`, `CastTextEvent`, `Description`, `DescriptionParams`, `DisplayName`, `ExtraDescription`, `Icon`, `Level`, `PrepareEffect`, `PrepareLoopSound`, `PrepareSound`, `SpellAnimation`, `SpellProperties`, `SpellSchool`, `TargetConditions`, `TargetEffect`, `TargetRadius`, `TargetSound`, `TooltipStatusApply`, `TooltipUpcastDescription`, `UseCosts`, `VerbalIntent`, `VocalComponentSound`.

- [SPELLS.txt:4729](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4729)
- [SPELLS.txt:4740](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4740)

## SpellData: `Target_LightningCharged_3`

2 occurrences; differing declarations.

- [SPELLS.txt:4953](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4953)
- [SPELLS.txt:4960](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4960)

## SpellData: `Target_LightningCharged_4`

2 occurrences; differing declarations.

- [SPELLS.txt:4967](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4967)
- [SPELLS.txt:4974](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4974)

## SpellData: `Target_LightningCharged_5`

2 occurrences; differing declarations.

- [SPELLS.txt:4981](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4981)
- [SPELLS.txt:4988](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4988)

## SpellData: `Target_LightningCharged_6`

2 occurrences; differing declarations.

- [SPELLS.txt:4995](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L4995)
- [SPELLS.txt:5002](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5002)

## SpellData: `Target_LightningCharged_7`

2 occurrences; differing declarations.

- [SPELLS.txt:5009](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5009)
- [SPELLS.txt:5016](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5016)

## SpellData: `Target_LightningCharged_8`

2 occurrences; differing declarations.

- [SPELLS.txt:5023](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5023)
- [SPELLS.txt:5030](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5030)

## SpellData: `Target_MagicCircle`

2 occurrences; differing declarations.

Differing data fields: `Requirements`, `SpellFlags`, `SpellProperties`, `TooltipStatusApply`, `TooltipUpcastDescription`, `TooltipUpcastDescriptionParams`.

- [SPELLS.txt:5291](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5291)
- [SPELLS.txt:5301](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5301)

## SpellData: `Target_MotivationalSpeech`

5 occurrences; differing declarations.

Differing data fields: `AmountOfTargets`, `CombatAIOverrideSpell`, `Description`, `SpellProperties`, `TooltipStatusApply`.

- [NPC_SPELLS.txt:158](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L158)
- [NPC_SPELLS.txt:164](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L164)
- [SPELLS.txt:5511](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5511)
- [SPELLS.txt:5519](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5519)
- [SPELLS.txt:5529](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5529)

## SpellData: `Target_MotivationalSpeech_4`

3 occurrences; differing declarations.

Differing data fields: `CombatAIOverrideSpell`, `SpellProperties`.

- [NPC_SPELLS.txt:187](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L187)
- [NPC_SPELLS.txt:193](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L193)
- [SPELLS.txt:5537](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5537)

## SpellData: `Target_MotivationalSpeech_5`

3 occurrences; differing declarations.

Differing data fields: `CombatAIOverrideSpell`, `SpellProperties`.

- [NPC_SPELLS.txt:217](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L217)
- [NPC_SPELLS.txt:223](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L223)
- [SPELLS.txt:5545](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5545)

## SpellData: `Target_MotivationalSpeech_6`

3 occurrences; differing declarations.

Differing data fields: `CombatAIOverrideSpell`, `SpellProperties`.

- [NPC_SPELLS.txt:247](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L247)
- [NPC_SPELLS.txt:253](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L253)
- [SPELLS.txt:5551](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5551)

## SpellData: `Target_MotivationalSpeech_AI`

2 occurrences; differing declarations.

Differing data fields: `AreaRadius`.

- [NPC_SPELLS.txt:170](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L170)
- [NPC_SPELLS.txt:179](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L179)

## SpellData: `Target_MotivationalSpeech_AI_4`

2 occurrences; differing declarations.

Differing data fields: `AreaRadius`, `RootSpellID`.

- [NPC_SPELLS.txt:199](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L199)
- [NPC_SPELLS.txt:209](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L209)

## SpellData: `Target_MotivationalSpeech_AI_5`

2 occurrences; differing declarations.

Differing data fields: `AreaRadius`, `RootSpellID`.

- [NPC_SPELLS.txt:229](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L229)
- [NPC_SPELLS.txt:239](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L239)

## SpellData: `Target_MotivationalSpeech_AI_6`

2 occurrences; differing declarations.

Differing data fields: `AreaRadius`, `RootSpellID`.

- [NPC_SPELLS.txt:259](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L259)
- [NPC_SPELLS.txt:271](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L271)

## SpellData: `Target_Regenerate`

2 occurrences; differing declarations.

Differing data fields: `DescriptionParams`, `Requirements`, `SpellProperties`, `TooltipStatusApply`.

- [SPELLS.txt:5974](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5974)
- [SPELLS.txt:5982](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L5982)

## SpellData: `Target_SteelWindStrike_6`

2 occurrences; differing declarations.

- [NPC_SPELLS.txt:314](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L314)
- [NPC_SPELLS.txt:320](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L320)

## SpellData: `Target_SteelWindStrike_6_AI`

2 occurrences; differing declarations.

Differing data fields: `AreaRadius`, `RootSpellID`.

- [NPC_SPELLS.txt:326](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L326)
- [NPC_SPELLS.txt:336](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L336)

## SpellData: `Target_SteelWindStrike_7`

2 occurrences; differing declarations.

- [NPC_SPELLS.txt:344](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L344)
- [NPC_SPELLS.txt:350](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L350)

## SpellData: `Target_SteelWindStrike_7_AI`

2 occurrences; differing declarations.

Differing data fields: `AreaRadius`, `RootSpellID`.

- [NPC_SPELLS.txt:356](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L356)
- [NPC_SPELLS.txt:370](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L370)

## SpellData: `Target_SteelWindStrike_AI`

2 occurrences; differing declarations.

Differing data fields: `AreaRadius`.

- [NPC_SPELLS.txt:297](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L297)
- [NPC_SPELLS.txt:306](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L306)

## SpellData: `Target_Sunburst`

3 occurrences; differing declarations.

Differing data fields: `DescriptionParams`, `ExtraDescription`, `Icon`, `SpellFail`, `SpellProperties`, `SpellRoll`, `SpellSuccess`, `TooltipDamageList`.

- [NPC_SPELLS.txt:384](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L384)
- [NPC_SPELLS.txt:392](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/NPC_SPELLS.txt#L392)
- [SPELLS.txt:7213](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L7213)

## SpellData: `Teleportation_DimensionDoor`

2 occurrences; differing declarations.

Differing data fields: `AreaRadius`, `Description`, `OriginTargetConditions`, `SpellFlags`, `UseCosts`.

- [SPELLS.txt:7629](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L7629)
- [SPELLS.txt:7638](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L7638)

## SpellData: `Teleportation_DimensionDoor_7`

2 occurrences; differing declarations.

Differing data fields: `TooltipUpcastDescription`, `UseCosts`.

- [SPELLS.txt:7656](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L7656)
- [SPELLS.txt:7665](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L7665)

## SpellData: `Teleportation_DimensionDoor_8`

2 occurrences; differing declarations.

Differing data fields: `TooltipUpcastDescription`, `UseCosts`.

- [SPELLS.txt:7673](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L7673)
- [SPELLS.txt:7682](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L7682)

## SpellData: `Teleportation_DimensionDoor_9`

2 occurrences; differing declarations.

Differing data fields: `TooltipUpcastDescription`, `UseCosts`.

- [SPELLS.txt:7690](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L7690)
- [SPELLS.txt:7701](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L7701)

## SpellData: `Teleportation_MAG_Dolor_DimensionDoor`

2 occurrences; differing declarations.

Differing data fields: `SpellType`.

- [CahootGear.txt:563](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/CahootGear.txt#L563)
- [SPELLS.txt:7711](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/SPELLS.txt#L7711)

## SpellData: `VV_AssassinMark`

2 occurrences; differing declarations.

Differing data fields: `Cooldown`, `Description`, `DescriptionParams`, `SpellFail`, `SpellProperties`, `SpellRoll`, `SpellSuccess`, `TargetConditions`, `TooltipStatusApply`.

- [GraphicFade_Patches.txt:1037](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/GraphicFade_Patches.txt#L1037)
- [GraphicFade_Patches.txt:1093](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/GraphicFade_Patches.txt#L1093)

## StatusData: `BLESSING_OF_THE_TRICKSTER`

2 occurrences; differing declarations.

Differing data fields: `Boosts`, `Description`, `DisplayName`, `Icon`, `SoundLoop`, `SoundStop`, `StackId`, `StatusEffect`, `StatusGroups`.

- [BlessingOfTheTricksterBuff.txt:1](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/BlessingOfTheTricksterBuff.txt#L1)
- [STATUSES.txt:105](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L105)

## StatusData: `CRUSADERS_MANTLE`

2 occurrences; differing declarations.

Differing data fields: `Boosts`, `DescriptionParams`, `StatusPropertyFlags`.

- [RandomCahootFixes.txt:55](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/RandomCahootFixes.txt#L55)
- [STATUSES.txt:262](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L262)

## StatusData: `CRUSADERS_MANTLE_AURA`

2 occurrences; differing declarations.

Differing data fields: `Boosts`, `DescriptionParams`, `StatusPropertyFlags`.

- [RemoveLogSpam.txt:7](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/RemoveLogSpam.txt#L7)
- [STATUSES.txt:319](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L319)

## StatusData: `HEX_REAPPLY`

2 occurrences; differing declarations.

Differing data fields: `ApplyEffect`, `SoundStart`, `SoundStop`.

- [STATUSES.txt:936](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L936)
- [STATUSES.txt:943](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L943)

## StatusData: `HOLY_WEAPON`

3 occurrences; differing declarations.

Differing data fields: `Boosts`, `Description`, `DescriptionParams`, `DisplayName`, `Icon`, `StackId`, `StatusEffect`, `StatusPropertyFlags`.

- [STATUSES.txt:963](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L963)
- [STATUSES.txt:975](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L975)
- [STATUSES.txt:987](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L987)

## StatusData: `HOLY_WEAPON_TECHNICAL`

2 occurrences; differing declarations.

Differing data fields: `Boosts`, `OnRemoveFunctors`, `RemoveConditions`, `RemoveEvents`, `StackId`, `StatusPropertyFlags`.

- [STATUSES.txt:994](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L994)
- [STATUSES.txt:1004](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L1004)

## StatusData: `LONGSTRIDER`

2 occurrences; differing declarations.

Differing data fields: `SoundStop`, `StackId`.

- [STATUSES.txt:1043](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L1043)
- [STATUSES.txt:1050](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L1050)

## StatusData: `MAGIC_WEAPON`

2 occurrences; differing declarations.

Differing data fields: `RemoveConditions`, `RemoveEvents`, `SoundLoop`, `SoundStop`.

- [STATUSES.txt:1075](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L1075)
- [STATUSES.txt:1082](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L1082)

## StatusData: `SCL_MOONSHIELD`

2 occurrences; identical declarations.

- [STATUSES.txt:1508](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L1508)
- [STATUSES.txt:1514](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L1514)

## StatusData: `SHIELD_OF_FAITH`

3 occurrences; differing declarations.

Differing data fields: `Boosts`, `Description`, `StatusEffect`.

- [STATUSES.txt:1592](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L1592)
- [STATUSES.txt:1599](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L1599)
- [STATUSES.txt:1605](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L1605)

## StatusData: `STONESKIN`

2 occurrences; differing declarations.

Differing data fields: `ApplyEffect`, `Boosts`, `Description`, `Icon`, `OnApplyFunctors`, `StackId`.

- [STATUSES.txt:1683](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L1683)
- [STATUSES.txt:1694](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/STATUSES.txt#L1694)

## Weapon: `MAG_Fire_FireDamage_Quarterstaff`

2 occurrences; differing declarations.

Differing data fields: `Boosts`, `DefaultBoosts`.

- [CahootGear.txt:125](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/CahootGear.txt#L125)
- [stolenDIQMiscPatches.txt:145](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/stolenDIQMiscPatches.txt#L145)

## Weapon: `WPN_Scimitar_FlameBlade`

2 occurrences; differing declarations.

Differing data fields: `BoostsOnEquipMainHand`, `Damage`, `DefaultBoosts`, `Proficiency Group`, `Weapon Group`, `Weapon Properties`.

- [WEAPONS.txt:6](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/WEAPONS.txt#L6)
- [stolenDIQMiscPatches.txt:150](../../ListoPatches/Public/ListoPatches/Stats/Generated/Data/stolenDIQMiscPatches.txt#L150)
