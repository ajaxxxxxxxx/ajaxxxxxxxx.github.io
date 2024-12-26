---
layout: default
title: Change Log and Release Notes
nav_order: 5
description: Listonomicon
---

# Welcome to Listonomicon's Changelog

## [Install Instructions](https://www.modlists.net/docs/7listo/Install) and [Listo Game Guide](https://www.modlists.net/docs/7listo/GameBalance)

## Releases (Newest to Oldest)  

[View included, rejected, and under review mods for Listo here!](https://docs.google.com/spreadsheets/d/1_dZdM_16xeE4yIqKYyk7HMjLI3WW7PhfpdlrKHM4vyg/edit?usp=sharing)

## Listonomicon v3.3.1 (wip unreleased)

Save Safe? Yes

1. Fixed the order of things in MO2 (no harm items were just under the wrong section)
2. Updated Degreaser with 2 more weapons in Act 3. Nerfed blunderbusses.
3. Added random misc unloved enemies to the CX config.
4. Added Hope to the CX config, hopefully she will live longer compared to the increased challenge of Listo :)
5. Added an extra beholder, and made the beholders much much worse, for the base and hard CX configs >:)

## Listonomicon v3.3

Save Safe? Yes-ish* but you will have to re-add any optional mods that have been removed, if you have them active in your game. And you will need to reenable the Debug Book (very very bottom of MO2)

1. Rebalanced the prices and effects of firearms, to the best of my ability. Firearms from the ATF/Firearms mod, and from Artificer, should now feel like they were designed together instead of having weird arbitrary stat differences. Firearms in general are a little less powerful with this patch, but they are more consistent than bows and crossbows. For example, the blunderbus does 4d4 damage (4-16) instead of 2d8+2 (2-18). The maximum damage is slightly smaller but the average roll is much better. Speaking of the blunderbus, its range has also been increased by about half. 
2. Removed any "AI party members" type optional mods due to them not working or causing game instability.
3. Items in "Ajax's Degreaser" should now have proper prices that interract correctly with game systems (charisma, trader opinion of you, etc).
4. Rebalanced Degreaser items (again).
5. Degreaser is now also my own catch-all patches file.
6. Removed other optional mods that were funny/silly, but mostly just inflated the download size for 99.9% of players (like the raphael gnome mod). You can easily add these back yourself if you miss them.
7. Removed More Trash Monsters. Many More Monsters and DHM remain optional choices included in the list.
8. Added Goon's Companion Protection.
9. Added Barrel Tweaks.
10. Updated to the latest v0.5.6 of Zino's BG3-MO2 plugin. This hopefully fixes issues with mods that it previously failed to load, like cosmetic mods.
11. Removed Hide Notifications, made Approval Rate Customizer an optional mod. If it's enabled it will cause you to receive double approval gain/loss notifications.
12. Half-Orcs/Scro finally have (limited) custom heads again after Jerenski added support.
13. Updated various FED mods, cosmetics, More Mimics, and Bonk Enhanced.
14. Removed Soul Coin Tweaks, in favor of implementing Soul Exchange: A Soul Coin Economy Mod.
15. Titan's Grip moved from "Optional" to core. With a Degreaser patch that means Titan Grip requires 21+ Strength.
16. Reverted changes to the Mobility feat.
17. Incorporated DIQ's many fixes from the generous Mr Goonsack into Degreaser to reduce the number of downloads. This is *at least* as many lines of .json changes, treasure table clean ups, fixes, and improvements as the size of Listo's Combat Extender config so us Listo players don't have to feel too bad lifting DIQ's work right back :)

**Combat Extender Tweaks**

1. Base file: Increased enemy HP a smidge.
2. Hard mode: For every level of spell caster, they gain 1 extra spell slot a size up (someone with a Level 1 bonus spell list gets 1 2nd level slot, someone who gets a Level 4 bonus spell list gets a 5th level slot, etc).
3. Removed from spells and features that AI weren't using, or weren't using right.
4. Base and hard mode: Greater Invisibility is added to the L4C list (boss casters).
5. Added Iron Throne Sahuagin (initial + Wave 1 and Wave 2) to CX. They are mostly barbarians, with a few rangers. Many have the Sentinel feat feature that reduces a creature's movement speed to 0 if hit with an attack of opportunity.
6. Hard mode: Iron Throne Sahuagin have extra reactions per turn. Sahuagin rangers are also rogues.
7. Easy mode: Bulette is vulnerable to bludgeoning damage.
8. All versions: Gave Isobel and the Nightsong Potent Cantrip.

## Listonomicon v3.2.1

Save Safe? Yes. Any enemies already loaded in your save might act funky until CX's debugger kicks in to restore their stats to baseline and then apply the new math.

1. Added about 50 new entries to Combat Extender just to extensively cover Act 3. This is in addition to the +30ish entries added with the help of Cahoot in the previous update. CX now includes all (or most) members of the Murder Tribunal, including the "Test" to impress the Tribunal; more members of the order of Bane, including firework shop guards, Steelwatch Foundry guards, Gortash's bodyguards, Gortash's office guards, and Gortash himself (Gortash is especially nasty now); and various murderers, cultists, and enemies encountered throughout the Lower City such as the ambush in the park. The murder tribunal test should now seriously kick the ass off anyone who goes in unprepared. In my limited testing (teleporting to the fight and just trying to cross the bridge), my invincible level 1 test Tav still lost due to all of the knockback and similar effects disrupting the ability to move. But it is still concievably possible for a prepared party.
2. Rebalance and typo fix for Ajax's Degreaser.
3. Gave Lathander's Blood's guards various shoving attacks. The goal is to make Lathander's Blood something you _earn_, not something you just get incidentally on your way through the Creche.
4. Ensured all enemies with CX - Class boosts have access to shove. Clerics and Paladins in Act 3 will have shield shove (if they have a shield), Fighters in Act 3 will have a rush shove attack.
5. A handful of enemies gain +1d4 force damage to spells when their health drops below 50%.
6. Several enemy Animated Armor sets have Lightning Absorption.
7. Other various CX tweaks/fixes/improvements.
8. Reduced/delayed enemy AC gain again.
9. Delayed enemy stat increase gain again.
10. Changed the health curve, again. Now the static boost to health is smaller (10% for bosses, 7.6% for regular enemies), but the _curve_ is more aggresive (10%/level for bosses, 7.1%/level for regular enemies).
    * CX calculates enemy health (roughly) on this formula: **[Base Health] x (1 + [staticBoost] + ([healthPerLevel] x [playerLevel])**. So if a boss has 100 HP and the player is level 10, the new HP is 100 x (1 + (0.1 + (0.1x10))). Which can be simplified to 100 x 2.1. So at player level 10, an boss that would normally have 100 HP will instead of (100x2.1) or 210 HP. Compared to the previous version, the starting amount of HP added to bosses and enemies is overall lower, but the maximum amount of HP given to bosses is 310% at level 20. The maximum bonus HP to regular enemies is 250% at level 20. Bear in mind that the final calculation will be increased by things like increased Constitution, the Tough feat, and other possible HP-inflating variables.
    * For reference, the previous CX version had a 0.2 (20%) static boost for bosses and a 0.062 (6.2%) factor for the level curve. So the base boost to boss HP was twice the size, but the increase per level was slightly more than half it is now. By flipping these numbers, bosses should feel less like inflated HP bags in Act 1 but will still be able to become big HP bags as necessary for Act 3.
    * The previous CX version used 0.12 (12%) and 0.062 (6.2%) for enemies. So their base boost is lower by 0.046 (4.6%), but their rate of gaining HP to keep up with the party is faster (0.05 or 5% per level faster). Again, same idea, less HP inflation in Act 1 while keeping big HP pools in Act 3, hopefully.
11. Removed the flat +damage bonus to enemies after they pass level 13 again. I don't know where I stand on this as a mechanic.
12. Significantly delayed the point at which any enemy receives a magical +1 to their rolls.
13. Many of your enemies (especially in Act 3) have decided to use their "Cloak" equipment slot, even if you can't see it. This distributes mostly minor +1's or minor effects that the player would have available by the end of Act 1.
14. Further improved the performance of Lightning Charge-using animated armor.
15. Further distributed various abilities, spells, and effects from mods to enemies.
16. Added more clones to the Oubliette (they are inconsistent).
17. Enhanced the Death Shephard in the Necromancer's Laboratory (Act 2).
18. Ensured enemy monks actually have access to flurry of blows and unarmed attacks as an option.
19. Several fights that used to be easy to cheese with Globe of Invulnerability now feature enemies with a better ability to push you out of safety. You big nerd.
20. Created 42 "NPC" versions of existing spells just for special NPC use.
21. Made Balthazar, and his cronies, immune to necrotic + cold damage so they can safely fill the room with Chilling Darkness/Hunger of Hadar.
22. More spells to get an NPC 1-cast version: Summon Gilded Hellsboar (requires corpse). Promise of Wealth. Possession (give this to secret SCL fight?). Hellfire Orb (who to even put this on?). Tyrant's Bindings. Flesh to Gold (give to someone/enemies in the Counting House?). Paralyzing Ray. Howl of the Dead. Divine Revelry (goblins? rats?). Circle of Death. Eyebite (might have to use one of the specific contained spells). Blade Barrier. Flesh to Stone. Harm. Heal. Otto's Irresistible Dance. Planar Ally. Blight. Guardian of Faith. Lightning Bolt. Mass Healing Word.
23. Added Actually Infernal Rapier, a more powerful and thematic replacement for the Infernal Rapier.
24. Updated several mods.
25. There is now a way to get access to Rolan's unique spells. Search the first floor of Sorcerous Sundries thoroughly!
26. Removed Mobile, and Mobility-related feat effects, from many enemies.
27. Removed assassination-based ambush/initiative bonuses from the global Rogue boosts list, and instead selectively gave it to specific Act 3 enemies.
28. Delayed enemy rogue global Uncanny Dodge to Act 2. Delayed global enemy rogue Evasion to Act 3.
29. Removed most global instances of extra attacks and magical extra damage.
30. Removed Deadly Alacrity and Savage Attacker from a lot of people/global boosts.
31. Removed some not-strictly-spell methods of healing from the global cleric buffs, now that so many enemies have access to something like Mass Healing Word or healing potions.
32. Significantly revamped Priestess Gut and the Spider Matriarch. Weakened Carrion's ability to regenerate health now that his cronies are a more respectable threat.
33. Restored Rebalance - Feats, which is loaded before the other feat rebalancing mod, so that its improvements to Elemental Adept and some other feats not touched by other rebalances can be enjoyed.
34. Added Dark Urge Dice.

**There is now a Listo "easy mode" CX config and a Listo "hard mode" CX config**. The any config can be mixed with "Listo Hard Mode" (the option in Mod Organizer 2), or any other mods in Listo. The default file + Absolute Wrath is what I use and consider "balanced+" skewing towards challenge. Easy Mode is for people who want to stress less about preparing for fights, juggling inventory and damage resistance elixirs, and dealing with status conditions. Hard Mode is for people who pretty much like Listo but wish enemies took every optimized choice for feats and spells plus have more health and really challenge them.

**Easy Mode**

1. Boss static HP boost is 8% + 8%/level.
2. Enemy static HP boost is 5% + 5%/level.
3. Bosses and enemies have no flat, static, automatic boosts. The level at which they receive their boosts is delayed by 1 mostly.
4. Most bonuses to crit chance are removed from enemies.
5. Durable removed from enemies.
6. Feral Instinct removed from enemies.
7. Darkness spells removed from some enemies.
8. Savage Attacker removed from enemies.
9. Enemy spell selection is smaller.
10. Enemy access to summoning spells reduced.
11. Boss level scaling is player level + 0 in Act 1, player level + 1 in Act 2, and player level + 2 in Act 3.
11. Removed the 3m pushback on hit effect from all enemies.
12. Removed Ghoul Touch from enemies.
13. Removed Controlled Chaos from all enemies.
14. Many specific nerfs to various creatures/bosses.
15. Removed 25 instances of enemies receiving benefits/boosts/boons from being in darkness.
16. Removed Shadar-Kai Gloomweaver invisibility from all enemies.
17. Removed assassinate and assassination related boons from enemies across Act 3.
18. Removed a lot of instances of status immunities from various enemies.
19. Brought the entire Murder Tribunal Test back to normal.
20. Removed Act 2B portal ambush Githyanki from CX.
21. Removed several clones.
22. Static Health Overrides mostly removed.

**Hard Mode**
1. Rogues, Rangers, Paladins all receive access to Improved Critical by Act 3.
2. Almost everyone applicable rocks Deadly Alacrity and/or Spell Sniper.
3. Enemy Bosses are Player Level + 1 (max 11) in Act 1. Player Level + 3 (max 17) in Act 2. Player Level + 5 (max 25) in Act 3.
4. Boss static HP boost is 20% + 15%/level.
5. Enemy static HP boost is 10% + 10%/level.
6. Bosses have a static damage boost of +2. Enemies have a static damage boost of +1. That sounds insignificant, but that boost will apply to every instance of damage. For example, 3 magic missiles from a boss would get a total +6 damage added. 3 magic missiles + Lightning Charges would get +12. It quickly increases.
7. Bosses have an extra bonus action across the board (and thus 3 bonus actions in some cases).
8. Boss and Enemy stats, saving throws, and save DCs have a flat bonus plus improve slightly faster.
9. Enemy Rogues and Paladins receive Action Shout.
10. Lots of people get Fighting Style Protection.
11. Static Health Overrides mostly increased.

## Listonomicon v3.2

Save Safe? Yes-ish. Before updating, load your save and in the SE Console use the command !UniqueGearTitanStringUninstall, then make a new save, then update. OR update, and then manually re-add [Unique Gear - Titanstring - B](https://www.nexusmods.com/baldursgate3/mods/1261).

This update is going to experiment with NOT including the ModsCache with the Wabba download. Anyone updating a current game should delete theirs in [Listo install location]/Profiles/Listonomicon, anyone starting a brand new game hopefully this is more reliable with having the correct mods loaded and enabled in-game on your first launch.

1. Added 151 items to the "does not require attunement" list. This includes vanilla items that are generic +1 or +2, niche, gimmick, not very powerful, sussur weapons, and adamantium weapons.
2. Changed Exhaustion to trigger after 21 turns of combat rather than 15 (the primary source of Exhaustion is being downed, being killed, or running away from combat).
3. Doubled the number of enemies (via CX cloning) defending the Blood of Lathander + improved the original 3 guards.
4. Added several ettercap attendants and their pet oozes to the Spider Matriarch's boss room.
5. Added ettercaps to infest part of Grymforge.
6. Added more magma elementals. There are now 5 to fight throughout the lava section of Grymforge.
7. Added Heads for Body Type 1 by CobraChai.
8. REPLACED Unique Gear: Titanstring with Ajax's titanstring bows (part of DeGreaser because apparently if I try to make a new mod I completely forget what I'm doing and it doesn't work).
9. Removed not working scars. You may need to hit the magic mirror and go to "No Scars" before updating.
10. The defenders of The Burning Earth are now prepared to fight a lot harder for it. The "back half" of Grymforge (e.g. everything around or involving the Adamantium Forge) should be saved for the last thing done in Act 1 before moving on to the Creche.
11. A handful of enemies have been given access to fireworks. ;) Why? Funny
12. Malus Thorm and his assistants are more respectable combatants.
13. Added, on top of 3 new magic bows, a magic halberd and a magic dagger sold by the Society of Brilliance rep near the Creche.
14. Other CX tweaks. Other CX cloning.
15. Added Pact and Power, a mod for Warlock gear.
16. Integrated PP in the attunement item list and integrated some of its passives and features into CX. The total attunement file is now 345 items, across 31 different mods.
17. Improved the danger of Carrion's servants. Both the mummys in the house around him, as well as the ones guarding the Ancient Lair, are more dangerous.
18. Using CX cloning, added an additional undead fight to the Ancient Lair.
19. Further easy-ify'd the Listo Easy config.
20. Gave the Phase Spider Matriarch vulnerability to fire (in a way), but she also gained infestation.

## Listonomicon v3.1.1

Save Safe? Yes.

1. Disabled Zerd RAW's changes to invisibility.
2. Re-added (See) Invisibility.
3. Reordered mods so that Sensible Ambushing is below Zerd.
   * Ideally this restores the state of stealth/invisibility/ambushes/QOL/mechanics from before v3.1.0 broke this stuff. Sorry, experiment was a fail :)
4. Small tweaks to fix some cheese/exploit of several enemies by giving them the ability to jump.
5. Removed Holy Rebuke from 3 enemies. I had this passive mixed up with *Radiant Retort* which is very, very different.
6. Removed Lifedrinker from several enemies because it doesn't do anything. Giving people abilities that affect pact weapons requires them to have pact weapons, and that needs its own mod not CX tweaks.
7. Added Sarevok's 3 ghost guards to CX.
8. Orin finally has her own CX entry. She should now be a proper end-of-the-start-of-the-end-game fight, especially if you fight her as not Durge (and therefor have to fight her entire room of goons with her).
9. Many enemies given the two weapon fighting style are now also given part of the Dual Wielder feat.
10. Fixed the load order (hopefully) on Soul Coin Tweaks, so that everyone - not just Karlach - can pop them for a DPS bonus if needed.
11. Added Jack of all Trades Affects Initiative.
12. Updated Ajax's Degreaser to include an Act 1 item for sale that grants immunity to being disarmed. Also adds another cool cloak to Act 3. Nerfs Mantle of Ajax, Necrotic Conduit, and Radiant Conduit.
13. Lathander's Blood's defenders are more competent than ever (they will not be cheesed by being blasted off their platform, have Lathander-type abilities and effects, and bring fighter/cleric/paladin boons).
14. Listo "Easy" CX config updated to reflect big changes to main CX.

**PF2e Spells Is Back! (Kinda)**
I've tried my hand at patching PF2e spells to include the great ones, fix the good ones, remove the bad ones, balance everything the way 5e is designed, and fix typos/errors. All references to "2e" have been removed from spell names. Spells that scaled by adding +2 dice per spell level instead of +1 have been reduced to +1/slot. This also means PF2e spells are back for many of your enemies!

The following spells are re-added to Listo:

* Admonishing Ray 2e
* Aerial Form 2e
* Angel Form 2e
* Ant Haul 2e
* Blazing Fissure
* Blood Feast 2e - base damage is reduced to 6d6
* Chilling Darkness
* Cloak of Light 2e
* Conductive Weapon 2e
* Cosmic Form 2e
* Crushing Despair 2e
* Devil Form 2e
* Dinosaur Form 2e
* Discern Lies 2e
* Eclipse Burst 2e - base damage is reduced to 8d8
* Elemental Confluence 2e - broken tooltip
* Elemental Form 2e
* Envenom Companion 2e
* Fey Form 2e
* Firework Blast 2e
* Focusing Hum 2e
* Ghostly Weapon 2e
* Girzanje's March 2e
* Hydraulic Push 2e
* Hydraulic Torrent 2e
* Mercurial Stride 2e - base damage reduced to 3d6
* Monstrosity Form 2e
* Moonburst 2e - base damage reduced to 8d8. The name appears as "Not Found" because I broke it :(
* Moonlight Ray
* Percussive Impact 2e
* Phase Bolt 2e - base damage no longer adds the user's spell casting modifier. The penalty to target armor class is only -1. The tooltip for this is not super accurate :( sorry I don't know how to fix it.
* Polar Ray 2e - enemies receive a CON save vs spellcaster DC to try to avoid being Drained. Tooltip is very broken.
* Radiant Beam 2e - not actually useable by the player, but it's an action unlocked by Angel Form.
* Scouring Pulse 2e
* Searing Light 2e
* Snowball 2e
* Sound Burst 2e
* Summon Archmage 2e
* Summon Fey
* Telekinetic Maneuver 2e
* Wall of Shrubs 2e
* Warp Step 2e
* Warrior's Regret 2e
* Aberrant Form 2e
* Agonizing Despair
* Divine Lance 2e - damage reduced, no longer adds spellcaster modifier to damage.
* Final Sacrifice 2e - damage reduced significantly.
* Fists of Fire
* Forceful Hand 2e
* Hyponetic Terror 2e
* Mimic Undead 2e - now lasts until long rest.
* Motivational Speech
* Repelling Pulse 2e - base damage reduced to 6d8.
* Summon Irii - typo fixes, hopefully.

The following PF2e spells are removed in Listo:

* Anticipate Peril
* Biting Words 2e
* Blanket of Stars 2e
* Blazing Armory 2e
* Blink Charge 2e
* Blistering Invective 2e
* Breath of Life 2e
* Briny Bolt 2e
* Clawsong 2e
* Agitate 2e
* Color Spray 2e
* Draw Ire 2e
* Endure 2e
* Mage Armor 2e
* Magic Missile 2e
* Sleep 2e
* Concordant Choir 2e
* Remove Fear 2e
* Remove Paralysis 2e
* Resist Energy 2e
* Restore Senses 2e
* Loose Time's Arrow 2e
* Impart Empathy 2e
* Feast of Ashes 2e
* Death Knell 2e
* Blood Vendetta 2e
* Chill Touch 2e
* Daze 2e
* Guidance 2e
* Haunting Hymn 2e
* Vampiric Touch 2e
* Organsight 2e
* Moth's Supper 2e
* Invisibility Sphere 2e
* Heroism 2e
* Haste 2e
* Bracing Tendril 2e
* Bind Undead 2e
* Time Jump 2e
* Winning Streak 2e
* Bloodspray Curse 2e
* Blink 2e
* Flame Dancer
* Death Ward 2e
* Belittling Boast 2e
* Spellwrack 2e
* Repulsion 2e
* Phantom Orchestra 2e
* Cast Into Time 2e
* True Target 2e
* Shock to the System 2e
* Regenerate 2e
* Prismatic Armor 2e
* Energy Aegis 2e
* Maze 2e
* Disrupt Undead
* Summon Deific Herald 2e
* Moment of Renewal 2e
* Righteous Might 2e
* Necrotize 2e
* Vital Beacon 2e
* Consecrated Flesh
* Positive Attunement 2e
* Create Food 2e
* Impeccable Flow 2e
* Boneshaker 2e
* Harm 2e
* Heal 2e
* Airburst 2e
* Acid Splash 2e
* Electric Arc 2e
* Elemental Counter 2e
* Firebolt HB
* Gale Blast 2e
* Glass Shield 2e
* Magic Stone
* Ray of Frost HB
* Puff of Poison 2e
* Mud Pit 2e
* Shocking Grasp 2e
* Burning Hands 2e
* Fleet Step 2e
* Jump 2e
* Extract Poison 2e
* Brine Dragon Bile 2e
* Scorching Ray 2e
* Acid Arrow 2e
* Flame Wips 2e
* Barksin 2e
* Blazing Dive 2e
* Lightning Bolt 2e
* Stoneskin 2e
* Zephyr Slip 2e
* Weapon Storm 2e
* Fire Shield 2e
* Draw the Lightning 2e
* Chain Lightning 2e
* Corrosive Body 2e
* Befuddle 2e
* Horizon Thunder Sphere 2e
* Fireball 2e
* Cone of Cold 2e
* Fireproof 2e
* Ooze Form 2e
* Shadow Projectile 2e
* Waterproof 2e

## Listonomicon v3.1.0

Save Safe? Yes-ish for most people. You may want/need to respec some characters based on changes and updates. Please read patch notes, anyone continuing a game from v3.0.1 will need to enable OPTIONAL_Many More Monsters.

**Combat Extender**

1. Reduced or removed static boosts to enemy stats, rolls, and abilities.
2. Reduced static and scaling health boosts to enemies slightly (like 0.005).
3. Redid all Branded enemies (Nere, Z'Rell, Priestess Gut, Dror, etc based on giving them a shared Absolute feat).
4. Nerfed Oubliette Beholder (no multiattack defense, no alert feat).
5. Grym is more focused on applying burning and fire damage, and punishing you for burning and taking fire damage. Features that didn't work/changes that didn't work were removed to reduce clutter when previewing his stats page.
6. Dhourn (needs testing) and Filro now provide a preview of what their magic staff does :)
7. Aylin and Isobel hand out radiating orbs like candy.
8. Lots of other little tweaks to balance enemies around a different set of passives similar to what players get access to via magic items.
9. Moved Defensive Fighting Style for enemy Fighters and Paladins to Act 3.
10. Added an entry for The Warden.

The following was enabled by the hard work of Cahoot and his willingness to share with Listo:

11. Added Cazador entry in CX, he's now a powerful caster on the same tier as Lorroakan, Carrion, etc.
12. Viconia, and Viconia's cronies, now have CX entries.
13. All of the Act 3 dopplegangers, assassins, murder tribunal people, etc are rangers or rogues (with a handful of casters and barbarians).
14. In total, 30 Act 3 enemies have been improved thanks to Cahoot.
15. 4 Act 2 enemies have CX entries now. Several Act 1 and Act 2 entries are improved.
16. Inspired by Cahoot, I've also added passives, spells, and abilities to hopefully revamp the Silent Library fight in the Temple of Shar. Furthermore, Viconia's chief guards are now worthy paladins who will punish any players unprepared to counterattack their darkness!
17. Incorporated Mystic "spells" (psionic attacks) to CX. In the future I will have to figure out how to give selected AI the necessary Psi Point resources to actually use anything above cantrips.

Easy Config Specific:
1. Removed multiattack defense.
2. Added the 34 new entries and some of the changes while lowering the size of the boost to enemies.

**Other Changes**

1. Added Ajax's Degreaser. Let me know if these weapons and armor improve, harm, or do nothing to your experience.
2. Added Superior Spell Thief.
3. Added Halsin and Minthara Tents Seperated. If you are already in act 2/3 and updating Listo, disable this mod.
4. Added Dark Urges T2/T4 Heads. This mod replaces Dissidia Heads (replaced). If your Tav/Durge is a male tiefling, human, elf, or half-elf using one of Dissidia's Heads, this update is not save safe (unless you re-add it manually).
5. Added Frostborn, Lightbringer, Shadowbound, Sprinter-Momentum, True Soul - Branded, and Infernal Heart feats. These feats replicate a combination of minor magic items.
6. Added Zerd's Rules as Written (ZRAW) - with very specifically chosen enabled/disabled features to fit the rest of Listo.
   * Attunement Enabled, and **players are now limited to 5 attuned magic items**. Not all magic items require attunement. This is going to disrupt a lot of magic item stacks and meta, but it will also hopefully bring down the overall power ceiling in Listo in a sensible way. Most of Zerd's vanilla attunement changes are kept, minus 16 items. Across all of Listo's mods, 323 items will now require attunement. "Ajax how will I make my builds now?" There are so many possible combinations of _just the items requiring attunement_ (not counting every magic item unaffected by this change) that calculating the total caused the first 4 online calculators I tried to error out. There are 2.840029438 E+10 possible combinations of just the items manually added to the attune list.
   * Barbarian wild magic fixes enabled.
   * Free Weapon Equip enabled (you can equip a new weapon once per turn without spending your action)
   * Instant Death enabled. If you are absolutely nuked by an attack that does more damage that your maximum HP, you just die. For example if you have 50 HP and a single attack does 51 damage, you are killed instantly. Let me know if this ever actually happens.
   * Invisibility changes enabled. The "Sense Hidden Presence" action added by ZRAW is a way to ensure everyone has a means to try to detect invisible enemies. The searching for invisible enemies bonus action added by Skill Actions is a reward for characters with the perception proficiency, because they can choose to use a bonus action instead and can make 2 attempts in one turn to search.
   * Changes to Spells enabled.
   * Changes to spells to match tabletop's bonus action rules enabled (you cannot combine a spell that takes a bonus action with a leveled spell cast, unless you have Quickened Metamagic or another mechanic that overcomes the book rules).
   * Spells On Apply and On Turn enabled. Essentially this changes spells like Spirit Guardians to trigger when an enemy starts in them or enters them. Not when a player uses haste and dash to run in and out of range over and over again to trigger spirit guardians damage 50 times in 1 turn.
   * You can cast spells/maintain concentration and mix it with wildshape!
   * Every ZRAW feature not mentioned is disabled.
8. Added True Darkness, which changes how the Darkness spell and Arrows of Darkness work. This also makes shadow sorcerers and warlocks much more powerful by enabling the recreation of tabletop darkness cheese.
9. Added Syrc's Rebalance for Class Spells, which makes some vanilla class features better unless already improved by another mod.
10. Incorporated a massive number of Goon's DIQ fixes. Kind of a weird full circle from April, DIQ's original "dye treasure table fixes" was how we met and became aware of each-other's lists, and then we left and did our own things, then Goon started asking ME for help/ideas, and here I am stealing from him again.
    * Fixes to the Tomes mod
    * Fixes to JWL Discordant Instruments, removing a lot of damage riders, abuse, and unintended power creep
    * Consolidation of a lot of misc trade items to Withers (dyes, clothes, etc)
    * The "Adjustable Shove-Pull Target" mod effect has inspired similar improvements to repelling blast and any/all other effects with knockback, granting players more granular precision with how and where they push or pull targets.
    * Fixes to various tooltips.
    * Fixes to various spells, equipment, and items across a dozen mods.
    * Cannot overstate how thorough Goon has been in fixinig/improving/normalizing across DIQ, and how generous he is letting me copy his homework for Listo.
11. Replaced old Corellon's Fist QoL quarterstaff fix mod with Chiz's new Corellon's Fist QoL quarterstaff fix mod. Thanks Chiz.
12. Many More Monsters (MMM) is back to being an optional mod, and is included in Listo in its full glory. Turns out my patch is what causes Grym to be unable to spawn, and I have zero idea how to fix it. If you are continuing a game from v3.0.1 enable OPTIONAL_Many More Monsters.

## Listonomicon v3.0.1

Hotfix for compilation/hash issues. INSTALL ALL REQUIRED .NET/C++!

## Listonomicon v3.0

Save Safe? No.

**Combat Extender**
1. LEVEL SCALING IS BACK* BABY! Kinda.
  * Normal enemies should not change in level and will not be affected by this change.
  * Bosses will match the player's level, up to level 10, in Act 1.
  * Bosses will match the player's level + 2, up to level 16, in Act 2.
  * Bosses will match the player's level + 4, up to 24, in Act 3.
  * This "scaling" does not do very much in and of itself. However it changes the number CX calculates to determine how many extra stats, extra AC, extra everything, to give. e.g. if CX is configured to give +1 AC for every 5 levels, a level 5 boss will get +1 AC. However a boss scaled up to level 10 would have +2. A boss scaled up to 15 would have +3, etc.
  * This "scaling" should only apply to vanilla encounters CX has marked as bosses, and will not apply to bosses from encounters added by mods.
3. Rebalanced rangers, removed blanket Colossus Slayer.
4. Heightened the tension of the Last Light fight, regardless of which side you pick.
5. Significantly increased the challenge of the final Act 2 fight, compensated with the ability of the Nightsong to protect her allies. The Nightsong is also more powerful in general to help keep up with where parties are expected to be in Listo, however keep in mind that if you side against her in Act 3 you are in for a tougher fight than before!
6. Made allies in general better with more HP.
7. Reduced how ridiculous some barbarians were made.
8. Added Dirty Fighting or Drunken Master to several enemies.
9. The addition of Feat Rebalance Pack overriding Rebalance - Feats means that in many cases where CX added feats to various enemies (especially Tough and Durable), that enemy is now more or less dangerous depending on whether the feat replacement is more or less powerful. Most importantly, every enemy with Tough no longer gets a damage reduction with it. Now that Durable includes a damage reduction, it has been taken off of several enemies and given to others.
10. Heavily edited Balthazar and his cronies to remove powers that did not work and refactor Balthazar's skillset to make more sense in 5e.
11. Gave "Skill Actions" to NPCs (mostly via class templates in Act 3, with limited Act 2 additions).
12. Significantly increased the number of variables in Nere's fight. He has more outgoing effects (namely poison and psychic damage), heals himself in various ways, and generally will be harder than ever to put down.
13. Improved the Shadow Druids slightly.
14. Improved certain underdark duergar assassins.
15. Baneites in Act 3 are more worthy of their jobs.
16. All ogres and Grym's imps are better.
17. Redcaps are more dangerous.
18. Removed Controlled Chaos from the goblin priestess.
19. Lorroakan, Balthazar, and Carrion received several passives similar to those that a wizard or sorcerer would get from competitive magic item choices.
20. Refactored who has what passives from the Mage Slayer feat, now that it works much differently.
21. Lorroakan's animated armor has received some upgrades, based on designs copied from animated armor found near the Underdark mage tower (both encounters now feature lightning charge based mechanics added to Animated Armor). Lorroakan's dwarf servant has been handed a backpack full of potions, some scrolls of counter spell, and find familiar. So he's still mostly harmless as a combatant, but he will try to protect Lorroakan while you are distracted from the bigger enemies.
22. Hundreds of other tweaks across Act 1, 2, and 3, pulling levers and pressing buttons to make annoying enemies less annoying and underwhelming encounters more formidable.
23. Removed Controlled Chaos from Kuo Toa, and many other enemies.
24. Removed HP changes to Grym.
24. Added a Listo "Easy Mode." To activate this, navigate to [Listo Install Location]\mods\zzz_ListonomiconModSettings\SE_CONFIG. Rename CombatExtender.json to something else (like CombatExtender.json.backup) and rename Easy CombatExtender.json to CombatExtender.json.
    * Allies health static boost is increased from 20% to 25%
    * Boss health static boost is reduced from 15.5% to 12%. Health Per Level boost is reduced from 6.25% to 4%.
    * Normal enemy health static boost is reduced from 12.5% to 10%. The Health Per Level boost is reduced from 6.25% to 4%.
    * These reductions are not massive unto themselves, but it means enemies will scale significantly less as the player levels so Act 3 bosses will not gain hundreds of extra HP.
    * Static boosts to all boss and enemy stats are removed. The level increment for all boosts is increased by 1, causing bosses/enemies to scale less and scale slower.
    * Several class based global boosts removed from enemies.
    * All instances of Tough or Durable on enemies removed.
    * Enemy Cleric spell lists are weaker.
    * Enemy Monks are less powerful.
    * Enemy Paladins won't learn new smites until Act 2, and lose Sentinal (reduce enemy movement speed to 0 on Attack of Opportunity).
    * Enemy Rangers and Rogues lose crit bonuses, extra damage, or multiattack defense.
    * Several spells moved from the general caster lists, to the boss-only caster lists.
    * Boss level scaling is Player Level in Act 1, Player Level +1 in Act 2, Player Level +2 in Act 3.
    * Nere much less powerful.
    * Removed all Controlled Chaos.
    * Removed any buffs to the bulette.
    * Removed any +action point or +bonus action point for any enemies except the Elder Brain.
    * Removed Gloom Weaver invisibility from enemies.
    * Removed level 7+ spells on Lorroakan. Removed several of his buffs. Lowered his HP.
    * Removed extra HP from final fight enemies.
    * Dror Raglin very nerfed.
    * Balthazar very nerfed.
    * Carrion very nerfed.
    * Korilla (Raphael fight) has all of her abilities and spells. However, she has been reduced to vanilla health.
    * Ghoul Medics now don't do anything medical.
    * Sarevok greatly nerfed.
    * Last Light surprise fight bad guys nerfed.
    * Removed all clones.

**Other Changes**
1. Updated so, so, so many mods.
2. Added Gear Revised Rings.
3. Added Best Boy Can Dig (scratch is like a shovel).
4. Added Better Poison Equipment.
5. Added Dirty Fighting Feat.
6. Added Hug Your Companions.
7. Added Song and Steel Bard Equipment.
8. Added Necromancy Heals Undead (Cause Wounds, Harm, Negative Energy Flood can now be used by Necromancers to heal their summons).
9. Removed Caustic Feat (Better Poison Equipment includes a replacement).
10. Removed Poisoner's Robe Increases All Poison Damage (BPE does similar).
11. Added Homebrew - Over 100 Wild Magic Effects (this is on top of More Wild Magic Effects and d100 Wild Magic Table, bringing Listo over 220+).
12. Added d100 Wild Magic Table for Barbarians (finally Wild Magic Barbs can hang out with the rest of us).
  * Thanks Goon for providing a patch to keep all the wild magics working together across sorc and barb.
12. Added Elixirs Rebalanced, which changes the Giant's Strength potions into +X items instead of Set X items (you cannot dump STR and abuse potions).
13. Added Reaction Points on Hotbar (so you can see if you have a Reaction or not, or use the very small number of abilities that cost it).
14. Removed Feats Revised - GWM and Sharpshooter.
15. Added Feat Rebalance Pack (which has its own rebalance to great weapon master/sharpshooter). Please read feat tool tips, this shake-up is expected to alter a lot of builds that were viable in older versions of Listo, and open new ones. Barbarians, Fighters, and other front line damage-soaking tanks can build towards stacking Durable, Heavy Armor Master, and certain magic items to become quite difficult to kill!
16. Added Shane's Unique Heads.
17. Re-organized MO2 with a more realistic definition of what is an "Optional" mod, with 3 controversal UI changes now in an optional mods section.
18. Skill actions are reorganized under a single container, significantly reducing hotbar bloat. With this, several skill actions have been changed to 1/combat, 1/short rest, or 1/long rest to balance their relative power (thanks Goonsack!)
19. Removed unintended global changes to NPCs from Many More Monsters (thanks Chizfreak!)
20. **Added (as optional mods) Deadlie Honour Mode: New Bosses and Enemies (and Even More Bosses) for testing**. A lot of the bosses appear to be tucked away or placed in brand new dungeons which - should - make DMH easy to include in Listo permanently, but it needs testing/feedback. **The portals to these dungeons/bosses are not for the feint of heart**, for example the one on the beach has several level 8 paladins waiting to blast your ass off. If you want to help test DHM's new encounters, I would recommend you wait until clearing as much of Act 1 as you can before jumping into these encounters and come ready to rumble. **I must emphasize as much as I can that DMH encounters do not care what level you are or where in the game you find them - they are level 8+ enemies and Dark Souls-esque boss fights waiting to f you up.**
21. Updated the MO2-BG3 plugin to Zino's latest version. It is MUCH faster at compiling a new modsCache if you need to wipe yours for whatever reason, reducing the time to sub 2 minutes on my PC instead of 5+ minutes. Behind the scenes Zino continues to improve the user experience and help me bug hunt (and doesn't even get mad when the bugs are because me and Goon did our mods wrong).
22. Added Sensible Ambushing (beta). This mod significantly revamps stealth gameplay/mechanics and rebalances aspects of the game related to when and how stealth is activated or removed, when hide checks are used, and what causes (or doesn't cause) turn based mode/joining combat to trigger.
23. Added Half-Scro, a subrace to Half-Orc who begins with firearm proficiency.
24. Added Firearms and ATF. This fundamentally alters how firearms work (including muskets from the Artificer mod) by requiring reloading to balance their better stats. However, Artificer infusions can overcome this limitation :)
25. Removed cosmetic mods related to adding heads for half-orcs, as the half-scro mod breaks compatability. Half-Orc cosmetics will return if/when compat patches are available.
26. Added Radiant Retort Reimagined.
27. Added Ketheric Drops His Armor.
28. Removed Rebalance - Feats.
29. Removed Mystic - Expansion.
30. Removed Better Dual Wielding (and 3 associated patches).
31. Replaced with Dual Wielding Master. Now you can choose to do a normal dual wield attack (using your action + bonus action), or toggle swinging both weapons without using your bonus action at the cost of -3 to both attack rolls. So dual wield is now similar-ish to Great Weapon Master.
32. Sadly had to remove half orc cosmetics as Half-Scro/Orc Tribes breaks them. Hopefully we get patches eventually.

## Listonomicon v2.8

Save Safe? No.

**Combat Extender**

1. Made Z'Rell tougher and made Z'Rell's outgoing damage more serious.
2. Replaced the Z'Rell clone in the Myrkul fight with a clone of Radija.
3. Made the EO Oubliette beholder fight tougher.
4. Made the Oubliette hook horrors tougher.
5. Made the Act 2 Stone Mason shadow/wraith fight a little tougher.
6. The portal githyanki (end of act 2/transition to act 3) are now more dangerous and difficult to run past.
7. Several instances in Act 1 where enemies were given Alert has been replaced with the slightly less powerful Feral Instinct.
8. Made Lorroakan better.
9. Nerfed Dror Raglin slightly by removing Tough. In general, reduced the number of creatures with access to Tough pre-Underdark/Creche. Dror Raglin's power, now, is in his giant's rage ability. In addition to increasing strength and damage, he activates several buffs upon raging - magic mirror, temp HP, damage reduction, etc. The Calm Emotions spell is a way to shut him down and instantly remove his rage-related buffs, and enemy barbarians in general. Other conditions that end rage early will work until enemy barbarians get later game rage buffs in later acts.
10. Split up paladin passive boosts from act 1 to happening in act 1 and 2. Some of their more powerful CX additions (like war magic, and setting your speed to 0 on an Attack of Opportunity) are delayed. Moved the defensive fighting style bonus to act 3.
11. Split up enemy monk passive boosts. They do not gain savage attacker or tavern brawler until act 2.
12. Many enemies, by category, have access to health potions.
13. Made the bulette both stronger and weaker.
14. Made the harpers who join the moonrise assault suck a little less (but that also means they're tougher if you side against them!)

**Other Changes**

1. Moved Enemy Stats to the optional list, renamed it "OPTIONAL_Listo Hard Mode," and included pre-configured MCM settings. This will make all enemies arbitrarily more difficult. This needs feedback/testing. The goal of "Hard Mode" is NOT to make Listonomicon into a difficult game. It is to give people an option to make Listonomicon more difficult. At player level 5, 10, 15, and 20, enemes will receive a +1 bonus to their stats (except constitution), rolls, and saving throws. These are cumulative across levels and synergistic between each other. e.g. at player level 15, enemies will have a total +3 to their Strength, and a +3 bonus to rolls, but strength will add to their melee rolls so the net bonus to their roll might be +4 or +5. At PL 3, 6, 9, 12, 15, and 18 enemies will receive 5% extra HP, cumulative with CX increased HP and increases to Constitution, and a +2 damage bonus, cumulative with anything else that increases their damage. At PL 6, 12, and 18, enemies will receive +1 AC, cumulative with any increases to their dexterity, and a +3 damage bonus.
2. Moved Savage Enemy Doubler from optional to a core mod, with a small % chance of any enemy being duplicated.
3. Added Muscular Passive (feat).
4. Added Fey Wanderer, a Ranger subclass.
5. Added Dispel Magic, a new spell.
6. Added Monkey's Paw Sweater, an Ethel reward that you may regret using!
7. Added FROG and Followers of Zerthimon. Removed Fantastical Multiverse's version of Githzerai. This new set up consolidates Githyanki/Githzerai into one race with yanki/zerai as sub-races.
8. Added Less Crowd Characters (50%), which reduces the # of meaningless NPCs in Act 3. This also reduces the number of NPCs that Combat Extender checks/tests which should reduce Act 3 performance issues hopefully.
9. Added Half-Light Voice, which makes Durge Voice 5 (default male voice) scarier.
10. Reorganized equipment mods, again, to optimize the REL experience.
11. Slightly reduced the amount of XP needed to reach levels 6 and 9. Increased the amount of XP needed to reach levels 13-16.
12. Removed Auto Loot Seller.
13. Removed More Reaction Companions. It will return if/when it gets a patch 7 update.
14. Removed OPTIONAL PF2e spells. Hoping we will see a newer, better implementation of this idea in the future :)
15. Added Healing Bardic Inspiration. Let me know if any mod subclasses seem to not work with this.
16. Added Guardian, a fighter subclass.
17. Added Various NPCs redesigned. Mol gets a face lift in Act 3 along with a few more NPCs :)

## Listonomicon v2.7

Save Safe? No. Grab v2.6 from Nexus + OLD_LISTO MMM Patch if are currently on v2.5-v2.5.1 and want an update.

1. ADDED Fresh Loot for testing/feedback. This adds a few new items, rebalances a few items, adds a purpose to a few items.
2. REMOVED A Gith Can Change Their Spots.
3. REMOVED P4 NPC Heads for Tav.
4. REMOVED P4 NPC Hairs for Tav.
5. REMOVED Subtle Nature Eyes.
6. REMOVED Extra Eye Colors.
   * The purpose of these removals is periodic clean up/culling of excessive bloat. These cosmetic mods either have issues, are broken/taken down from Nexus, or overlap with other mods in Listo without being compelling enough on their own.
8. REORGANIZED dragonborn cosmetic mods, again. No more "your mod is out of date" error.
9. REORGANIZED equipment mods to make REL a better experience, for players who prefer randomized loot.

## Listonomicon v2.6

Save Safe? No - but you can use OLD_Listo MMM Patch to keep a current save going. Everyone else should use NEW_Listo MMM Patch.

**Combat Extender**

1. More entries/additions to CX config for EO, MMM, and MTM encounters. MTM slowly getting closer to not disrupting early Act 1 flow. Listo is designed for EO, MMM, and VUE to work together very well; MTM is an OPTIONAL MOD, that can and will create awkward situations where it overlaps other mods. But if you love combat, it's an option.
2. Reduced enemy HP across the board. Bosses reduced slightly, mooks most effected.
3. Auntie Ethel is now a more daunting foe.
4. Auntie Ethel has invested in the safety and wellbeing of Mayrina. And her suffering.
5. Elfsong Tavern has a bigger rat problem than ever.
6. Experiments with giving enemies Goon damage bonuses. These are (generally) an extra d4 damage to their attacks, spells, and/or spell attacks, especially to help Act 3 enemies compete with players. Please provide feedback if the way this is implemented has unexpected consequences other than you taking more damage. For example, do enemies having more access to multi-damage-phase attacks disrupt certain playstyles/metas?
7. Replaced instances where enemies received "Repelling Blast" with "Grasp of Hadar" instead.
8. Improved the performance of the gnolls, ogre, and Absolute cultist near the Paladins of Tyr. They have much better ability to close the distance or make ranged attacks.
9. A general CX pass has hit the exterior of the Goblin Camp, making its defenders better.
10. Made rangers, as a general CX enemy category, less annoying.
11. Reduced the number of enemies with access to Rip and Shred and Sticky Paws.
12. Altered the progression of enemy rangers/rogues. Rangers get their rogue-like abilities later; rogues get their ranger-like abilities later.
13. More intentional Absolute Wrath powers have been distributed, continuing to make AW-enabled a tougher experience overall. In fact, Absolute Wrath is getting closer to being Listo's "Challenge Mode."
14. I have been forced to abandon CX-based edits to any of Valkrana's encounters. The skeletons are implemented via Script Extender, meaning their data changes on every save game, which means CX is incapable of defining them and applying changes to them.
15. Apparently Myrkul's boss fight and Ketheric himself share the same name/UUID (according to the game, they're the same thing/person). So I was applying changes to completely not the right things at all. This has been fixed, and Ketheric + Myrkul are now correctly tougher. See cloning for other changes to the Myrkul fight.

Early experimentation has begun with using CX's "Cloning" features. This will be used very selectively to a small number of fights where I think extra mooks or one extra brute will be a more effective balance factor than obsessive override edits. Cloning is unfortunately limited to duplicating things that already exist within the same Act, so I can't bring encounters from future/past acts to new situations. Clones are also oblivious and sometimes don't join the fight with their friends.

1. Removed "harper nest" encounters from MMM-Listo. Substituted the same effect by adding surprises to EO in that area.
2. Cloned rats in Act 3.
3. There are 2 extra minotaurs in the Underdark, near the regular encounter, who have reduced stats based on the bridge guardian.
4. Added Z'Rall, Flesh Golem, Ghoul Medic, and Mindflenser to the Myrkul showdown room.
5. Added an extra mummy, mindflayer-wizard, and spectator to the final courtyard battle. You have been warned. :)

Future Plans:
* Death Shephard add to the Necromancer's lab.
* Extra guardians blocking the theft of Lathanders goods.
* crawling claws, undead, oozes added to MMM-Cazador fight.
* More undead in Shar temple.
* Unlikely polycule in Ethels basement.
* Ansurs puzzle is better protected.

**Other**

1. Fixed a big mistake in the mod load order. 5e spells needs to load BEFORE Encounters Overhaul for the EO 5e spells patch to work.
2. Added No Size Effects, which removes the glowing VFX from size changing spells and elixirs.
3. Added Valdacil's 5e Adjustments Update, which covers new spells in the 5e mod that Valdacil hasn't covered.
4. Updated Absolute Wrath. This update excludes the bulette from the list of enemies that can be assigned random powers, even AW knows the Patch 7 bulette is too big.
5. Updated Automated Summons, which now excludes The Emperor and certain other creatures/companions/NPCs that really need to stay under player control.
6. Added Extra Scars For Everyone.
7. Added Immersive Gear. Please provide feedback on balance.
8. Added Hexcraft, a Warlock-y Wizard subclass.
9. Fixed the "Transmute Spell" metamagic in Metamagic Extended, thanks to a community patch.
10. Added Barbarian of Our Hearts, which adds barbarian-centric end game gear to different vendors in Act 3 (thank Cordelliia for graciously altering this mod for Listo).
11. Added Githyanki Psionics, which changes Githyanki innate powers (jump, mage hand, etc) to not be blocked by Silence. Because psionic powers don't require verbal components!
12. Added multiplayer instructions.
13. REMOVED No Intro, which various users reported as the root of their problems with MP games failing.
14. Added Features from Planescape.
15. Added Features from Spelljammer. This adds a new short adventure to Act 3, accessible after buying a deed off Popper in the Circus of Last Days. Yes it's intentionally expensive.
16. Added Boo Dice.
17. Removed last vestiges of "Grym 2.0" and the dragon encounter from MMM-Listo.
18. Fixed the names of creatures in MMM-Listo.
19. Removed additional unwanted MMM content.
20. REL is back. I freaked out over nothing.
21. Added Lathander's Armory.
22. Added Avernus Weaponry. This mod adds new unique "Cursed" weapons.
23. Added community-supplied multiplayer instructions (thank you Kmnder!).

## Listonomicon v2.5.1

Save Safe? Yes

1. Fixed some goober mistakes/issues with Combat Extender.
2. Fixed the ModsCache/ModsList that comes with Listo.
3. Added a Akelka dragonborn cosmetic for Vexa heads.
4. Updated Listo LITE to v2.5.1.

## Listonomicon v2.5

Save Safe? No.

**Combat Extender**

1. Several supporting/buff/helper type enemies have been given potions of speed or better healing potions to throw. Minotaurs lost their durability feat.
2. Harpies at the Grove are vulnerable to piercing and lightning damage, making this an easier early game fight for prepared parties rather than something to awkwardly put off.
3. More Absolute Wrath abilities have been handed out throughout the game. So if AW is enabled, both its random effects, and now many not-random effects, will be experienced.
4. The defenders of the grove have been variously improved with ranger or fighter abilities (and one caster). Specifically these CX edits are for 4-5 of the tieflings found defending the wall if you choose the Attack The Grove route to deal with Minthara, so they are more powerful allies when fighting with you and they are more dangerous enemies when fighting against you.
5. The attackers of the grove have been variously improved in different ways to make the fight more interesting. This mostly includes giving them more mobility (as raw movement speed, new movement abilities, or ranged attacks).
6. Now that a broad CX nerf/rebalance patch has hit several early game encounters to make them easier to tackle in a vanilla (or at least not intentionally optimized) order, the overall CX health settings have been restored to higher values. So all enemies have more HP across the board, which increases with the player's level, but several act 1 fights have either been made directly easier or have had winning strategies enabled (eg bringing bludgeoning and radiant damage to fight undead, bringing lightning to fight harpies, etc).
7. The Shar cultist fight at the goblin camp shadowdark entrance has been altered. The two bigger Living Shadow enemies are now more like lesser, knock off, weaker counterparts to the defenders of Shar's temple in Act 2. They are sunlight sensitive, sunlight hyper sensitive, and vulnerable to radiant damage. However this fight remains an example of "Look before you leap" - inspect the enemies and their features, and think critically about how you can prepare the battlefield before starting the fight to set the conditions in your favor!
8. More changes to Priestess Gut, and her ogre room guard.
9. Various creatures have been made vulnerable to psychic damage in Act 1 to reflect their weakened mental defenses due to plot events, proximity to a crashed nautiloid, or other reasons.
10. Several other quality passes to (IMO) questionable EO and MMM encounters, especially EO under dark encounters.
11. Now if you enable Absolute Wrath, it will both enable randomized enemy buffs and enable several intentional enemy buffs.

**Other Changes**

1. Replaced Save Alfira with Always Save Alfira.
2. Added Bonk Improved - more reliable non-lethal damage toggle.
3. Replaced d8 Initiative with an initiative mod that can be configured with MCM. By default Listo still has this on d8 but you can change it.
4. **Many More Monsters (Listo patched edition) is now a permanent part of the list**, not an optional mod. The patch removes several encounters that I think hurt the game flow, renames/redesigns other encounters to make more sense in context if they overlap with EO/VUE, and adds a few jokes/surprises.
5. More Trash Monsters remains an OPTIONAL mod. A very small number of MTM encounters have been altered with CX. These encounters will awkwardly overlap with and disrupt the flow of the game, only enable the mod if you just love combat.
6. Please read the revamped [Listo challenge design page](https://www.modlists.net/docs/7listo/GameBalance) to familiarize yourself with how the pre-Underdark Act 1 game flow has changed from the last time you played Listo.
7. Updated several mods.
8. Other changes probably. I'm very sleepy.
9. Removed AI mods from the optional mod list and the list entirely. Doesn't improve gameplay enough to be worth the crashes.
10. Removed Randomized Equipment Loot. It is no longer directly compatible with too many Listo mods. (Also removed associated alt file downloads for the REL version of some mods).
11. Added Pale Oak Faithwarden Enhanced.
12. Added Wands and Weave - Wizard Equipment.

## Listonomicon v2.4.1

Save Safe? Yes.

**Big Changes to Combat Extender**

1. Priestess Gut has received a quality pass similar to Dror Raglin, making her less pathetic and easy to cheese with barrels while still a much smaller threat than her boss. She has new damage resistances, access to 3rd level spells, can runaway, can go invisible, has a spider friend she can summon, and an extra action + bonus action.
2. The hobgoblin leader of kobolds near the Grove has been nerfed. He has less health overall, and a weakness to several damage types. The kobolds have less HP across the board, however they all have pack tactics. They also all have daylight sensitivity. Normally these two factors will cancel each other out, but if you can split up/isolate kobolds they will be much less effective in combat.
3. The extra owlbear added to the owlbear cave is much weaker, but has some surprise fun mechanics. The momma owlbear has been made slightly weaker. Overall the fight should be much more doable for a level 3 or 4 party with 5-6 members rather than something that should be cheesed or save for late into Act 1. The extra owlbear makes up for its weak stats by using the weaker version of the Path of the Giant rage.
4. The skeletons that appear outside of Wither's crypt after the adventurers are killed and a long rest has passed are now vulnerable to radiant damage and move slower, but otherwise remain very dangerous. Similar nerfs have been made to the other Act 1 skeleton fight, making everyone radiant damage and bludgeoning vulnerable. SCL kuo toa undead are radiant vulnerable as well.
5. The ghoul encountered in Wither's ruins is vulnerable to radiant damage, and smaller than other ghouls.
6. The cambions that spawn if you take too long during the tutorial helm fight are now much better at chasing you and applying pressure to the escape, to help offset how much easier it is to kill Zhalk.
7. Swamp redcaps are more dangerous.
8. Grym has more attacks related to knocking you into lava.
9. Kuo Toa wild magic shenanigans are _much_ worse. However players are not expected to fight them. Shadowcursed kuo toa have much weaker wild magic abilities. In exchange for not getting Controlled Chaos, however, SCL KT have Rip and Shred, an attack that reduces the victim's AC.
10. The bugbear assassin inside the Grove has lost the ability to infinitely spam invisibility.
11. Mud mephits have more powers related to throwing mud at you, shooting mud at you, hitting you with mud, etc. They can also pinch you like a crab.
12. The magma mephits that attack during the Grym fight have Rip and Shred, Crippling Pinch, are allergic to magic, and have more HP. They also move much faster. Other mephits in Grymforge do not have wild magic allergy.
13. Korilla has further been made more dangerous, and will need to be eliminated quickly for your spell casting to be safe. She will interfere with your casters and has health regen.
14. The ghoul medics protecting Balthazar are better healers, and combatants.
15. Raphael's cambions are more dangerous. They are bigger, stronger, have more attacks, have many special attacks, and each one has a unique ability or twist or archetype. But their HP is unchanged. One of them uses the Path of the Giant improved giant rage.
16. Removed wild magic from Banites. I don't remember why I ever gave it to them.
17. In act 3, barbarians gain reckless leap, a goading shout, and the ability to Rip and Shred.
18. In Act 2, clerics gain another AOE healing effect.
19. In Act 3, paladins are more resilient with their saving throws and put out better healing.
20. In Act 3, rangers and rogues wielding only 1 weapon get a better duelling ability.
21. The 2 mindflayers added by EO and the 3 Intellect Devourers in the illithid crash are all nerfed, with less HP and big weaknesses.
22. Altered EO kuo toa beach fight to reflect the same kind of design/changes as what has happened to other kuo toa. But more limited due to being an earlier encounter. FINALLY FIXED HOW USELESS THESE IDIOTS ARE, they can actually teleport and kick your ass now instead of being stuck on the beach and completely unable to fight back.

**Other Changes**

1. Added Skill Actions. This mod gives new in-combat abilities that correspond with various skills, making some previously "why would I ever have a companion take this?" options make a lot more sense. Most importantly the Perception skill can be used to detect hidden and invisible enemies, or at least try to detect them, which is important now that some fights include enemies with no invisibility powers! Please provide feedback on whether this seems like it is adding more depth/options/fun to Listo, or does this just add a bunch of extra buttons you don't care about?
2. Added Vow of Poverty, a Cleric subclass.
3. Added Soul Knife Equipment -- please provide feedback on the balance (how strong is it compared to the price, how early/late it is found in game, etc)
4. Added Vest of Investiture -- please provide feedback on the balance (how strong is it compared to the price, how early/late it is found in game, etc)
5. Updated various mods.
  * Neon's Assorted Faces
  * Poesilibre's Fair Eye Colors
  * Oath of Zeal
  * Rune Knight
  * Reckless Attack Toggle
  * Expansion 13-20
  * Celestial Warlock
  * Shadow Magic -- author recommends any active shadow sorcerers respec before updating!
  * Dragonborn cosmetics
  * Mystic Class
  * Many More Monsters
  * Feat Every X Levels
  * Juggernaut

## Listonomicon v2.4

Save Safe? No.

1. ADDED MODS
    * New and Changed Classes and Character Creation
      * Inquisition Domain, a Cleric subclass. Please provide feedback on how this feels balance wise, I expect it to be top tier with Life Cleric but if it goes beyond Life Cleric or Tempest Cleric let me know.
      * Valdacil's Rebalance for Mystic
      * Order Domain, a Cleric subclass.
      * Draconic Bloodline Expanded, adding more draconic sorcerer options (including new routes to min/max psychic, radiant, necrotic, and force damage builds).
      * Conjure Animals and Summon Beasts, which increases the variety of animal summons and gives the spell behavior when upcasted similar to how Listo changes summon undead.
      * Warlords of the Coast. (Playable hobgoblins)
      * Cosmetic patches specific to WotC.
      * Destructive Wrath Adjustment. This should make Tempest Clerics ability more reliable and less annoying with AOE casts. Similarly, Luma has updated Zeal cleric to enjoy the same kind of fixes, hopefully meaning something like fireball won't spam you with 500 confirmations to use your ability for every target caught in the blast.
    * New and Changed Mechanics
      * REPLACED Feat Every X Levels with Universal Feat Every X Levels MCM. This fixes the Mystic level 9 missing a feat issue. It also restores the advantage of Fighters and Rogues: They gain a unique, extra feat at level 11 each (ignore what the book says). **So every class gets 3, 6, 9, 12, 15, 18; rogues and fighters get 3, 6, 9, 11, 12, 15, and 18**.
      * Approval Rate Adjuster. You now only gain 0.5x (50%) of the approval points you used to. You now lose 2x (200%) of the approval points you used to. This slows down the rate of how quickly every companion wants to share their entire backstory and let Durge smooch them. Your companions have more personal agency and actually dislike the things you do to upset them.
      * Poor Adventurer. A lot of pure loot items are worth less gold, a lot of garbage items are worth less gold, you'll loot less gold, you'll get less gold from quests, overall you will be more poor. Keep in mind Listo adds a lot more magic items throughout the game including free ones found while adventuring, and ones looted from enemies.
      * Stop Pickpocketing Volo and Withers.
      * **Alfira Joins the Party**.
      * **Save Alfira**.
      * NOTE: Alfira isn't as fleshed out as a real companion, has no companion quest or meaningful approval system, etc. But she can level up and do everything one of Wither's companions can do.
      * Luma's excellent "Encounters Enhanced." This reimagines a few enemies in BG3 as if Conquest Paladin and Hierophant Wizard were vanilla game features, in a much more elegant (and play tested) way than slamming random features and passives onto enemies via Combat Extender. Expect Anders (Karlach's foe) to be a revamped challenge, among others :)
    * New and Changed Cosmetics
       * Reorganized and added more Akelka dragonborn cosmetics.
       * Removed CC cleaner. Please let Ajax know if you find any race, head, hair combinations that are invisible or untextured.
    * New and Changed Gear and Equipment
       * Steel Watch Armaments adds new magic items to find in Act 3.
       * Universal Armour Fixer. This is an invisible mod that helps prevent situations with some mod armors and AC sources not applying correctly on loading a save.
       * Critfisher Ring, a very expensive Act 3 ring that makes critfishing builds crazier.
3. REMOVED MODS
   * Intelligent Warlock (Optional)
   * Event Autosave
   * Remove Debris
   * More Mithral Ore
   * UI mods have been consolidated where possible where having a dedicated 21x9 and 16x9 version did not add a ton of difference.
   * CC Cleaner. In hindsight this mod probably could have gone away a long time ago (as soon as a majority of hair/race/cosmetic patch mods became purpose built instead of giant all-in-one patches). I tried to spot check random races and their hair menu, but if you notice a bunch of "NOT FOUND" entries (except the Vexa head dragonborn, that is a different issue) and hair "options" that result in being bald, please let me know the race, body type, and haircut.
   * Patches related to "half-tiefs" letting more races pick horns and tails (patches no longer necessary, half-tiefs still works for the races it did before).
   * Mage Armor Reworked. Mage Armor is returned (mostly) to its normal behavior.
   * Heart of Enver Gortash (pulled down by the author and has issues).
4. UPDATED MODS
   * New Character Creation Presets WIP
   * Tav's Hair Salon
   * Homebrew Spells
   * Favored Soul
   * Hierophant
   * Every Sumra class mod
   * Alt Hairs
   * Many More Monsters (Optional)
   * Eye of Vecna (Optional)
   * Hand of Vecna (Optional)
   * Way of the Long Death
   * Dragonborn Extra Cosmetic Tabs
   * Enweaved
   * Goon's Library
   * Mystic (now nerfed and changed to better fit Larian's cRPG-5e adaptation philosophy, now has working feats every 3 levels like the other classes)
   * Many More Monsters (there's now many more mimics) (optional)
   * Illithid Powers Overhaul
   * Valkrana's Skeletal Encounters
   * Randomized Equipment Loot (Optional). There is now a specific Lite fork designed to interact better with the Random Starting Gear (Optional) mod (which, in Listo, provides a few random low level magic items and one random medium level magic item on the mindflayer body at the start of the game). If you use REL, you should probably also use RSG to help offset the unpredictable loot progression experience + Poor Adventurer making it harder to collect gold now.
   * BG3-MO2 plugin to fix more weird situations, thanks Zino!
   * Druid Wild Companion (thanks Chizz for exploring and fixing bugs).
   * I lost track but a lot more subclasses and dragonborn cosmetics.
   * REPLACED Soul Coin Tweaks (everyone can use them) with Soul Coin Tweaks (everyone can use them, and the damage bonus is +1d8 fire). So everyone can use Soul Coins (not just Karlach), and the bonus is a little more significant. Or you can continue to just sell them.
5. OTHER CHANGES
   * **THE COMMAND TO OPEN MCM IS SEMI-COLON ";" NOT THE NUMBER 1**.
   * Re-ordered several mods in Listo to correct load order based issues. If you do not want to update Listo, move "Dynamic Sidebar" to the #2 spot under the User Interface section (right below ImpUI Patch7Ready). Thank you everyone involved in helping identifying mistakes that were made.
   * Yoesph's updated patch addresses more balance issues with Listo.
       * Unique Gear: Titanstring Bow Changes: There is no longer a free titanstring bow in the owlbear cave (but one can be found in Act 1), there is no longer a Sussur titanstring bow found for free (it's for sale in the Underdark), and the final legendary titanstring bow has been nerfed as not to completely out-class rangers.
       * The Corrosive Ring (Mouth of the Abyss) is now a unique magic item (no collecting duplicates), Aaron has learned that he needs to charge much better prices for his wares, and the acid effect accumulation is slower. It is now more of a dedicated anti-AC item to theorycraft a build around, rather than something that is cheap, plentiful, and overly easy to exploit on any monk or two-weapon fighter.
       * Many of JWL's Trinkets now respect the Honor Mode limitations on what are called "[Damage Riders](https://bg3.wiki/wiki/Damage_mechanics)." Their original code allowed things like +damage effects to inappropriately apply multiple times in situations where they shouldn't. There were also some items that were just broken. The good news is that Baldurs_Goonsack not only made a ton of fixes for his own Nexus Collection, he shared all of his fixes with us for free. The Yoesph-Goonsack team up is one of the best things possible to happen to Listo.
   * Updated Listo's wiki heavily. Do you think you could contribute? [Make a pull request on this Github page with your additions](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/blob/main/docs/7listo/6-SpellsFeatsClassesItems.md).
   * Updated mark read books to be more obvious. Books will be renamed to "[already read] BOOK NAME x" after they have been read at least once in your current campaign.
6. COMBAT EXTENDER CHANGES
   * Father Carrion and the end boss have minor health regen. Removed health regen that didn't work/wasn't applicable/didn't make sense where used on other enemies.
   * Several enemies have been updated thanks to new Goon passive library features. This is especially true of Black Hand of Bane soldiers in Act 3.
   * Commander Zhalk is now immune to being disarmed. However, he has much less HP and several key weaknesses. If you want his sword, you will have to kill him - but he's been made an appropriate challenge for a team of 3 heroes.
   * Sarevok has been reworked. A lot. He now has new features on critical hits, deals more damage, rebukes you, and resists several damage types. He has advantage on several key saving throws, can smite. If Orrin represents a rogue assassin of Bhaal, Sarevok represents a fighter with a paladin dip of Bhaal.
   * The cambions that protect Raphael, if you choose to become his enemy, are now a lot more dangerous. So is Korilla.
   * Mephits of the Grymforge are less silly. :)
   * Enemies that have been given fun new surprise mechanics should now actually have the appropriate features displayed on their character sheets, so that when you inspect them you get a better idea of what you are facing.
   * Dror Raglin has been buffed, ever so slightly.
   * The special Act 2 necromancer has been buffed, ever so slightly (actually a lot, if the ghoul medics heal him he will always receive the max amount, and he will also heal and restore slots if he kills you with a necromancy spell).
   * Carrion has been buffed slightly and has health regen, however he also now has sunlight hypersensitivity.
   * The Spider Matriarch is immune to fall damage.
   * There has been an attempt to give most wild magic casters access to Tides of Chaos.
   * Lorroakan has been made more dangerous. Not only does he have limited health regen, but he can recklessly cast AOE without risk to his allies. He can also force YOU to risk a wild magic surge rather than risk one himself. :)
   * Enemy Paladins and Barbarians (as a template) now get better Extra Attack access in Act 3. Enemy Clerics and Rogues gain basikc Extra Attack in Act 3. Some Act 1 and Act 2 healers have the Life Domain Cleric improved healing ability. All Act 3 Clerics have it. Rogues have more class features or substitute class features in Act 2 and 3 to make them sneakier, more mobile, and better in ambushes. Rangers and monks have been made more mobile in Act 3 and given better access to their relevant class features. Paladins smite more and smite harder. Fighters fight harder. Monks and Paladins resist your spells better. Clerics and Paladins both gain war magic (cast and attack) by Act 3. Barbarians move faster, crit better, and dex save better by Act 3. **Keep in mind** that enemy NPCs with pseudo-class levels pretty much only applies to humanoids and most enemies - like animals, monstrosities, abberations, outsiders, golems, etc - are not affected by these changes. The biggest difference should be felt with the Murder Tribunal cultists who should pose more of a threat than just being annoying with their Sanctuary spam.
   * I have realized that I can share the power of the abyss mouth ring (the one that reduces a target's AC when you hit them with acid damage) with your enemies. Be on the lookout for enemies that deal acid damage, some of them can now (temporarily) melt your armor!
   * YOU THOUGHT THE POWER TO SPAM AND ABUSE THE ABYSS MOUTH RING WAS YOURS ALONE, TAV? HA HA HA HA HA (a similar AC melting acid debuff is now available to a small number of enemies)
   * Slimes, oozes, jellies, and cubes made more dangerous.
   * Massive shout-out (again) to Yoesph, Baldurs, and Lumaterian for giving me ideas or literally building the tools and passives I needed. Or helping me look up passives to re-use from mods in Listo. Thanks Larian discord users for scrutinizing my file and giving me good critical feedback/sanity checks.
     
## Listonomicon v2.3.2

Save Safe? Yes* unless you are dragonborn then it might struggle, I honestly don't know.

1. UPDATED, STANDARDIZED, REORGANIZED, MOVED dragonborn cosmetics mods. Mostly fixes issues created in the last update, now there is only 1 set of horns/jaws that don't work. Simply don't select the cosmetic option that says "Not Found" :) Setting them aside in their own little section will hopefully prevent future problems from having them installed in the wrong order.
2. UPDATED Goon's Passive Library.
3. UPDATED Enweaved. If you were trying to use this in your playthrough, it may be worth doing a respec to get rid of and then get the feat back to make sure it is properly working.
4. UPDATED Yoesph's Listo Custom Patches. Thank you Yoesph!
  * This update specifically addresses the [Harmony Habiliment](https://www.nexusmods.com/baldursgate3/mods/12650) mod. The contents of the mod have been updated with prices that reflect their relative value to other magic items. The amazing magic shirt has been moved to a vendor close to the start of Act 3. The whole set is no longer sold for a measly 100 gp available on multiple vendors. The rest of the items are distributed across multiple Act 1 vendors.
5. ADDED Horizon Walker, a Ranger subclass.
6. ADDED Hats of Power, meaning more +2 stat hats are for sale in Sorcerous Sundries.
7. WIPED Modscache. So it turns out Goon's library wasn't loading in the last update at all. Which probably broke a lot of custom CX encounters. Woops. In my defense I'm learning new update workflows with the new MO2 plugin!

## Listonomicon v2.3.1

Save Safe? Yes*. Anyone playing a Shadow Sorcerer should be prepared to respec after updating due to a big update to that subclass mod.

1. UPDATED Astral Self, Zealot, Shadow Sorcerery, Goon's Passive Library, Expansion 13-20, Tomes and Manuals.
   * Because of the update to Goon's library, my silly ha ha le funi imp combat extender edits now actually work as intended. Sorry.
3. ADDED Dye Support for Shields. All (vanilla) shield models should support applying dyes.
4. ADDED Enweaved (thank you Yoesph and Goon for working all night/morning on this). This adds a new feat that allows any player to get +2 INT/WIS/CHA, to a limit of 22, but the price is dire (and hilarious). This is mostly intended to be a joke/challenge inclusion for Listo players too dumb or too brave.
5. ADDED Mage Armor Quality of Life. Mage Armor should no longer be disabled by putting armor on, it will only be temporarily suppressed. So you no longer need to fear accidentally equipping boots or gloves that are actually light armor or whatever, and wasting that spell slot.
6. ADDED Mantle of Holy Light, a magic cloak hidden in Act 2.
7. ADDED Lydia's Head Patch for Genasi, increasing the variety of heads available for our favorite demi-elementals.
8. ADDED Alternative Prone Rules. Being knocked prone no longer ends your turn! It just costs half your movement to stand up, and a Concentration check.
9. ADDED Experimental Alchemy as a Feat. This is an alternative way to get access to Experimental Alchemy, in addition to the similar Alchemist feat, being a wizard, or being an artificer. All of these sources of Exp Alch do NOT stack.
10. ADDED Vampiric Touch for Oathbreakers, Warden of Vitality for Druids and Clerics, Upcastable Elemental Weapon For Druids and Rangers, and More Spore Druid Circle Spells. This spreads a couple under loved spells to subclasses that either gained access as part of TCoE, or deserve access to more thematically appropriate spells.
11. ADDED Druid Wild Companion, giving druids access to find familiar and flock of familiars.
12. ADDED Druids Speak With Animals. Druids will now always have Speak With Animals prepared.
13. ADDED Actually GOODberry, which makes the goodberry spell less bad.
14. Updated Listo's wiki heavily. The old "Why play Listo?" philosophy page has been repurposed to talk about information pertaining to builds, such as links to mods for feats and a list of subclasses added in Listo. The wiki is going to be heavily WIP for a long time to catalog and detail everything Listo changes and what build varieties people should explore. Do you think you could contribute? [Make a pull request on this Github page with your additions](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/blob/main/docs/7listo/6-SpellsFeatsClassesItems.md).

Again big thanks to Yoesph/Goonsack continuing to make content just because I ask them to. Thanks Chizfreak and Sumdra for joining the Discord and helping explain your mods to me, many of them could (and should) have been incorporated a long time ago. Thanks Reyqune for making me your Enhanced Edition tester so I could steal notes on QoL mods you found and I didn't. :)

## Listonomicon v2.3

Save Safe? No. (technically yes if you are not using the removed cosmetic and are okay with respec'ing every character to clear outdated class progression/Expansion 13-20 issues, but please either start a new game or stay on the current update to finish an ongoing campaign)

1. REMOVED Better Mattis Gear optional mod.
2. UPDATED 6 mods.
3. REPLACED Casamir and Sedrick - Crawling Hand Pets with the "Immersive Placement" version and changed the mod from optional, to default. ghouls0rules continues to be GOATed.
4. REMOVED Minharpy hair, because woops another mod in Listo already did that.
5. ADDED and UPDATED dragonborn CC options, especially for women. Yes I am aware some of the features for the Vexa head are untextured, there's a mishmash of update status across all the dragonborn CC mods while one currently breaks the MO2 plugin, requiring me to ductape everything else together as best as I can.
6. ADDED, by popular request for a very long time now, Echo Knight.
7. ADDED Mystic Class. This Intelligence-based psionics class can, through its various subclasses, act like a sorcerer, a monk, or an INT paladin; mix with wizard and Eldritch Knight; and generally opens a whole new dimension to the game. Think about all the synergies and options are added by Artificer, times 10. Please provide your feedback on this class, its subclasses, and how it fits into Listo - this is too big for me to thoroughly test myself!
8. ADDED Monster Slayer, the Ranger subclass.
9. ADDED Swarmkeeper, the Ranger subclass.
10. ADDED Already Inspected, a mod that should leave looted containers in their visually looted state.
11. ADDED Owlbear Cub Permanent Hostility Fix, to hopefully fix one of the intended ways of recruiting the owlbear cub without forcing everyone to use the Goblin Camp method.
12. ADDED Way of Mercy, a monk subclass.
13. ADDED Invocations Expanded, which implements many of the tabletop game eldritch invocations for warlocks.
14. ADDED Psi Warrior, a fighter subclass.
15. ADDED Path of the Giant, a barbarian subclass.
16. ADDED Path of the Storm Herald, a barbarian subclass.
17. ADDED Listo custom loading screen. Thanks Reyqune for help.

## Listonomicon v2.2.5

Save Safe? Yes.

1. UPDATED Listo's install instructions for users struggling with custom lists/enabling optional mods.
2. UPDATED 13 mods.
3. ADDED Mourning Frost AOE Fixer.
4. ADDED Luma's latest and greatest, Oath of Conquest paladin subclass.
5. ADDED Namaer'as Curseborn Heads.
6. ADDED A Gith Can Change Their Spots.

## Listonomicon v2.2.4

Internal testing.

## Listonomicon v2.2.3

Save Safe: Yes* from v2.2.2.

1. UPDATED Ajax Better Hints (thanks everyone for your contributions).
2. UPDATED Way of the Astral Self, Drunken Master, College of Dance, and Illithid Powers Overhaul 2.
3. UPDATED Listo Lite to match the current state of Listonomicon Prime.
4. REPLACED Better Hotbar 2. You no longer need a seperate version for Ultrawide vs Normal monitors (and Ultra-chads no longer need to use Normal for multiplayer comaptibility). They have been combined into ONE mod that DYNMICALLY adjusts the hotbar to match your screen resolution!
5. Secret Combat Extender update hehe :)

## Listonomicon v2.2.2

Save Safe: Yes* from v2.2.1. If you chose any of the new fighting styles, respec affected characters before updating.

1. REMOVED DnD 2024 Fighting Styles, which included changes to feats and game mechanics not described on the mod page / updates have taken it in the direction of making more 2024 edition game changes than desired for Listonomicon.
2. ADDED Tomes and Manuals. This mod adds classic D&D artefacts like the Manual of Quickness of Action. The book is consumed upon reading and confers a permanent +1 to the relevant stat. Combined with the hag hair this can add up to a +2 in one stat (potentially helping you reach 22 Charisma or Intelligence for example), and/or can mix with the Act 2 alchemist special potion and/or the Creche strength belt to help characters secure a superhuman stat.
3. UPDATED mods
   - Goon's Passive Library
   - Valkrana's Skeleton Crew
   - Drunken Master
   - No Free NPC Heals
   - Yoesph's Listo Patch
4. ADDED Ajax Better Hints.
   - Do you want to write custom hints and loading screen tips for Listonomicon? We have a channel for you to contribute!

## Listonomicon v2.2.1

Save Safe: Yes from v2.2.

1. UPDATED BG3-MO2 Plugin to version 2.4.0.
   - If you are STILL struggling to enable optional mods, or custom added mods: CLOSE MO2, then go to [install path]\Listonomicon\profiles\Listonomicon and delete modsCache.json.
   - This update should further resolve edge cases, bugs, and issues with certain mods not working with the plugin.
   - This update should further resolve edge cases, bugs, and issues with the modsCache failing to receive updates from MO2 and sending them to modsettings.lsx.
   - Another big THANK YOU to Zino for all of his bugfixing over the last 96 hours. His hard work alone is pushing the whole BG3 mod scene forward by eliminating the awkward MO2-BG3MM nonsense we used to deal with. Everybody say thank you Zino.
2. UPDATED 13 mods. Including fixing an issue with Foe Bane and Burning Earth not being equipable.
3. ADDED No Free NPC Heals (NPCs will not magically, infinitely heal themselves if damaged out of combat, meaning stealthy assassins can actually play the game without needing a 1-hit-kill to do their role).
4. REORGANIZED MO2 based on further feedback to hide categories/selections that don't matter, and show the notes column so it is easier to understand how to use OPTIONAL mods.

## Listonomicon v2.2

Save Safe: Yes from v2.1.

Actually included the mods added in the previous updates this time. Sorry everyone.

# Listonomicon v2.1

Save Safe: Yes from v2.0.

1. UPDATED the MO2-BG3 plugin to improve compatability with some mods, thanks to Zino.
   - RESTORED Spectactular Ensemble
   - RESTORED Cloaks of Faerun
   - RESTORED Mintharpy Hair
2. ADDED OPTIONAL mod Better Mattis Gear.
3. CHANGED Rootbuilder settings. I was unaware that the old settings prevented users from launching the game if Listo and BG3 were not installed on the same storage device. This should be fixed.
4. UPDATED 7 mods.
5. UPDATED Combat Extender based on new Goon's Passive Library features. Specifically replaced a hackneyed solution for the Phase Spider Matriarch to give her a more direct fall damage resistance buff.

## Listonomicon v2.0

Save Safe: No.

FRESH INSTALL REQUIRED.

The most significant aspect of this update is that BG3MM and manual Script Extender installation is no longer required, and manual mod settings file installation in %localappdata%/larian/etc is no longer required. However the new and improved system will conflict with any files in these locations. It is highly recommended that you nuke/reinstall BG3, delete %localappdata%/Larian Studios, then launch the game vanilla via Steam once to rebuild all the files/paths needed for MO2.
NOTE: The distribution of "Optional" Listo mods is no longer a big convenient list at the bottom of MO2. The order of mods in MO2 will be the order of your mods in game -- these means optional mods had to be placed where they need to be for the game to work with them enabled. You are encouraged to look through MO2 to find the optional mods you want, or might like to try. You can quickly look just for files that have a notepad icon which means there's special notes/instructions included.

1. ADDED College of Dance.
2. ADDED Harmony Habiliment.
3. ADDED Show me My Dream Guardian.
4. ADDED Better Matis Gear.
5. ADDED a fix for the toggle tooltip mod.
6. REMOVED Githyanki HD Body Spot Textures, and related Gith cosmetic mods.
7. ADDED Dark urge Banter Dialogue Fixes.
8. ADDED The Burning Earth.
9. ADDED Way of the Drunken Master.
10. ADDED Casamir and Sedrick - Crawling Hand Pets.
11. ADDED Goon's Passive Library (in the future this will enable even more Combat Extender magic).
12. ADDED DnD 2024 Fighting Styles.
13. MOVED Combat Extender AI and Smarter Enemies AI to "Optional" status. Both mods are great and I recommend all players use one or the other, however there are a handful of consistent crashes that requires disabling the AI mods to get through certain encounters for many players.
14. ADDED Yoesph's Listo Patch. HUGE THANK YOU to Yoesph volunteering his time and talent to making a bunch of balance tweaks and patches just for Listo!
- Patches several mods for Listo-oriented balance.
- Limits Shadar-Kai's misty step ability to be [proficiency bonus]-per-Long-Rest instead of unlimited.
- Re-balances the Mobility Feat.
- Changes the Belt of Frost Giant Strength to be a +str item rather than a set strength item.
- Removes a feat unwanted in Listo but needed as a mod library.
- Nerfs Deadly Alacrity to not provide a stat increase.
- Increases the base price of Fang of Boitata slightly.
15. ADDED PK Hair Collection.
16. Thanks for actually reading change logs :)
17. ADDED P4 NPC Heads for Tav.
18. REMOVED Play With Me.
19. REMOVED Perform With Your Party. PWM/PWYP are fun mods, however the use of JWL Discordant Instruments means very few parties these days even have an instrument equipped, so this became unnecessary bloat.
20. REMOVED Cloaks of Faerun (broken with Patch 7 / Listo 2.0 / new MO2 plugin).
21. REMOVED Spectacular Ensemble (broken with Patch 7 / Listo 2.0 / new MO2 plugin).
22. OPTIONAL MODS: ADDED
- Eye of Vecna
- Hand of Vecna
- Titan's Grip
- Moved all AI mods (Smart AI, CXAI) to "Optional" status
23. Many mod updates, as always.
24. Re-organized everything in MO2. MO2 is now THE load order of mods for the game.
25. UPDATED the extra encounters mod to grant more XP (less than base but no longer using the borderline zero XP config).
26. UPDATED Combat Extender's config to reduce the amount of enemies with access to Heat Metal in Grymforge, to nerf Grym's movement speed slightly, and to open an additional avenue for dealing damage to Grym. Added fire resistance to the Fists of Bane.
27. REMOVED Oath of Conquest. It's out of date, and the up-to-date versions block other Paladin subclasses from working.
28. REMOVED Minharpy hair.
29. REMOVED Lokelani's Lovely Lassies.
30. REMOVED Frosty Faces.
31. REMOVED New CC Head Presets Vol 2.
32. REMOVED BLossom's Presets.
33. REMOVED Poesilibre's Heads.
34. REMOVED Jun's Head Pack.
35. REMOVED Wayward Faces.

## Listonomicon v1.2.0

Save Safe: Recommend a new game, as many classes/subclasses will require a respec to update features and level progression.

1. REPLACED Better Hotbar 2 with Better Hotbar 2 (Volva's Edition). It is no longer necessary to prep your hotbar at the start of a new game for every companion. Ultrawide UI users unaffected by this change.
2. UPDATED 39 mods. Many of these include subclasses that now require a respec to clear and replace changed/updated class features. Some of these updates also effect Playable Undead and other race/subrace mods.
3. ADDED Cavalier, a Fighter subclass.
4. ADDED Poisoner's Robe Increases All -- this previously niche robe now improves ALL poison damage.
5. ADDED Father's Gift Improved. Any evil Durge who commits to the bit deserves an end game reward actually worth their time.
6. ADDED Displacer Beast as a Ranger, giving rangers a new animal companion option.
7. ADDED Fang of Boitata. This is expected to be an end-of-Act-1-beach reward to players who pinch their gold pieces, please tell me if this is too cheap/easy to acquire even with Listo's recommended difficulty settings.
8. ADDED Corellon's Grace Unarmed. This staff is now slightly less annoying for open hand monks to use.
9. ADDED Path of the Juggernot, a Barbarian subclass.
10. ADDED Foe Bane, a powerful reward for the conclusion of the Grove storyline (which can be upgraded further deep in Act 3, so don't throw it away!).
11. ADDED Rune Knight QoL tweak: Inscriptions do not need to be repeated after every short/long rest.
12. ADDED Vexa, a female dragonborn head.
13. ADDED Yet More Scales, adding even more dragonborn colors.
14. ADDED Minharpy Hair.
15. ADDED Rox's Vivid Aquarelle Eyes.
16. ADDED Lolth's Revered.
17. OPTIONAL MODS: ADDED A Devil You Gnome.
18. OPTIONAL MODS: ADDED Trash Mobs. Please let me know how this + Many More Monsters makes Act 1 feel/run.

## Listonomicon v1.1.4

Save Safe: Yes (and highly encouraged for v1.1.3)

Hotfix to fix problems that aren't my fault (Expansion 13-20 author broke their own mod in a way that isn't detected without starting a new game). Quick level 3 / Listo XP curve is fixed. Various cosmetic mods also caught updates. Updated Listo Lite to v1.1.4.

## Listonomicon v1.1.3

Save Safe: Yes (and highly encouraged for v1.1.2)

1. FIXED mod settings vs mod load order files.
2. UPDATED install instructions to place mod manager steps after the gallery download.
3. ADDED Solidarity Domain.
4. ADDED Ambition Domain.
5. ADDED Strength Domain.
6. ADDED Zeal Domain.
7. ADDED Hierophant.
8. ADDED Celestial Warlock.
9. UPDATED Divine Soul Sorcerer.
10. ADDED Spells Extra DND 5e Library (required for the above new mods).
11. UPDATED Pavelk UI mods.
12. REMOVED (for real this time) Honour Features Unlocker, since P7 now has a native solution.

## Listonomicon v1.1.2

Save Safe: Yes (and highly encouraged for v1.1.1)

1. FIXED OCO. I did not realize that when I tried to add the international language version of Overexplained Interactions, I ONLY added the international language. My fellow English speakers have this mod restored. Sorry.
2. Updated Artificer and a few UI mods.
3. REMOVED THE MOD MANAGER FROM LISTO'S DOWNLOAD. You now need to MANUALLY grab the latest copy of BG3MM (for fresh Listo installs). Listo's install instructions have been updated to reflect this change. Anyone updating a current Listo install should not need to worry about this, however if you have been using the same Listo folder since before Patch 7 please update your BG3MM to the latest version (1.0.11.1) to ensure Patch 7 compatibility.
4. UPDATED Listo Lite to Listonomicon v1.1.2 for those of you who want all the gameplay changes, classes, and other thrills without the cosmetic mod frills. The .wabbajack file must be downloaded manually from the Listo Nexus page. When loading Listo's mod order in BG3MM it is going to yell at you that hundreds of mods are missing, hit "Remove from order," close the error, and export the list to your game.

## Listonomicon v1.1.1

Save Safe: **No.**

**This update brings Listo to Patch 7. It is not backwards compatible with anything previous. Start a new game.**

1. ADDED Way of the Kensai.
2. ADDED Start with Oathbreaker (Paladins can begin the game as Oathbreakers).
3. ADDED Beast and Bow, ranger-focused equipment.
4. REPLACED Zero Weight Gold with Gold Weights Nothing.
5. REPLACED Longstrider AoE with Longstrider AoE (patch 7 compat version)
6. REPLACED CXAI with Smarter AI. CXAI is now considered the "Optional" AI mod due to stability/CTD concerns.
7. ADDED Yogurt Heads, for half orc and elven women.
8. ADDED P4 Draconic Bloodline, for dragonborn and draconic sorcerers.
9. REMOVED Honour Features Unlocker (no longer needed yay!)
10. REMOVED Baldur's Gate 3 Mod Fixer (no longer needed yay!)
11. REMOVED Highlight North (broken with P7)
12. REMOVED Compatibility Framework Random Requests, Less Annoying Series (broken with P7)
13. REMOVED War Caster 5e (broken with P7)
14. UPDATED over 100 mods, somewhere between 15-30% of the list.

## Listonomicon v1.0.2

Save Safe: Yes*. If your current campaign is using Automated Summons, DISABLE the toggle in-game and save, then update. You can safely ignore the missing mod error in BG3MM (swapped the old automated summon for a Script Extender version) and import the new load order .json, and safely ignore the missing mod error when loading your save. Everyone else should be able to update without complication.

1. ADDED Blessing of the Trickster Buff. For those of you dedicated to keeping Shadowheart in her lore-accurate subclass, BotT now acts a lot like Guidance but applies to a variety of skills/situations.
2. ADDED More Wild Magic Effects. Now wild sorcerers AND wild magic barbarians can enjoy a whackier experience! Stacks with d100 random magic effects to make sorcerers ~whacky~
3. ADDED Tides of Chaos Recharge. When a Wild Magic Sorcerer triggers a surge, their ToC is recharged. The subclass is now very risk-reward gambler and not for the feint of heart.
4. ADDED Topple the Weave. If Volothamp "Volo" Geddarm somehow dies during your adventures, **all** magic becomes wild magic.
5. ADDED Katie's Head Preset.
6. ADDED Heads of Plenty vol 2.
7. ADDED Pearl Seadragon - we are finally seeing female dragonborn cosmetic mods!
8. REPLACED Mari's makeup mod with Viour's Medieval Makeup Pack.
9. OPTIONAL MODS: Added Enemy Cloning with a prospective preconfigured setting file that will give you more enemies, but not a ton. Tweak further as you desire. Added Many More Monsters, which in my estimation is not a great mod (compared to Valkrana's Skeletal Encounters and Additional Enemy Encounters), but if you just really love BG3 combat and want to see what happens when two mods adds wildly different encounters to the same location, here you go.
10. UPDATED tons and tons and tons of mods.
11. UPDATED several mod configs. Notably there is an attempt with CX now to address the Myrkul fight, shift the source of difficulty in the Grymforge fight away from whacky imps, and other such things. Furthermore the CX config now relies less on artificial +X bonuses to enemy rolls, saving throws, and attacks. Instead the bonuses should actually be seen in their attributes, and translate logically into enhancing corresponding rolls.

## Listonomicon v1.0.1

Because sometimes you have to fix the 1.0 right away :(

Save safe: Yes* for most players. No for anyone who is playing (or has in their party) a head from [MISSING GODS Head Presets](https://www.nexusmods.com/baldursgate3/mods/10365), or is playing a Shadar-kai from the [Fantastical Multiverse mods](https://www.nexusmods.com/baldursgate3/mods/215).

1. ADDED Unique Gear: Helm of Balduran, to make the semi-hidden encounter reward feel a little less bad.
2. ADDED Unique Gear: Balduran's Giantslayer, to make a titular legendary worth its name.
3. ADDED Voice of the Circle Enhanced, to make the back-and-forth with the mushroom folk worth the hassle.
4. ADDED Dragonborn and Dragonbreath Unleashed - Standalone - Dragonbreath Unleashed - Per Combat (geez what a mouthful). This changes the dragonborn's breath attack into a once-per-combat ability, so you no longer save it for "a cool moment" just to long rest and realize you never touched it.
5. ADDED Dragonborn Stronger Breath Weapon. This increases the speed with which the dragonborn breath weapon increases to damage, gaining an extra d6 every 4 levels. So by 8th level it's essentially a burning hands on-demand, and by 20th level it's almost as good as a fireball.
6. ADDED More Mithral Ore. This game adds a handful of extra mithral ore pieces that can be found throughout Act 1/2, allowing players to forge extra adamantium gear. Note that extra ore will not retroactively spawn into an active game, so anyone updating mid act 1 will not find extra ore until they enter act 2.
7. ADDED Increase Paladin Aura Range. Your paladins are now able to project their divine or profane AoE buffs out to 15m just like in the tabletop. You no longer need to be holding hands with/french kissing/getting a piggyback ride for your paladin to share their buffs (vanilla range is 3m!). Probably applies to enemies too.
8. ADDED Racial Height Variation. Elves are now slightly shorter, half orcs are slightly larger, halflings are slightly smaller, gith are slightly taller. All of the changes are a 5% or less adjustment so not drastic unto themselves, but a cosmopolitan party certainly looks more distinct now with towering orcs and slender elves!
9. ADDED Sparrow's Gilded Dragonscales. Dragonborn finally getting love from the mod community :)
10. ADDED Cryptic Shadows: Playable Shadar-Kai. You can find them as an elf subrace option now.
11. REMOVED the Shadar-Kai file for Fantastical Multiverse.
12. REMOVED Missing Gods heads.
13. OPTIONAL MODS: Appearance Edit Enhanced and Appearance Edit Origins is now included in Listo. This allows you to respec characters for free and change their appearance, both features I have tested and they work very well. There is also a 'Resculpt' option that I believe allows you to alter body types or even the race of your companions, which I have not tested.
14. UPDATED Listo mod settings. Specifically, I found the file (I think) for auto loot seller that was forcing all of MY personal junk list items onto all of your games (which is why mundane things like scimitars and armor were being marked as junk, instead of just actual junk). You should now be free of my oppression if you delete your old mod settings and update with the new ones.
15. NUKED some files that I think were being erroneously included in Listo distros, mostly crash logs and similar items generated and stuck in the Overwrite folder. I also tried deleting an erroneous GustavDev folder that was being distributed, which has always been empty but I think may possibly be related to some users experiencing multiplayer connection issues stating that mods are out of date or don't match. Will require more testing.
16. REPLACED many Listo Wabbajack assets such as the splash, gallery image, etc to new and original art made by me (with AI and Paint.net). Eventually we desire to replace these again with art from the community/friends/etc.


## Listonomicon v1.0
That's right baby, 1.0. We did it, Reddit!

Save safe: Extremely no.

Note: With Expansion 13-20 replacing my own custom XP curve mods, the amount of XP needed to level up is now able to be edited via MCM. While this may seem tempting, please note that editing XP requirements mid-playthrough is liable to break the leveling system completely. If you wish to customize XP, you should make your edits via the config file outside of the game, or make your edits in-game with the MCM on a sacrificial save. THEN START A NEW GAME with your XP curve active. If you do not hit level 3 after fighting the tutorial imps, you probably did you follow install instruction #5 and apply (or update) mod settings.

Compared to the previous version of Listo, about 17k XP was removed from the total journey of level 1-20 making it much more possible to reach level 20 in Listonomicon without chasing optimal max XP gains on every quest/encounter (eg choosing peaceful solutions to quests and thus not getting XP for people you would have killed otherwise, shouldn't lock you out of level 20).

1. ADDED an optional mods section. Please read notes on the new website or the old Listo Mod Identification excel sheet for instructions on how to enable and use these. Those of you seeking more of a challenge in Listonomicon, rejoice! Those of you who like summoner gameplay but don't want to micro manage all of your summons, rejoice! Those of you who want to have every character in your party during cutscenes, but not during combat, rejoice!
2. ADDED Fix Wall of Fire (which also fixes Wall of Ice), allowing the spell to inherit save DC and damage benefits from the elemental adept feat.
3. ADDED Megamagic Extended, giving sorcerers a few more options.
4. ADDED Favored Soul, for divine sorcery.
5. ADDED College of Eloquence.
6. ADDED College of Creation.
7. ADDED Way of the Ascendant.
8. ADDED Oath of Zeal.
9. ADDED Shields Revised, changing the features of a small number of magic shields.
10. ADDED Combat Console Commands. While this is not expected to be used by players, it builds a final brute force option in for fights that are bugged out or causing crashes.
11. ADDED Sword of the Emperor, so your dream visitor's big reward isn't so bloody lame.
12. ADDED Better End Game Caster, which improves Robe of the Weave to be better.
13. ADDED Arcanist Feat. While this may appear niche to many players, it opens a limited caster utility option to all characters.
14. ADDED Permanent Weapon Bond, allowing Eldritch Knight weapon bonds to persist through long rests.
15. ADDED Event Auto Save, which will now initiate autosaves when entering the camp, taking short rests, or trading with merchants (you can enable more options in the MCM).
16. ADDED Circle of Spore Druid Damage Choices and Spore Druid Extra Attack. This means Spore druids are no longer locked to necromancy damage, and gain one extra attack at level 5, overall creating a much more compelling option.
17. ADDED Spells Enhanced - Shillelagh.
18. ADDED Heart of Enver Gortash. If you are Durge you will find out what this means.
19. ADDED Path of the Ancestral Guardian.
20. ADDED Illithid Powers Overhaul 2.
21. ADDED Orin's True Bossfight, turning into a 2-phase encounter during Dark Urge playthroughs.
22. ADDED Warlock Spell List Fixer, improving modded subclass access to spells from mods.
23. ADDED Valkrana's Undead Encounters, and its prequisites. This adds more undead encounters to Act 1, 2, and 3; and greatly expands the variety of summonable undead.
24. ADDED Reduce NPC Banter Repetiveness. This is configured to allow NPCs to repeat themselves, but now they will wait much, much longer to do so. You don't have to listen to Jaheria's racist remarks about tiefling children every 5 seconds, or hear the mages outside Lorakan's tower spam their party tricks over and over again. You can further tweak this in the MCM.
25. ADDED pickpocketing tweaks, making pickpocketing gold and heavy objects more difficult.
26. ADDED Relative Ability Boost Items. This changes many "set stat to x" items to instead be "increase stat +x" items. This decreases how much stat dumping is possible in Listo, but it also increases the ability to exceed 20 in more stats.
27. ADDED NPC Visual Overhaul for Aylin, Cazador, and the Druids (yes I know Aaron comes out looking weird and the changes to Kagha might be controversial - give us feedback).
28. ADDED Poesielibre's Fair Eye Colors.
29. ADDED Myky's Heads.
30. ADDED Vlaakith's Chosen.
31. ADDED Wayward Faces.
32. ADDED Half Orc Heads.
33. ADDED Kirby's Hair Pack.
34. ADDED Pretty Boys.
35. OPTIONAL MODS: Absolute Wrath, Valkrana's Skeletal Challenge, Sit This One Out 2, Enemy Stats (enabled in Listo by default with features turned off), Smarter AI, Exhaustion, Automated Summons, PF2e Spells, Randomized Equipment Loot, Intelligent Warlock, Loot From Chasms.
36. REMOVED Scars and Horror Head Presets.
37. REMOVED Death Domain Cleric.
38. REMOVED Waypoint Inside Emerald Grove.
39. REMOVED Fast 3 Quick 20, Fast 3 Quick 6 Slow 20, and any other XP mods. Expansion now does this.
40. REMOVED More Soul Coins.
41. REMOVED Valdacil's Half-Illithid Effect Toggle.
42. REMOVED Achievement Enabler (Script Extender handles this).
43. REMOVED Medusae's Hairs.
44. REMOVED Lydia's Heads - Dark Seldarine.
45. REMOVED Medusae's Muses.
46. REMOVED Alt M Half-Elf Head 2.
47. REMOVED REn's Hair Pack.
48. REMOVED Tepkunset Hair Collection.
49. REMOVED Long Hairs.
50. REMOVED P4 NPC and Outfit Inspired Dyes.
51. REMOVED Maratini's Compendium of Countenances.
52. REMOVED Extra Game Hairs.
53. REMOVED Bigger Vanilla Hairs.
54. REMOVED Faces of Faerun.
55. REMOVED Yves Hairs.
56. REMOVED Misc Mods.
57. REMOVED Elgoth's head and Hair and Scars.
58. REMOVED Party Limit Begone (now handled by Configurable Party Limit via MCM).
59. REMOVED Purchaseable Camp Clothes (camp clothes for sale with Withers).
60. REMOVED JWL Crafting Framework.
61. REMOVED Sussur Weapons Expanded.
62. REMOVED Soul Smithing.
63. REMOVED Thrown and Unarmed Reckless Attack.
64. RREMOVED Better Hex Icons (redundant with Valdacil's mods).
65. REMOVED patches and prequisites related to other removed mods.

## Listonomicon v0.9.9.99
Fixing Stragglers
Save safe? Kinda from v0.9.9.9

1. ADDED Grove and Growl Act 1 and 2, adding druid-focused gear to the game.
2. ADDED Necromancy of Thay rebalance, making the book more than just a convenient way to get speak to dead.
3. ADDED Corrosive Ring, a new ring for spicier weapon attacks.
4. ADDED Unholy Oathbreakers, allowing Oathbreakers to better buff their own undead adn dish necrotic damage.
5. ADDED Fix Stragglers, which helps your entire party with a temporary jump height buff after you jump, to help them keep up!
6. ADDED Waiting With Style, adding act-sensitive new loading screens.
7. ADDED Gear Revised - Footwear. Replaces the effects of many footwear items with less lame ones, hopefully without going as far as the old VEO did.
8. Automated Summons. This breaks Listo's "don't flood the UI with an annoying # of toggle abilities" but I promise this one is worth it - allow your summons to be AI controlled, vastly simplifying combat for players who love Scratch + the new Thay undead + the old Thay undead + summon undead + summon elemental + summon etc etc etc. :)
9. ADDED 5e Reckless Attack, which changes reckless attack to a toggle passive for barbarians. You have to dedicate to using it, you don't get to swing, miss, and then invoke it.
10. ADDED Rat-Catcher's Flute.
11. ADDED Relative Ability Boost Items. This vastly cuts down on the number of magic items that set the owner's stat to a certain number, and changes them to instead be +X stat items. This hopefully fixes some stat dumping cheese, while also opening new avenues for players to reach over 20 in their stats.
12. ADDED Wayward Faces.
13. ADDED Half Orc Heads.
14. ADDED Kirby's Hair Pack.
15. ADDED Pretty Boys.
16. ADDED Scars and Horror Head Presets.
17. TWEAKED mod settings, especially as some mods have updated to use MCM instead of their old config system. Make sure to update your mod settings when you update Listo!

## Listonomicon v0.9.9.9
The QoL also No More Scaling Update
Save safe? Yes from v0.9.9.8

1. ADDED Poesielibre's Githyanki Head Trio, adding more Gith head options.
2. ADDED Lydia's Heads - Dark Seldarine, adding more elf head options.
3. ADDED Understated, adding more realistic eye options or hint-of-glow/fantasy but realistic eye options.
4. ADDED Astralities' Wondrous Skintones, providing even more skin color options.
5. ADDED Reforged Head, adding more male draongborn head options.
6. ADDED Elixers Revised. Note that this makes a lot of tweaks to how all elixers / "until long rest" potions work, making some of them less useless.
7. ADDED Speak With Animals AoE. SWA is now an AoE spell, allowing you to share it with your entire party at once.
8. ADDED Longstrider AoE. Longstrider is now an AoE spell, allowing you to hit your entire party at once after a long rest.
9. UPDATED several mods.
10. CHANGED Combat Extender, again.
- Removed the "enemies scale to the player's level" part of the code.
- Tweaked enemy stats accordingly. Enemies will receive buffs to their HP based on the player's level according to my testing, but their buffs to everything else (rolls, dice, stats) will rely on their vanilla level rather than scaling to you and then calculating.
11. ADDED an optional section. If you feel strongly that leveling up faster is more fun, enable Fast 3 Quick 20 - Faster XP (and then make sure to disable Fast 3 Quick 6 Slow 20). The actual mod .pak name is the same so you do not have to touch anything in BG3MM.
12. REMOVED Valdacil's buff hider mod. Positive buffs (including "lasts until long rest" ones) will appear next to your party member icons again.

## Listonomicon v0.9.9.8
The [Witty Title] Update
Save safe? No. No. No. Absolutely not.

1. REPLACED the XP/level curve. Previously, Listo required aboutt 306k total XP to reach level 20, it now requires 401k total XP. The bulk of increased XP requirements are in the second half, meaning that you should still be level 3 at the end of the tutorial; you should reach level 6 relatively quickly as you knock out early Act 1 content; the progression will be more vanilla-like around level 10; and then it will be noticeably slower on the way to level 20. For comparison, vanilla BG3 would theoretically require about 360K to reach level 20, but because of AEE adding more encounters, and CX making encounters scale to the players level (including increased XP rewards), it is still possible to reach level 20 by the end of the game. The goal is not to move level 20 out of reach; the goal is to reduce the rate at which players are exploring the Gith Creche and already level 12+. Feedback/playtesting, as always, is needed.
2. ADDED Death Domain as a Cleric class.
3. ADDED Durge's Managed Head. This mod is a new base for dragonborn, enabling cosmetics for this previously underserved race. No new female dragonborn options yet :( but making progress.
4. ADDED Crystal Crowns, which adds more crest and horn options to Durge's Managed Head.
5. ADDED Missing Gods, more heads for vanilla races.
6. ADDED Indoct's Subtle Piercings.
7. ADDED Heir of Thunder for a sweet rockin' hairdo.
8. ADDED Astralities Fluffy Ears, for you degenerates.
9. ADDED Fantastical Stylist. This patch brings various cosmetic hair mods to many of the races from Fantastical Multiverse, such as Firbolgs. The options for these races is still far smaller than vanilla races, but it's nice to see them granted more options!
10. REMOVED Vanilla Equipment Overhaul, something that I have mixed feelings about. Some of the items added/changed were really nice, some ranged the gamut from unbalanced to actually non-functional. This means the selection of good magic items will be smaller, as many old Gale Food items are now squarely back in the Gale Food category, but do not forget about JWL Soul Smithing as a way to improve the magic weapons that are still viable.
11. REMOVED Unlock Level Curve. This is something I should have done many updates ago, as ULC and Expansion 13-20 are two mods that do the same thing and have both been in Listo for a while now. I don't know if particular conflicts between the two mods is/was responsible for situations players were running into where they were stuck at the level up screen, or if that was an issue that a recent ImprovedUI Assets update fixed, either way I hope it's gone.
12. REMOVED various patches related to VEO and ULC that are no longer necessary.
13. UPDATED a ton of mods.
14. FIXED (hopefully) the distribution of the BG3MM .json and mod settings files and did not uber-goof that stuff again.
15. TWEAKED Combat Extender further. Regard changes in the Listo instructions document regarded recommended party size, which is now 4 in Act 1; 5 in Act 2; and 6 in Act 3 (the old recommendation was 6 in all acts). Enemies have been made tougher again, in line with or above the CX "Harder Enemies and Bosses" config, in addition to various direct edits made to many Act 1 and some Act 2/3 bosses and encounters. I hope that, combined with the changes to XP, players feel challenged to consider their equipment, options, class features, and game mechanics with more critical thinking that ever before in BG3; but no one feels punished by an anti-fun, overly difficult, slow and excruciating experience. There is no shame in making the game easier for yourself by using more party members (why not bring the whole camp when fighting an entire goblin army?), the game is in your hands and Listonomicon wants to empower YOUR fun. Change stuff, turn mods off, add new ones, make the game even harder if you want to, just make sure when providing feedback and reporting bugs that you let us know what you have changed, or else it is a lot harder to help!

## Listonomicon v0.9.9.7
The Deities & Demigods Update 2
Save safe from v0.9.9.6? Maybe - no if you are playing a lich.

1. ADDED Faithful and Faithless, and Origins Gods. These mods build on top of the last update, which enabled all classes to pick a deity. Unfortunately, it force defaulted all characters to deities that did not make sense, which has no real gameplay impact but bothers me. Origins Gods assigns an appropriate faith to all playable and recruitable characters (though it is still up to you to make any necessary updates, if Act 2 or Act 3 events causes anyone to change allegiances...)
2. ADDED Multiclass Preferred Casting Ability. In theory this should fix issues where multiclassing caused a character's "Spellcasting Stat" to be reassigned from what they actually want to use, to whatever their new class is. For example, the classic Sorcerer 19 / Storm Cleric 1 with maxed out Charisma and dumped Wisdom, just trying to get that sweet sweet lightning damage bonus, would also have Wisdom assigned as their "Spellcasting Stat," interfering with things such as scrolls, Illithid powers, or the Infernal Rapier. This should remove tedium with having to plan your multiclasses around ensuring your preferred stat class is chosen last.
3. ADDED the Caustic Feat, which is like Elemental Adept but for poison damage spells.
4. ADDED Way of the Astral Self Monk subclass.
5. ADDED The Lads, Onyx Eye Collection, and Ghouls Custom Piercings.
6. UPDATED many, many, many mods. Many of these updates include cosmetic mods which have added even more heads and customization options, especially for the playable undead lovers!
7. POSSIBLY solved the issue that caused some Listonomicon playthroughs to end prematurely due to crashing whenever the game required the dice roll UI. This was possibly caused by the Trade Clutter Begone (TCB) mod, which the author diagnosed as causing save corruptions when unexpectedly dedicated game safeguards tried to force un-delete the vendor trash that TCB tried to delete. This silent battle in the invisible recesses of vendor inventories is why no one could find and destroy corrupted items (as every Reddit help thread said we should try to do). The update to TCB v1.3 promises to have this issue fixed. Moreoever, the mod now uses MCM. BY DEFAULT, there is a large list of junk items which were manually chosen, and will be deleted as soon as a vendor's inventory is closed after sale. This makes it safer to mass dump all of your vendor trash wares, without cluttering vendors *too* much. However, if you want even less trader clutter, you can enable the deletion of all sold items. CAUTION: Leave the setting enabled to only delete Common-rarity items from vendors, or else if you accidentally sell a magic item to Arron and close the inventory that crafty halfling bastard will hide it forever and force you to reload a save when you realize the Periapt of Wound Healing is actually based and not "some dumb heart necklace who needs healing anyway." Even if you do not plan to update Listo to v0.9.9.7, I would recommend you update this specific mod.
8. The updates to Ghouls Playable Undeads will break in-progress Lich playthroughs. All other undead should be* fine to update mid playthrough. But in general, mid-playthrough updated is not recommended to most people.
9. Further tweaked Combat Extender

## Listonomicon v0.9.9.6
The Deities & Demigods Update

1. ADDED Gods Extra, and specific 6 deities from OddCoward which restore cut dialogue and RP opportunities for Bhaal, Jergal, Myrkul, Shar, Silvanus, and Bane's faithful. NOTE this will default all controllable characters to a deity that does not reflect their lore, however you can respec at Withers to an appropriate faith or an appropriate lack of faith.
2. TWEAKED Combat Extender further, based on actual play testing/running multiple fights against the Phase Spider Matriarch and goblin camp NPCs to ensure that they only have features that their AI and the game can handle and will function as expected. Act 1 enemy Rangers have less access to spells. If you only want these tweaks without updating, check the pinned file in the #cx-xxx-xperimental channel.
3. ADDED more cosmetics: Ponytail hair styles, Lara Croft-style hair, and a surprise change to everyone's favorite Selunite in Act 3.

## Listonomicon v0.9.9.5
The Encounters Gone Wild Magic Update (aka the CXXX Update)

1. ADDED "Action Resource Passives." This utility mod changes nothing in your game directly, but it is a library of effects that can be used with Combat Extender to further customize enemies.
2. TWEAKED Combat Extender mod settings HEAVILY. Over 200 lines of json code have been added, spicing up a variety of Act 1, 2, and 3 encounters with never-before-seen twists and dangers. Combined with the d100 Wild Magic Surges mod, this now provides the opportunity for your goblin, fey, mephit, and kuo toa spell casters to trigger a number of random effects. These are not always obvious; be on the look out for the surge VFX and makek sure to inspect enemies to see if they have gotten any crazy buffs - or debuffs! Many Act 1 boss fights have been altered and a few non-boss encounters have been turned into pseudo-boss fights. BE ON YOUR TOES!
3. REMOVED the physx piercings mod. While I very much like the author's work, the reality is that incompatibility with custom heads means the piercings are just broken options to click through for 90% of the cosmetic options in Listo. This also means Gale Edits was removed as it is no longer needed.
4. REMOVED the 5e-spells specific portions of the "5e Spells Duration Fixes" mod due to its age and lack of updates/compatibility with the current state of 5e spells.
5. ADDED Valdacil's Spell Adjustments Vanilla, 5e, and VFX to preserve most of the spell rebalancing ideas. NOTE that this makes several key changes to spells you have be used to behaving a certain way in older Listo versions; make sure to read tooltips carefully!

## Listonomicon v0.9.9.4
Safe safe? Very no.

1. ADDED "Automatically Hide Summons" as a QoL feature.
2. ADDED "Statue Bless Fix" so your Act 3 gold investment feels less silly.
3. ADDED "Way of the Long Death" as a monk subclass.
4. ADDED "Monk 5e Adjustments" as a more modern alternative to Alternate Monk, combined with the changes from Expansion 13-20.
5. ADDED "Astral" as a half-elf choice to go with astral elves.
6. ADDED "Wild Magic d100" - this is a test candidate that needs feedback. I don't know if all 80 new wild magic surges work or not so if you do not want to be a gineau pig, you can safely disable this mod before starting a new game. Otherwise expect Wild Magic Barbarian and Sorcerer to get whacky.
7. ADDED a rising % chance for a wild magic surge to occur for each spell cast in combat.
8. ADDED several cosmetic mods.
9. REMOVED Ranger Leather Armor. The armor is aesthetically pleasing but so statistically underwhelming that I don't think anyone has ever bought a set in Listo.
10. UPDATED Volition Cabinet, and related mods, to the Mod Configuration Menu-empowered version. Hit "Insert" to open the MCM menu when in game. NOTE: Any changes to mod settings is considered changing Listonomicon and will earn you a +custom :)
11. TWEAKED mod settings across the board.
12. All enemies will have a little more HP, though not quite to "Stronger Bosses and Enemies" CX config level. Bosses now have an extra bonus action. Enemies have a slight damage buff that scales slightly sooner. Enemy AC scaling has been slightly delayed to scale later. Enemy bonus to hit and stat increases kick in slightly sooner.
13. Updated mods. Updated updates. So many updates. As I was finishing this update Community Library snuck in a midnight update. ahhhhhh
14. REPLACED an older spell list sorter mod with a newer spell list sorter mod (which should be more compatible with non-English languages and break less often)
15. Got my head out of my ass and figured out how to actually include optional mods. All of the old attempt optional mods are gone, what you have now are ultrawide 21:9 UI options. Make sure to disable the corresponding 16:9 mod.

## Listonomicon v0.9.9.3
Skipped, all internal testing.

## Listonomicon v0.9.9.2
The Big Community Feedback, Cleaning Up Legacy Issues, Changing Outdated Decisions, and Optional Mods Update
Save safe? No.

1. REMOVED Cleric Subclasses. Hopefully this mod will receive updates and fixes, or individual cleric class mods will fill in the gap.
2. REMOVED Alternate Monk Complete. Hopefully this mod will receive updates and fixes, or individual cleric class mods will fill in the gap.
3. REMOVED PF2e Spells. This is now an "Optional" mod.
4. REMOVED Legendary Equipment - Class and Armor Sets.
5. REMOVED Better Autosort Containers. This is now an "Optional" mod. Read below.
6. ADDED around 14 new cosmetic mods.
7. ADDED around 8 new gameplay mods - but some of these are optional. Read below.
8. ADDED Homebrew Spells, to help make up for the loss of PF2e. RIP.
9. ADDED alternate options for UI mods to better suit ultrawide 21:9 players.
10. UPDATED Listo mod settings, please re-do this install step as always. It may be safest to nuke the contents of %localappdata%/larian studios/script extender first to get rid of anything old and no longer needed.
11. UPDATED Yuuko Shionji's Listonomicon Patch to address a magic item economy inflation issue in AEE.

Listonomicon Now Has "Optional" Mods

Support is not explicitly offered for enabling these mods. Anyone trying to play Multiplayer should probably ignore them to avoid introducing new sources of conflict. For everyone else, this includes:
1. Re-adding PF2e to the game, for those who can't live without it.
2. Alternate Dynamic Sidebar options.
3. 21:9 versions of Better Hotbar and the Party View.
4. Extending Wild Magic to a d100 table of whacky effects.
5. Re-adding autosort containers, for those who really like bags.
6. The older "Spell List Combiner" in case the updated replacement does not work for you.

Optional files _should_ be able to be placed anywhere in your BG3MM load order, with the exception of PF2e spells which must be below Unlock Level Curve and 5e Spells.

## Listonomicon v0.9.9.1
Safe safe? No

1. REMOVED Script Extender as a download in MO2. Please continue to install it manually as per gdoc instructions. Uncomfirmed if this was the problem.
2. UPDATED Listo mod settings, please re-do this install step. Uncomfirmed if this was the problem.
3. REMOVED Zhent trader in Act 1 having so many goodies, due to numerous unintended consequences + newer mods better meeting the intent.
4. Updated a bunch of mods.
5. DISABLED the monk-specific parts of Level 13-20 Extended, as the relatively comprehensive monk class mod combined with other Listo mods serve most of the same purpose.
6. Added a new bard-oriented outfit, better hex icons, and shadow sorcerers.

## Listonomicon v0.9.9
Save safe? Ehh I wouldn't recommend it

The Big Yuuko Update

1. Incorporated a patch by @yuuko_shionji which moves various dye mods, camp clothes, and other miscellaneous items to Withers and off of vendors. You should no longer be swamped with 30 cosmetics and misc items for sale at Aaron and Damian and every single other vendor. Yuuko doesn't want to upload their patch to nexus themself to get the credit for their work so everyone who is happy to escape the tyranny of cluttered shopkeepers, please thank Yuuko in the Discord.
2. Added Unlock Level Curve 13-20 expansion. This fills the gap on several vanilla classes/subclasses where Unlock Level Curve has not yet updated to cover features after level 13 (or scaling features after 13). This is a big change to many classes and could be a big swing in performance, please let us know what you encounter and what you think. There is an optional file to disable class features on a per-class basis, but there is no option for more granular control to enable/disable specific class features or changes to class features. Thank you @garrynards for bringing this mod to our attention!
3. Updated several mods, including one which adds physx to vanilla piercings and also requires a slight edit to Gale's head (and fix to his beard).
4. Auto junker has been made to play nice with the auto use soap mod, and now cleaning materials will not be treated as junk or thrown away. That being said, make sure to re-apply the steps on installing Listo's mod settings for this update as normal.
5. Shove, and other attacks that move enemies, now has a slightly adjustable targeting angle! Read about it here https://www.nexusmods.com/baldursgate3/mods/9371. We have been waiting for this!! 
6. Took another swing at adjusting enemy HP via Combat Extender. Bosses slightly more, normals the same. Enemy scaling has been altered slightly, please read the updated Listo google doc.

## Listonomicon v0.9.8
Save safe? Yes
1. Used Yuuko's better auto junk list to save sponges and cleaning supplies (thanks @yuuko_shionji again).
2. Removed sell_list.json and replaced with blank one.
3. Update customized difficulty to x4 prices to *actually* do what I wanted it to. If you have already started a game, you can adjust this in your custom game difficulty settings manually.
4. Added Undead Warlock, a class I have had my eye on for a long time but was waiting to receive more updates. Thank you @mattwiththegat for bringing it back to our attention to look at again.
5. Adjusted the mod order in BG3MM *slightly* to move the compatibility framework back to the bottom, just in case other changes knocked it into a position where it no longer did its job.

## Release 0.9.7
Save safe?: No.
1. Enemy HP bonuses are reigned in to be ideally half of what they were before.
2. Removed the acceleration bonus to movement speed (but kept the increased movement speed itself) done
3. Remove firearms mod
4. Firework spell has been moved off the basic caster list.
5. Withers Little Money update: He should now only sell basic supplies and food. Note that any gear sold to him from mods will be stuck in his inventory forever, just like a lot of other shop keepers.
6. Thanks to @yuuko_shionji I have added tweaks to Dynamic Sidebar to reduce the size of statuses, and to let them wrap into two rows.
7. Added Faith and Fortitude (Act 1), introducing new Cleric-centric gear throughout Act 1.

## Release 0.9.6
Save safe?: No.
1. Briny Bolt has been moved off of regular casters and is now exclusive to boss fights. I'm sorry for everyone who was blinded trying to find Withers.
2. Mod settings and the BG3MM are now 1 download. The manual install instructions are still the same (drag and drop to the right places for mod settings, load the .json in BG3MM and hit deploy to game) but there's less places to hunt down files.
3. 7 mods have been updated.
4. Better Hotbar 2 has been replaced with BH2 "Vova's Edition." **Please let us know what this experience is like**. Was the old hotbar better?
5. **XP curve has been finally fixed**. This means the update is not save safe as changing XP requirements mid game will break leveling. You will now hit **level 3 in the tutorial**, and have a slower path to level 20. But with the extra encounters and working level scale, this should mean the level pace is now where Listo wanted it. As always, please provide feedback on this critical area.
6. Added 1 new gameplay mod (JWL Discordant Instruments), added an achievement enabler, 2 more sets of eyes and 1 hair pack.
7. We removed all mods by Aether at their request. We thank the many mod authors who have shown support to Listonomicon :)

## Release 0.9.5
Save safe?: Probably safe with 0.9.4
Updated 8 mods.
BIG WITHERS MONEY UPDATE: Withers is now a trader. He has taken several dyes and other clutter out of the inventory of his fellow shopkeepers, and has become the exclusive dealer of some comsetic mods. Three cheers for less cluttered shopping experiences everywhere else.

## Release 0.9.4
Save safe?: Probably safe with 0.9.3
Updated 7 mods.
Added several new races from Fantastic Multiverses. Updating mod settings due to the related mods adding new features. Added smart cunning action and invisibility movement fix. More cosmetics.

## Release 0.9.3  
Save Safe?: ABSOLUTELY NOT
Updated 15 mods.
Updated mod settings to now properly apply CX level scaling for enemies, helping Listo achieve the advertised and intended difficulty curve!
Absolutely not save safe due to removing Aether's Obliterate. Trying to load a save that references now missing data (gear, equipment, spells, etc) will bork your game.

## Release 0.9.1 and 0.9.2  
Save Safe?: NO
Apologies for lack of notes but these version numbers were used for internal testing only.

## Release 0.9  
Save Safe?: NO
