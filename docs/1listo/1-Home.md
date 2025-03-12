---
layout: default
title: Home
nav_order: 1
description: Listonomicon
---

# Home

![Listonom](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/main/Listo%20Banner.png)


# Join our [Discord](https://discord.gg/AmxvjHkQ5v)

## **What is Listonomicon?**

Listonomicon is a Wabbajack/MO2-powered mod list for BG3. The passion for compiling this list was born from the unexpected love that BG3 reignited for _Dungeons and Dragons_ - and the success in compiling it has been a gestalt effort of myself, former project members, mod makers, and players. I have sincere respect and appreciation for modders, Wabbajack, MO2 devs, LaughingLeader, MO2-BG3 plugin author Zino, and everyone else who contributes in small and large ways to enable Listo. Without them, Listo couldn't take a great game and make it even greater. True cthonauts of Larian OSIRIS and Script Extender code: Thank you, and thank everyone who contributes their time and talent to the gaming community for free. [Zehtuka](https://next.nexusmods.com/profile/Zehtuka/mods?gameId=3474) in particular was a big help in configuring and tweaking Combat Extender for Listonomicon, and learning better practices in mod config management in general, Visual Studio Code, and a lot of baby's-first-mod learning. [Reyqune](https://next.nexusmods.com/profile/reyqune/mods), the author of BG3 Enhanced Edition, and Baldursgoonsack, author of DIQ, have been huge sources of help on the list development/management side. [BaldursGoonsack](https://next.nexusmods.com/profile/BaldursGoonsack/mods?gameId=3474), [Yoesph](https://next.nexusmods.com/profile/Yoesph/mods?gameId=3474), [Lumaterian](https://next.nexusmods.com/profile/Lumaterian/mods?gameId=3474), [Chizfreak](https://next.nexusmods.com/profile/chizfreak/mods?gameId=3474), Yuuko Shionji, Cahoot, and others have made mods, mod patches, or changes to their mods =to better support Listonomicon, and I am endlessly thankful for their contributions and any future help we get from the mod community. This "thank you!" list is not exhaustive, I'm bad at writing down names and remembering everyone. I can't thank everyone enough for their patience and help. Over the final months of 2024, Listo truly transformed into a community effort with a great syncretic blend of mod making and knowledge sharing between Listo makers, players, and modders; DIQ makers, players, and modders; and taking help anywhere else we can get it.

Anyone who enjoys Listonomicon is asked, at a minimum, use MO2’s endorsement feature to show their appreciation to mod makers. Appreciate everyone involved in bringing new content to the game, as well as the facilitators of patches, community frameworks, script extenders, native mod loaders, and the hundred other things that are never seen in game but make the magic happen. Please report issues, crashes, or compatibility problems to Kitchen Sink first! Individual mod makers do not want a flood of bug reports that may or may not be related to their mod, when there are hundreds of variables caused by the big list of Listonomicon.

Finally, a big “Thank you!” again to the cthnonauts who volunteered to struggle with us through the many updates, hotfixes, community polls, tests, and revisions to reach Listonomicon 1.0. You helped us with everything from improving this documentation, to how we present Listo info, mod configurations, difficulty tweaks, new mods to include, and a better path to 1.0 and beyond than we would have found without you. Some of you spent hours diagnosing multiplayer issues, or figuring out why heads were missing in character creation, and gave us the confidence to keep going after an exhausted v0.9 release. 1.0 would not be released with confidence without the help, support, fun, memes, screenshots, complaints, suggestions, testing, and love of the BYC community. Listo 2.0, the big move to no longer require BG3MM (and to reduce the install process by 4 steps!), was made possible by the hard work and testing of Zino, who published the newer better faster smarter MO2-BG3 plugin. Listo 3.0 was built on the feedback, help, and involvement of the community across polls and good conversations. Listo 4.0+ has seen the move of Listonomicon to its own community, the Kitchen Sink, which quickly surpassed 500 members - telling me that one year later, people are still interested in this project and want to see Patch 8 compatible Listo v5.0 as soon as possible.

-Ajax

## What IS a Listonomicon?

Listonomicon, or "Listo," is a mod list for BG3 intended to add more content, depth, challenge, and variety. It takes the vanilla Tactician Difficulty/Honour Mode Ruleset experience as the baseline, and then adds new encounters, mechanics, and changes. The player is empowered with new choices in race, background, class, subclass, feats, spells, and equipment - but your enemy is likewise enhanced with access to both more vanilla features, and features taken from the very mods used by the player! The Listo world is more magical, with the player and enemies alike seeing an increase in power. Generally, Listo is balanced around the player having a level cap of 20, and using a party of 4-6 heroes. You are expected to already be familiar with the majority of BG3's features, and should come prepared to finally make use of all those scrolls, healing potions, poisons, elixirs, weapon coats, arrows, and other resources you may have previously neglected. The goal is not, however, to be some impossible, hard-as-nails, make-yourself-miserable ultra hardmode slog fest and Listo should never make you feel forced to cheese encounters or abuse mechanics. Listo wants to be a "D&D-first challenge," not a video game-y grind. What does "D&D-first" mean? I try to look at decisions with Listo the way a Dungeon Master would look at their campaign, not the way a developer would look at a video game.

<img align="right" width="400" height="400" src="https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/main/Listo%20book%20transparent.png"/>

:::caution
## **What is it Not?**
Listonomicon aims to achieve a transformation from a vanilla first playthrough, to a premium overhauled experience that keeps everything good about BG3 while adding more content. **If you want a more lightweight list to use as a basis/platform/framework for your own modding**, I recommend you use [Reyqune's BG3 Enhanced Edition](https://github.com/reyqune/Baldur-s-Gate-3-Enhanced-Edition/blob/main/README.md). If you want a comprehensive overhaul to BG3 but just don't like the way that Listonomicon has done it, I recommend you look at [Difficulty, Immersion, Quality](https://next.nexusmods.com/baldursgate3/collections/pns4qv) (there are multiple versions of this Nexus Collection with more or less customization options).

What Listonomicon absolutely is not:

- Gratuitous adult content frameworks or mods.
- A “Kitchen Sink” compilation. Every mod inclusion is considered for how it is expected to contribute to or disrupt the overall gameplay experience. If you want a modlist that includes as many mods as possible, every customization option on Nexus, and every class and subclass, play [Infinite Pathways](https://github.com/Millionsfrost/N.Y.A-NSFW-Modlist-Skyrim/blob/main/BG3_Infinite_Pathways.md).
- Classes, subclasses, races, feats, spells, magic items, or other options that are out of place. You should only see content that feels like something you might find in BG3 normally - or, at most, something that is within the realm of a creative Dungeon Master who loves buying Kobold Press, Pathfinder, OSR, and other high-quality, setting-agnostic books.
- Cheats, tutorial chests full of goodies, or an easier game. If anything, Listonomicon should feel more challenging and harder to predict than the vanilla game, if you play according to the guide (customized difficulty on Listonomicon settings, 6 party limit or smaller). Note that "More challenging" is not the same thing as "More difficult" - Listo is probably overall harder than vanilla, but the goal is to challenge you to flex your RPG and problem solving muscles and feel like critical thinking is applied in a rewarding way to encounters. We do not want you to autopilot through an easy game, and we don't want you pulling your hair out at a frustrating one.
- The intention to please everyone. This list is assembled according to our taste and vision. Fortunately, adding or removing mods from MO2 is pretty easy - feel free to use Listonomicon as a baseline, and then void any support on our Discord if you decide to customize!
- A list to play in “Honour Mode.” The features of Honour Mode (such as enhanced bosses, smarter enemies, and tweaked game mechanics) can be enabled in custom game rules, without being limited to a single save. It is not a good idea to mix ironman restrictions with heavily modded games.
- An intentionally punishing, grueling, unfair, unfun experience. Listonomicon should feel fresh, exciting, and challenging with many unexpected, changed, or completely new encounters - but it should not feel like an angry DM is dumping an impossible stat block on you at every turn and denying the fun of sword and sorcery fantasy.
:::

## **Customizing the List**
No support is offered or guaranteed for anyone who modifies the behavior or contents of Listonomicon. It is already difficult to keep up with new mods daily on the Nexus; updates and changes to mods in the list; changes in the script extender; new and changed features in the community compatibility frameworks; as well as game patches and hotfixes; vanilla game bugs; and the consequences of (seemingly) minor mod setting tweaks on gameplay. Further modify the list at your own peril. We hope that you are able to customize a fun, stable, great experience tailored to your specific tastes using Listonomicon as a stepping stone - but will not offer troubleshooting or technical support. There is a number of "Optional" mods included in Listo for players who want certain QoL or challenge features where we will try to help, but do not endorse that the end result will be balanced or fun or sane! If you are customizing the list and trying to play multiplayer, please be aware that your mod list, including the exact order mods are in, MUST be the same as all COOP friends. Otherwise MP will break. In fact many things break BG3 MP so you will need to do a lot of troubleshooting.

## **How do I Get Help?**
1.) Make sure to read the installation guide and **follow it in order**. Make sure you have a fresh install of Baldur's Gate 3, launched vanilla via Steam at least once, and nuked %appdata%/local/larian studios to wipe out any non-Listo mod files you may have. Try using the dx11 and the Vulkan version of the game.

2.) The next step would be to check our FAQ

3.) If your issue is not in the FAQ or Installation Guide, take the time to look around Listo's documentation (especially if it's a gameplay related questions). Major changes to classes and game mechanics have been explained, including links to the relevant mods.

4.) If your question is unanswered in our documentation, join our [Discord](https://discord.gg/AmxvjHkQ5v). Please look through the Listo Help Centre, in addition to looking through pins, announcements, and using the search function.

5.) If after your searches you still cannot find your issue, make a help post in #general-help, or make a bug report in #listo-bug-report.

:::danger

### DO NOT ASK USERS IN THE BALDUR'S GATE 3 OR OTHER DISCORDS FOR HELP

Please source all help to our discord alone. Even if you think that your question relates to your installation of Baldur's Gate 3 itself, please bring it into our discord. The authors of the many, many mods of Listonomicon do not want to diagnose problems in a list this large. Give us the first chance to make sure any issues you face are not Listo-specific, before asking for help elsewhere.
:::

## Why play Listonomicon?

![Features](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/refs/heads/main/ad.png)

The tl;dr is that I really enjoyed playing BG3, and wanted to add more on top of it, fix bugs, make QoL tweaks, and see more of my favorite elements of _Dungeons and Dragons_ represented in game. Listo does not see a reason to dramatically change the game or add scoops of strange, foreign content for the sake of more content. Just more BG3, more D&D, more fun. That is why in the philosophy described below, you will hopefully see a mix of exciting new content _and_ sensible restraint. Per the picture above, Listo is the premier Wabbajack-powered, ModOrganizer 2-using BG3 mod list that includes the best, lore friendly, pro-tabletop mods of Nexus _and_ Mod.io. It is also DVORAK compatible.

### Classes and Subclasses

Classes and Subclasses should represent something that exists in official D&D material or high-quality, setting-agnostic third party publications, makes sense in the Forgotten Realms (sorry my fellow _DragonMech_ and _Dragonstar_ fans), and compliments Larian’s design. It must work within the Compatibility Framework, and it must have level scaling to 20. Anything that requires unusual deviation or disruption to the regular flow of gameplay, such as a class that introduces an obnoxious number of toggle abilities or changes to the action economy or impacts the basic features of other classes, will most likely not be considered for inclusion. Classes and subclasses should follow their book/tabletop counterparts as closely as practical, with minimal changes to translate to the game.

### Magic Weapons, Armor, and Items

New gear should reasonably exist in the Forgotten Realms. The design philosophy and distribution (as static loot, or new random loot table entries or shopkeeper inventory) should match Larian’s progression expectations and design sensibility. Vanilla gear that is changed should avoid “over tuning” and changes should focus on making items more interesting, under-used items more compelling, or provide Quality of Life changes to awkward mechanics or descriptions.

### Feats, Class Features, and Progression

New feats should add interesting options. Revised feats (nerfed or buffed or just tweaked) should prevent any options from feeling mandatory, polarizing, or weak. The progression of feats every 3 levels, instead of 4, allows more feats to be chosen over the course of the game; allows builds to come together sooner (such as polearm/sentinel tanks); and it allows multi-class dips to grab their 3rd level subclass features without having to choose a 4th level or miss a feat. Level progression should be faster than the base game, allowing players who do most content to reach level 15+ and completionists to reach level 18+. Enabling any optional additional content (such as Many More Monsters and/or DHM) will definitely allow thorough players to reach level 20. New classes/subclasses must scale to level 20.

### Engaging Combat and Difficulty Curve

Enemy casters should have access to 5e, PF2e, and Homebrew spells, plus most additional spells added to Listo from other mods. The list enables Honour Mode mechanics, including legendary actions added to boss fights. And with Combat Extender, many enemies and bosses have been given direct upgrades to enhance the challenge. CX is further used to distribute many of the new feats, abilities, magic item effects, and options given to players across various enemies. In other words, changes to the world are not exclusively in the player's favor - just as you have access to a wider variety of tools, so do your foes!

### Multiplayer Compatibility

There is no promise that coop will never be sacrificed due to a future mod being incompatible, but too compelling to leave out of Listo. However, for the time being, Listo remains functional for a full, fun, multiplayer experience (with a handful of vanilla MP bugs).

### A Platform to Enable Your Fun

At the end of the day, Listo's goal is to give you even more BG3. But you may disagree with how we do that, the mod settings we use, and what mods we choose to use or exclude. That's fine and doesn't hurt our feelings :) While we do not promise any help or support, you are encouraged to explore making your own Wabbajack List if you think you can do better. In fact, you are welcome to use Listonomicon as a baseline and make your tweaks from there, including copying any mod settings or Listo's heavily customized Combat Extender config. Please read our [mod identification tracker notes](https://docs.google.com/spreadsheets/d/1_dZdM_16xeE4yIqKYyk7HMjLI3WW7PhfpdlrKHM4vyg/edit?usp=sharing) to get an understanding of our choices, what mods we have tested, and why Listo is the way it is - it will be easier to make something better if you can skip repeating the same mistakes we did! If you want a more lightweight platform to work from, I recommend [BG3 Enhanced Edition](https://github.com/reyqune/Baldur-s-Gate-3-Enhanced-Edition/blob/main/README.md) (which will have a much more simple list of mods to build up from). If you want a comprehensive mod list prepared for you, but don't like the way Listo does it, try [DIQ](https://next.nexusmods.com/baldursgate3/collections/pns4qv) and its many sub-lists.

### Have suggestions to make Listonomicon better?

The easiest way to get in touch with us is to join our Discord. Make sure to verify that you are a human via #verification, and then post your suggestions in #suggestions. Familiarize yourself with the list's philosophy before suggesting things that will be categorically denied (such as classes that lack level 20 progression, anime katanas, or mechs).
