---
layout: default
title: Combat Extender and Game Mechanics and Balance Changes
nav_order: 4
description: Listonomicon
---

## Game Balance and Combat Extender vs Extended Level Scale

With [Combat Extender](https://www.nexusmods.com/baldursgate3/mods/5207/?tab=description&topic_id=13712501), enemies will have access to 5e and Homebrew spells, will fight smarter, and receive additional buffs to catch up/try to keep pace with exponential player power.

Enemies receive proportional increases to HP according to the player’s level. Their stats, AC, rolls, etc are improved proportional to their own level. This means all enemies are more dangerous (with higher level enemies being even more dangerous, and the few bosses over level 12 being especially dangerous) - but the player can, and will, still experience some amount of power fantasy as they eventually outpace the power of mook enemies. The goal of this enemy tuning is to keep combat challenging for longer, challenging players to consider their equipment, spells, and class features with more critical thinking than vanilla BG3. Bosses are especially enhanced, with many assigned direct manual tweaks to provide them with new abilities and sources of danger. CX decisions are made on the assumption that players will honor Listonomicon’s recommendation to keep their party size between 4 and 6 characters, and play on the custom difficulty settings described at the bottom of the List install instructions (mostly tactician, with harder shopping and more food required for Long Rest), as well as explore all of the options they now have such as enhanced access to feats, new magic items for sale or found in the world, etc. Some of the new spells given to enemies can be quite nasty, but the most debilitating ones (like turn to stone, or AoE banish effects) should be limited to boss encounters like Nere and Balthazar. As a baseline, boss fights are tuned to be difficult, regular encounters should be less easy, and Larian has allowed us to enable honour mode rules (including anti damage rider cheese and enhanced enemy abilities) without the single save limit.

:::caution
You are expected to run away from some fights. Or assess your enemies, and choose to come back when you are prepared. Do not blindly run into every encounter! You will be challenged to pick your fights during Act 1 and will need to gather characters, gear, and levels to prepare for some enemies.
:::

Combat should be surprising and challenging, not slow and tedious; please report enemies appearing with excess HP and AC. The one known flaw in how mods implement balance tweaks to Listonomicon is the manner in which NPCs are given extra damage: Split attacks, such as magic missile and ray of fire, will add this extra damage to each attack, much like the Agonizing Blast +cha damage bonus is added to each beam of Eldritch Blast. This can lead to unexpected, huge spikes of damage from enemy casters, especially in the early game. Focus fire on enemy mages! In addition, there are a small number of transforming enemies that interact in unpredictable ways with Combat Extender. Some gain too much HP, some don’t get any bonus HP at all.

Currently, Combat Extender does not apply equally to new encounters added by mods. Enemies seem to be affected by some aspects of gross stat enhancement, however they will not always receive extra spells, spell slots, class features, or other changes that depend on CX operating off of vanilla tags that define enemies as fighters, mages, etc. Do not expect all of AEE’s encounters to be scaled the same way vanilla encounters are, or for casters in modded encounters to be given the same 5e and Homebrew spell lists.

Many vanilla encounters have been significantly altered through the use of Combat Extender. Specific encounters in need of a punchup to stay relevant versus player power in Listonomicon have been tweaked, with some normal and many boss encounters being given feats, new spells, or the unique abilities of other creatures. Many enemies now rely on wild magic, and enemies you didn't even know could cast spells will surprise you.

## Party Size, Game Balance, and Performance

- Recommended party size is between 4 and 6. Use more companions at your peril. You set your party size with the [Mod Config Menu](https://www.nexusmods.com/baldursgate3/mods/11172?tab=description) (defaults to 6).

:::caution
Nothing stops you from filling your party with 12 characters. But this is detrimental to game performance and completely trivializes encounter difficulty.
The option for an unlimited party is convenient for ensuring story-relevant characters are available for the scenes and situations where you need them. It’s also easier to juggle inventories around, compare stats, and other activities when you can add and remove a larger number of party members. However, even one extra party member is another action, bonus action, multiple gear slots, another opportunity to roll high on initiative, more healing or offensive spells, etc, added to your party’s power in encounters. The game gets exponentially easier as the party size increases, and Combat Extender, Honour Mode, and other mods and game features can only do so much to counteract this phenomenon.
To this end, Listonomicon is recommended to play with 5 characters in the party. 3 or 4 for a challenge, 6 to make it easier. But it is up to you (and changing the party size in the mod configuration menu) to figure out how many (or how few) heroes is fun – and what your PC can handle. For example, my PC can survive most of the game with 6 heroes, but two necromancers who also summon four familiars and a beholderkin each leads to many CTDs. YMMV. If the game is feeling too easy, drop your party size and/or try enabling some of Listo’s optional mods.
You can enable Sit This One Out 2 in Optional Mods if you want to maintain a large party, but make some companions unable to join combat.
:::

:::warning
[Do not ride boats with more than 4 party members](https://www.nexusmods.com/baldursgate3/mods/327). At this time, the only known game breaking bug caused by party size is riding the boats to Grymforge. If any characters get stuck, dismiss as many working characters as possible; ride the boat back to the UD; and then ride the boat back to Grymforge, and the missing characters should arrive safely in Grymforge. Sometimes characters will fall off elevators and other moving platforms in the game when you have too many members. The creche elevator has a hard time fitting everyone. Excess party members may fall off the moving platform in Shar's temple. All other level transitions I have tested work, so far.
:::

## Customized Custom Difficulty

Listonomicon’s recommended custom difficulty settings have enemy aggression, power, and equipment set to “Tactician.” The player gets no special bonuses to rolls and neither do enemies. Camp costs are tripled, meaning it requires 120 Food Units to long rest. Merchant prices are x4, and selling prices are 1/4. Nothing in the UI is hidden from the player such as NPC health or roll DC previews. The customized difficulty is just like you started a game on Tactician, with food and shopping made more difficult. If you plan to use Randomized Equipment Loot (optional mod), it may be a good idea to reduce the merchant price setting (decreases price to buy, increases profit to sell) to help balance out the unpredictable access to magic items and equipment.

## Mod Configuration Menu

When you pause the game, you should see a new option for the Mod Configuration Menu. If this button does not work, you can also hit “1” (on the number row) to open the MCM. The various (official) mods in Listo have already been configured to work together with each other and the rest of the list, and match the intended game experience. Some of the optional mods have preconfigured settings. Use this menu to edit settings to your taste. If you decide that your character is walking too fast, or too slow; you don’t like the config for auto loot seller; you want to disable all of the liquor being sent straight to your camp chest; or otherwise want to change settings, you can modify many mods in the MCM or find their config files in %appdata%/local/larian studios/script extender. Make changes at your own peril!

## Initiative

Initiative in Listonomicon is calculated using a roll of d8+dex+bonuses. The vanilla calculation uses a d4 while the tabletop uses a d20. There are pros and cons to all three approaches. d8 was chosen to provide enough randomness to prevent most characters from consistently “beating” the initiative mechanic, while still enabling rogue (assassin)s, and other characters who heavily rely on going first, to reasonably guarantee success with the Alert feat, high dex, and +init gear.

## Optional Difficulty Mods

[Smarter AI MCM](https://www.nexusmods.com/baldursgate3/mods/11183) gives enemies more nuanced personalities and decision making based on their intelligence and archetype. If you would prefer that every enemy fight like they are desperate to win, use [CXAI](https://www.nexusmods.com/baldursgate3/mods/5207) instead. Other difficulty enhancing mods can be found under "I Wish The Game Was Harder" in MO2. Enable the mods which appeal to you. The unofficial recommendation is to enable Absolute Wrath and Enemy Cloning. Note Enemy Cloning will require you to fine tune the frequency and number of duplicates to your liking via the MCM menu.

You can enable the randomization of most loot in the game using Randomized Equipment Lootv3 under "New Weapons, Armor, Clothes." Most vanilla items (not counting quest rewards and plot relevant items) and any modded items above REL in the list will be randomly moved around the game. Make sure to disable Unarmed and Upgraded, Grove and Growl, Faith and Fortitude, and Beast and Bow -- and enable the version of those mods that says "REL."
