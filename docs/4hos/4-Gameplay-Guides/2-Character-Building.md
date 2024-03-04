---
layout: default
title: Character Building
has_toc: true
parent: Gameplay Guides
nav_order: 2
description: Halls of Sovngarde Installation Guide
---

# Character Building

:::info
### **Original Sources for All Information**

- [All Requiem Guides](https://www.reddit.com/r/skyrimrequiem/comments/hijmml/guides_resources_links_for_beginners_and_advanced/?utm_medium=android_app&utm_source=share)
- [Requiem Guide](https://www.reddit.com/r/skyrimrequiem/comments/1w5cej/surviving_the_first_few_hours_in_requiem_or/) 
- [Noxcrab's Tweaks](https://www.nexusmods.com/skyrimspecialedition/mods/42591)
- [Immersive Divine Blessings](https://www.nexusmods.com/skyrimspecialedition/mods/61297)
- [Experience](https://www.nexusmods.com/skyrimspecialedition/mods/17751)
- [Static Skill Leveling Rewritten](https://www.nexusmods.com/skyrimspecialedition/mods/89940)
- [Frostfall](https://www.nexusmods.com/skyrimspecialedition/mods/671)
- [Simple Hunting Overhaul](https://www.nexusmods.com/skyrimspecialedition/mods/95943)
- [Campfire](https://www.nexusmods.com/skyrimspecialedition/mods/667)
- [Skills of the Wild](https://www.nexusmods.com/skyrimspecialedition/mods/37693)
- [Wounds](https://www.nexusmods.com/skyrimspecialedition/mods/17581)
- [Last Seed](https://www.nexusmods.com/skyrimspecialedition/mods/56393)
:::
*** 
## Stats and Skills

**Racial Derived Attributes**
* Health Regen (%) = 0.2 + Health_Offset / 200 (Exception: Argonian 0.3)
* Magicka Regen (%) = 1.1 + Magicka_Offset / 200
* Stamina Regen (%) = 1.6 + Stamina_Offset / 200
* Power Attack Cost (%) = 100 - Health_Offset - Stamina_Offset (max 100%)
* Spell Casting Cost (%) = 100 - Magicka_Offset / 2 (max 100%)
* Carryweight = Health
* Unarmed Damage = 8 + Health_Offset / 100 (Exception: Argonian 10, Khajiit 10)

**Mechanics**
* Skill bonuses give skill gain bonus by same in %. +10 in Alteration will give you +10% skill gain in Alteration.
* Khajiit Lockpicking is changed to lockpicking proficiency, shared with Argonians. Gives +10 Lockpicking Expertise when Lockpicking perk is not taken, instead of stacking bonus.
* You still don't regenerate Health by default. The racial Health Regen (HealRate) is another multiplier applied for health regeneration, not the health regeneration value that Requiem sets to 0 by default. You still need other Health Regeneration effects to passive regenerate health.
* Racial attribute for power attack cost and spell costs are capped at 100%. Nords for example won't have increased spell costs, although they have minus offset to Magicka.

**Proficiency** 
* Skill bonuses grant proficiency in the skill, if they exist. For example, Argonians have proficiency in Alchemy, Lockpicking, and Sneak. As their starting levels are +10/+5/+5 (15/10/10), respectively.
* Alchemy : Can brew potions without a perk in Alchemy. (Argonian, Bosmer, Breton, Khajiit)
* Enchanting : Can recharge enchanted items without a perk in Enchanting. (Altmer, Breton)
* Lockpicking : Can pick novice locks without a perk in Lockpicking. (Argonian, Khajiit)
* Pickpocket : can pickpocket without a perk in Pickpocket. (Bosmer, Khajiit)
* Sneak : Can sneak without a perk in Sneak. (Argonian, Bosmer, Dunmer, Khajiit)

***
## Races

**Altmer**  
The Altmer of Summerset Isle are called "High" Elves in the Empire, describing both their physical appearance and their snobbish personality. The arcane ability of High Elves surpasses all other races in Tamriel. Their Highborn ability grants them increased magicka and spell power. They are weak in physical combat, however, and their magic affinity makes them more susceptible to elemental damage.

*Racial Focus*
* Primary Attribute: Magicka
* Ideal Role: Glass Cannon Mage

*Attributes*
* Health: 90
* Magicka: 120
* Stamina: 90
* Health Regen: 0.15%
* Magicka Regen: 1.20%
* Stamina Regen: 1.55%
* Power Attack Cost: -0%
* Spell Cost: -10%
* Carry Weight: 90
* Unarmed Damage: 7
* Height (M/F): 1.080 / 1.080

*Skills*
* +10: Alteration
* +5: Conjuration, Destruction, Enchanting, Illusion, Restoration

*Abilities*
* Highborn: Magicka +30, Magicka Regeneration +50%, spell power +5%, Disease Resist +50%
* Weakness to Elements: Elemental Weakness 25%
  
**Argonian**  
Argonians are the reptilian denizens of Black Marsh. Years of defending their borders have made them experts in stealth and evasion, and their natural abilities make them equally at home in water and on land. They are resistant to diseases and poisons and enjoy raw meat. Their Histskin allows them to quickly heal their wounds.

*Racial Focus*
* Primary Attribute: Balanced
* Ideal Role: Alchemist

*Attributes*
* Health: 100
* Magicka: 100
* Stamina: 100
* Health Regen: 0.30%
* Magicka Regen: 1.10%
* Stamina Regen: 1.60%
* Power Attack Cost: -0%
* Spell Cost: -0%
* Carry Weight: 100
* Unarmed Damage: 10
* Height (M/F): 1.010 / 1.000

*Skills*
* +10: Alchemy
* +5: One-handed, Restoration, Alchemy, Evasion, Lockpicking, Sneak

*Abilities*
* Histskin: Health Regeneration +1, Potion effect/duration +10%
* Claws: Unarmed damage +5 without heavy gauntlets
* Resist Poison and Disease: Poison Resist +75%, Disease Resist +75%
* Waterbreathing: Waterbreathing
* Strong Stomach: Can eat raw food

**Bosmer**  
The Bosmer, or Wood Elves, originate from the sacred forest of Valenwood. Their culture is highly carnivorous and even cannibalistic, derived from the Green Pact with the forest, in which they harm no plant. Their dexterity makes them excellent scouts and thieves, and there are no finer archers in all of Tamriel. They have a natural resistance to poison and disease, and can command nearby animals to fight for them.

*Racial Focus*
* Primary Attribute: Stamina
* Ideal Role: Arcane Ranger

*Attributes*
* Health: 90
* Magicka: 100
* Stamina: 110
* Health Regen: 0.15%
* Magicka Regen: 1.10%
* Stamina Regen: 1.65%
* Power Attack Cost: -0%
* Spell Cost: -0%
* Carry Weight: 90
* Unarmed Damage: 7
* Height (M/F): 0.980 / 1.000

*Skills*
* +10: Marksmanship
* +5: Alteration, Alchemy, Evasion, Pickpocket, Sneak

*Abilities*
* Green Pact Feast: (Food) Magicka Regeneration +2, Stamina Regeration +2, 300 sec
* Eye of the Hunt: Ranged Armor Penetration +5
* Resist Poison and Disease: Poison Resist +25%, Disease Resist +50%
* Strong Stomach: Can eat raw food
* Command Animal: (Lesser Power) Command Animal up to level 25, area 50, cost 75 magicka

**Breton**  
Bretons, the inhabitants of the province of High Rock, are the human descendants of the Elves and the ancient race of the Nedes. While Bretons are physically weak, they can tap on magicka more than any other human race and they are particularly capable in the school of Conjuration. Their magic resistance blocks one fifth of incoming spell damage and their Dragonskin ability can fully absorb elemental damage by chance.

*Racial Focus*
* Primary Attribute: Magicka
* Ideal Role: Witchhunter Mage

*Attributes*
* Health: 90
* Magicka: 110
* Stamina: 100
* Health Regen: 0.15%
* Magicka Regen: 1.15%
* Stamina Regen: 1.60%
* Power Attack Cost: -0%
* Spell Cost: -5%
* Carry Weight: 90
* Unarmed Damage: 7
* Height (M/F): 1.000 / 0.950

*Skills*
* +10: Conjuration
* +5: Enchanting, Illusion, Restoration, Alchemy, Speech

*Abilities*
* Dragonskin: Avoid elemental damage by 10% chance
* Magic Resistance: Magic Resist +20%  

**Dunmer**  
The Dunmer, or Dark Elves, are the ash-skinned, red-eyed, Elven people of Vvardenfell. They combine powerful intellects with strong and agile physiques, producing excellent warriors and evokers. They are extremely resistant to fire, blocking half of incoming fire damage. They're particularly skilled in Destruction magic, and can imbue more power into damaging spells.

*Racial Focus*
* Primary Attribute: Balanced
* Ideal Role: Spellsword

*Attributes*
* Health: 100
* Magicka: 100
* Stamina: 100
* Health Regen: 0.20%
* Magicka Regen: 1.10%
* Stamina Regen: 1.60%
* Power Attack Cost: -0%
* Spell Cost: -0%
* Carry Weight: 100
* Unarmed Damage: 8
* Height (M/F): 1.000 / 1.000

*Skills*
* +10: Destruction
* +5: One-handed, Conjuration, Illusion, Evasion, Sneak

*Abilities*
* Ashlander: Destruction spells are 10% stronger
* Resist Fire: Fire Resist +50%  

**Imperial**  
The cosmopolitan citizens of Cyrodiil are descended from the founders of the glorious Empire that has influenced Tamriel's history throughout the eras. Imperials are talented leaders and traders among society, skilled in both magic and combat thanks to martial and academic education of the schools of Cyrodiil. Their leadership can encourage their followers to fight well in combat.

*Racial Focus*
* Primary Attribute: Balanced
* Ideal Role: Leader

*Attributes*
* Health: 100
* Magicka: 100
* Stamina: 100
* Health Regen: 0.20%
* Magicka Regen: 1.10%
* Stamina Regen: 1.60%
* Power Attack Cost: -0%
* Spell Cost: -0%
* Carry Weight: 100
* Unarmed Damage: 8
* Height (M/F): 1.000 / 1.000

*Skills*
* +10: Speech
* +5: Block, Heavy Armor, One-handed, Destruction, Restoration

*Abilities*
* Voice of the Emperor: Speech +15, Stamina/Magicka +30 for nearby followers
* Imperial Diversity: Health/Magicka/Stamina +10, skill rate +5%  

**Khajiit**  
The Khajiit are a race of feline humanoids hailing from the province of Elsweyr, well-known as great merchants but also as smugglers and thieves. They are very fast and outrun all other races which, combined with a high stamina reserve, makes them fearsome skirmishers. However, they are seldom gifted with the skill to harness magical forces. All Khajiit can see in the dark at will and eat raw meat, and their sharp claws are as lethal as knives.

*Racial Focus*
* Primary Attribute: Stamina
* Ideal Role: Rogue Thief

*Attributes*
* Health: 90
* Magicka: 90
* Stamina: 120
* Health Regen: 0.15%
* Magicka Regen: 1.05%
* Stamina Regen: 1.70%
* Power Attack Cost: -10%
* Spell Cost: -0%
* Carry Weight: 90
* Unarmed Damage: 10
* Height (M/F): 1.000 / 0.950

*Skills*
* +10: Sneak
* +5: One-handed, Alchemy, Evasion, Lockpicking, Pickpocket

*Abilities*
* Feline Agility: Speed +10%, Fall damage reduced by 75%
* Fingersmith: Lockpicking Expertise +2, Fortify Pickpocket +20%
* Claws: Unarmed damage +5 without heavy gauntlets
* Strong Stomach: Can eat raw food
* Night Eye: (Lesser Power) Night Eye  

**Nord**  
Skyrim's Nords are tall and fair, with a culture which values honor, glory, and loyalty to family and community. Nords have come to distrust magic, but excel in physical warfare. They are greatly resistant to frost and lightning damage, reducing them by half and by one quarter respectively. Nords also have innate ability to use Shouts, and can unleash immense power through the words of power when mastered.

*Racial Focus*
* Primary Attribute: Health
* Ideal Role: Shout Warrior

*Attributes*
* Health: 110
* Magicka: 80
* Stamina: 110
* Health Regen: 0.25%
* Magicka Regen: 1.00%
* Stamina Regen: 1.65%
* Power Attack Cost: -20%
* Spell Cost: -0%
* Carry Weight: 110
* Unarmed Damage: 9
* Height (M/F): 1.030 / 1.030

*Skills*
* +10: Two-handed
* +5: Block, Heavy Armor, One-handed, Smithing, Evasion

*Abilities*
* Ancient Tongues: Shout power +10%, Shout cooldown -10%
* Barbaric Strength: Melee Damage +5%
* Resist Frost and Shock: Frost Resist +50%, Shock Resist +25%
  
**Orsimer**  
The Orsimer or "Pariah Folk", commonly called Orcs, come from Orsinium in the west. Their savage appearance and customs sometimes cause fear, but they have won acceptance for their distinguished service in the Legion. Orcs' superior strength makes them formidable warriors, though use of magic requires extensive training. Their incredible endurance grants them resistance to both magical and physical harm.

*Racial Focus*
* Primary Attribute: Health
* Ideal Role: Tank

*Attributes*
* Health: 110
* Magicka: 80
* Stamina: 110
* Health Regen: 0.25%
* Magicka Regen: 1.00%
* Stamina Regen: 1.65%
* Power Attack Cost: -20%
* Spell Cost: -0%
* Carry Weight: 110
* Unarmed Damage: 9
* Height (M/F): 1.045 / 1.045

*Skills*
* +10: Heavy Armor
* +5: Block, One-handed, Smithing, Two-handed, Destruction

*Abilities*
* Bulwark: Health +30, Magic Resist +10, Armor Rating +100
* Strong Stomach: Can eat raw food
  
**Redguard**  
The dark-skinned, wiry-haired Redguards of Hammerfell seem born for battle, though their proud and independent spirits suit free-ranging heroism more. They have a hardy constitution and natural resistance to poison and disease, but tend to shun their magic. They are full of stamina and naturally skilled in melee combat, making them one of the strongest warriors in Tamriel.

*Racial Focus*
* Primary Attribute: Stamina
* Ideal Role: Fighter

*Attributes*
* Health: 100
* Magicka: 80
* Stamina: 120
* Health Regen: 0.20%
* Magicka Regen: 1.00%
* Stamina Regen: 1.70%
* Power Attack Cost: -20%
* Spell Cost: -0%
* Carry Weight: 100
* Unarmed Damage: 8
* Height (M/F): 1.005 / 1.005

*Skills*
* +10: One-handed
* +5: Block, Marksmanship, Smithing, Two-handed, Evasion

*Abilities*
* Adrenaline Rush: Stamina +30, Sprinting stamina cost -1
* Martial Prowess: Melee Armor Penetration +5
* Resist Poison and Disease: Poison Resist +50%, Disease Resist +50%

***
## Standing Stones

**Warrior Group**  

*The Warrior*  
The Warrior is the first Guardian Constellation and he protects his charges during their Seasons. The Warrior's own season is Last Seed when his Strength is needed for the harvest. His Charges are the Lady, the Steed, and the Lord. Those born under the sign of the Warrior are skilled with weapons of all kinds, but prone to short tempers.

* Health +50
* Weapon damage +10%
* Armor penetration +5
  
*The Lady*   
The Lady is one of the Warrior's Charges and her Season is Heartfire. Those born under the sign of the Lady are kind and tolerant.

* Health +25
* Health regen +50%
* Stamina +25
* Stamina regen +50%
* Removes the exertion penalty (-100% magicka/stamina regeneration while running)

*The Lord*  
The Lord's Season is First Seed and he oversees all of Tamriel during the planting. Those born under the sign of the Lord are stronger and healthier than those born under other signs.  

* Armor rating +100
* Magic resist +10%  

*The Steed*  
The Steed is one of the Warrior's Charges, and her Season is Mid Year. Those born under the sign of the Steed are impatient and always hurrying from one place to another.  

* Movement speed +10%
* Sprinting speed +10%
* Carry weight +25

**Mage Group**  

*The Mage*  
The Mage is a Guardian Constellation whose Season is Rain's Hand when magicka was first used by men. His Charges are the Apprentice, the Golem, and the Ritual. Those born under the Mage have more magicka and talent for all kinds of spellcasting, but are often arrogant and absent-minded.
Magicka +100

*The Apprentice*  
The Apprentice's Season is Sun's Height. Those born under the sign of the apprentice have a special affinity for magick of all kinds, but are more vulnerable to magick as well.

* Magicka +100
* Magicka regen +200%
* Weakness to Magic 25%

*The Atronach*  
The Atronach (often called the Golem) is one of the Mage's Charges. Its season is Sun's Dusk. Those born under this sign are natural sorcerers with deep reserves of magicka, but they cannot generate magicka of their own.

* Magicka +300
* Magicka regen -100000%
* Magic absorb chance +50%
* Prevents magicka loss on hit.
* Foods don't restore magicka, and long-lasting food buffs that contain magicka & regeneration bonuses will have no effect (e.g. Elsweyr Fondue). However, other food items will work (e.g. Beef Stew). Restore Magicka Potions are no longer less effective.

*The Ritual*  
The Ritual is one of the Mage's Charges and its Season is Morning Star. Those born under this sign have a variety of abilities depending on the aspects of the moons and the Divines.

* (Power) Ritual: Blessed Fire - Turn Undead 50 pts, 30 sec, 100 area
* (Power) Ritual: Salvation - Restore health 500 pts, 100 area
* (Power) Ritual: Dead Horde - Reanimate 50 pts, 300 sec, 100 area

**Thief Group**

*The Thief*  
The Thief is the last Guardian Constellation, and her Season is the darkest month of Evening Star. Her Charges are the Lover, the Shadow, and the Tower. Those born under the sign of the Thief are not typically thieves, though they take risks more often and only rarely come to harm. They will run out of luck eventually, however, and rarely live as long as those born under other signs.

* Fortify Sneak, Pickpocket, Lockpicking 25
* Lockpicking expertise +20
* Critical chance 10%
* Dodge chance 10% (take no physical damage)
* Removes unperked Sneak penalty (can sneak without Stealth perk)

*The Lover*  
The Lover is one of the Thief's Charges and her season is Sun's Dawn. Those born under the sign of the Lover are graceful and passionate.

* Stamina +25
* Dodge chance 25% (take no physical damage)
* Speech +25

*The Shadow*   
The Shadow's Season is Second Seed. The Shadow grants those born under her sign the ability to hide in shadows.

* Fortify Sneak 50
* Muffle 25%
* Removes unperked Sneak penalty (can sneak without Stealth perk)
* (Power) Moonshadow - Invisibility 60 sec, auto-recast on sneak

*The Tower*  
The Tower is one of the Thief's Charges and its Season is Frostfall. Those born under the sign of the Tower have a knack for finding gold and can open locks of all kinds.

* Fortify Lockpicking 50
* Lockpicking expertise +40
* Effortless locks are unnoticed as crime
* Create wax keys for effortless locks
* Fortify Barter +25%

**Serpent Group**

*The Serpent*  
The Serpent wanders about in the sky and has no Season, though its motions are predictable to a degree. No characteristics are common to all who are born under the sign of the Serpent. Those born under this sign are the most blessed and the most cursed.

* Armor penetration +10%
* Poison resist +50%
* Protection from paralysis
* (Power) Serpent's Curse - Dispel, Paralyze 5 sec, Poison damage 5 pts 30 sec, Magical damage 5 pts 30 sec. Damage health 50 pts on self.

***
