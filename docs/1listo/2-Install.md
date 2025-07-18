---
layout: default
title: Installation
nav_order: 2
description: Install Info
---

# Installation Guide

:::info
## **Requirements**
- ~ 56 GB of space for the modlist (~half the GB can be reclaimed by deleting downloaded mod archives after finishing your install)
- A legally obtained copy of Baldur's Gate 3 (while a Steam global copy is safest, any copy should do), **installed and launched vanilla from Steam/GoG/whatever at least once**
- [Wabbajack](https://www.wabbajack.org/)
- A Nexus account (Premium recommended; _drastically_ increases install speed)
:::

:::danger
#### Installing Microsoft Visual C++ and .NET
**YOU MUST INSTALL THE x64 VERSION, THE x86 VERSION WILL NOT WORK!**
1. Install [Visual C++ x64](https://aka.ms/vs/17/release/vc_redist.x64.exe).
2. Install [.NET Runtime 8.X.X Desktop x64](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.13-windows-x64-installer).
3. Install [.NET 6.0 Runtime Desktop x64](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-6.0.30-windows-x64-installer).
4. **If you install Listo to a different storage device than where you installed BG3 itself**, and the game fails to launch but does not give you an error explaining why it can't work, go to the puzzle pieces icon at the top of MO2 -> Rootbuilder -> Open Rootbuilder -> On the first page that opens, change from “Link” to “Copy” (if your Listo is working ignore this).
:::

![Listonom](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/main/bol.png)

### 1.) Read Requirements

Please scroll back up and read the "Installing Microsoft Visual C++ and .NET" warning. These prequisities are required for the MO2 plugin to work correctly.

If you are playing on Linux, get instructions at the bottom!

### 2.) Basics

At no point in installing Listo do you need to manually download Mod Organizer 2. A MO2 "portable instance" will come pre-packed in Listo's download from Wabbajack. There will be a Mod Organizer 2.exe in the folder where Listo is installed used to launch the portable instance just for Listo. There is no reason to install MO2 manually. You do not need the Baldur's Gate 3 Mod Manager, you do not need to download the BG3 Script Extender, and you do not need Vortex. MO2 does the old Mod Manager's job, script extender is pre-packaged with Listo, and the whole point of Wabbajack is to ditch Vortex.

### 3.) Reinstall Baldur's Gate 3

- **Nuke BG3** (optional but _highly recommended_): Uninstall the game _completely_, delete anything left of the install folder (e.g. D:/SteamLibrary/steamapps/common/Baldurs Gate 3), and delete the folder at %localappdata%\Larian Studios. This is to ensure no errant files are leftover from previous playthroughs and is especially important for preventing data mismatches that will block multiplayer. Nuking everything improves the odds that Listo works as expected by providing a blank slate to build up from. Otherwise some files like an unwanted modsettings.lsx or Mod.io subscriptions could interfere with Listo.
- Also ensure that your new Baldur's Gate 3 is in a steam folder on the base of your drive (IE: C:/Steam/.../BaldursGate3) if possible, Wabbajack/MO2 might struggle if it is in a default Steam location like C:/program files(86)/Steam/.../BG3.
- Remove the BG3 Script Extender if you installed it manually (this should have happened with the nuking).
- After reinstalling, launch the game (vanilla from Steam) and reach the main menu once to regenerate all of the folders/paths that MO2 and BG3MM need. When you reach the main menu, quit and continue to Step 3.

### 3.) Preparing Your Listonomicon Folder

Create a folder named Listonomicon somewhere on your PC, the closer to the root of the drive the better. For example, D:/Games/Listonomicon, or just D:/Listonomicon. When we discuss "Downloads" or "Mods" folders in the future, we mean [the drive with this folder]/Listonomicon/Downloads or [the drive with this folder]/Listonomicon/Mods. This folder is your Listo Install Location.

### 4.) Downloading the List

You can get a copy of Listonomicon.wabbajack from Nexus if you want/need to play an older version of the list for any reason. However, the correct method is to open Wabbajack and browse the mod gallery. You should be able to find Listonomicon easily as the list of official BG3 lists is pretty small.

:::note
"But wait, what if I don't want to download all 550+ Listonomicon mods? I want the gameplay changes, but I'm never going to use every new cosmetic option!" In that case, you can manually download Listonomicon LITE.wabbajack from Nexus. **The "lite" version of Listo will be periodically updated to match major Listonomicon revisions, but will not be kept 1:1 up to date with Listo on a regular basis.** Use Wabba’s “Install from disk" option and select Listo Lite.wabbajack as your modlist.
:::

### 5.) Preparing Steam

- Navigate to Steam -> Right click BG3 -> Properties -> Updates and change “Automatic Updates” to “Only Update This Game When I Launch It.”
- Never launch the game via Steam, always launch it through Mod Organizer, to prevent updates from breaking the list and ending your playthrough. You may need to launch the game from Steam ONCE after a reinstall to make MO2 work.
- You may wish to disable cloud backup of save data, as well.
- **Whichever patch/hotfix you start your playthrough, you should stay on until the end of your playthrough**! Whichever version of Listo you start on you should probably also stay on, unless an update is to solve critical bugs and issues.

:::caution
BG3 should no longer receive Patches (major updates), but Hotfixes (small updates) remain. These updates tend to introduce new bugs and issues to the game that may be difficult to distinguish from issues caused by mods (either with the list, or mods broken by updates). Major updates can also break Script Extender functionality, etc etc. This is why it is highly recommended to disable automated updates.
:::

### 6.) Launching MO2

- Your portable instance of Mod Organizer 2 should be ready as soon as Wabbajack is done. Look for ModOrganizer.exe in the folder where you installed Listonomicon. You can verify that everything is working by ensuring that MO2 has defaulted to the correct profile at the top-left, which should be Listonomicon.
- **Listonomicon: Your total number of active mods should be 704, and the purple seperator at the top should say Listonomicon v6.1.5**
- **Listonomicon Lite: For Listo Lite, your total active mods should be 452, and the seperator should say Listo Lite v6.0.1**
- At the top-right, you should be able to switch the program to launch the Vulkan or dx11 version of the game.
- Hit "run" after selecting the EXE that works best for your system. Always launch the game this way (don't use Steam).
- You can verify Listo's mods are all loaded correctly after install by clicking on the official mod manager and looking at the installed mods tab. Is there a long list with almost everything enabled? Good. Some mods, like overwrites to text, will not show as "Enabled" but will still be working fine.
- **If you install Listo to a different storage device than where you installed BG3 itself**, and the game fails to launch but does not give you an error explaining why it can't work, go to the puzzle pieces icon at the top of MO2 -> Rootbuilder -> Open Rootbuilder -> On the first page that opens, change from “Link” to “Copy” (if your Listo is working ignore this).
- If you want higher audio quality, you can install [Dialogue Voice Quality Restoration](https://www.nexusmods.com/baldursgate3/mods/8224) manually. When prompted to name the install each file in MO2, title them [NoDelete] DVQR Main and [NoDelete] DVQR Audio. Install location shouldn't matter.

### 7.) In-Game Settings

:::caution
You must change **Animation Level of Detail** to **High** in your Visual Settings. Otherwise, any heads added or changed by mods will suffer from visual bugs and animation issues. Any/all other graphics settings can be changed according to your PC specs.
:::

### 8.) Starting A New Campaign

_You should begin a new game on **Custom Difficulty**_ to have the same experience Listonomicon was play tested for. When starting a new campaign, navigate to the right to select Custom Difficulty (it's after Honour Mode). Hit "Restore Default" at the bottom-right in the Custom Difficulty menu, all options should update to Listo's intended settings. The only exception is that **you must manually change the ruleset from Normal to Honour, at the top of Custom Difficulty**. If you do not enable the Honour Ruleset, you will not be able to change it during your campaign. Many intended features of Listo will not work, and you will not have the complete Listo experience.

:::note
Please remember to hit "Custom Difficulty" **and set the ruleset at the top to Honour Mode**. This is the only difficulty setting that cannot be changed mid-campaign and you will not have the intended experience without HM's changes to enemies, mechanics, and game rules.
:::

![Difficulty Settings](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/main/custom%20settings.png)

Per the image above, your difficulty settings should be as follows:

* Ruleset: Honour
* Enemy Aggression, Character Power, Enemy Loadouts, Additional Combat Mechanics: Tactician
* Camp Cost Multiplier: 3. I have never found food to be any kind of limit by the time I reach Wuakeen's Rest. With the changes in Listo's economy, you should consider selling expensive food and alcohol; leaving this multiplier on 3 is to prevent you from selling ALL food and should not be reduced even if looking for an easier game.
* Trader Price Modificer: 4. This heavily influences the buying and sell price of everything. Maxing out the setting is not just about difficulty, it's about fighting against hyperinflation in Faerun's economy caused by all the new loot and magic items in Listo. If adjusting settings for an easier game, do not reduce this further than x3.5 or you will be swimming in so much gold that it completely trivializes the game.

**If you do not enable the Honour Ruleset at the top** you will not be able to equip magic items. This is a built-in feature to punish you for not reading the instructions.

### 9.) FIXING YOUR HOTBAR

When you begin a new campaign, depending on your monitor size/aspect ratio/other variables, you may need to slide all of the red dividers on your hotbar to the left to unlock your full hotbar. Otherwise you will not be able to find re-cast for hex, hunter's mark, metamagic, etc.

![Difficulty Settings](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/refs/heads/main/gOkseBs.gif)

### 10.) Customizing Listonomicon

**No support is offered or guaranteed for anyone who modifies the behavior or contents of Listonomicon.** But we hope that Listo provides a fun, stable foundation to add your favorite mods to :) and please let us know about any additions you make that work, and you think should go into the main product.

### 11.) Optional Mods

There are several optional mods packaged with Listonomicon to enable even more fun, whacky, QoL, random, or challenge features. You can find optional mods in MO2 by typing OPTIONAL_ into the search bar at the bottom-right of your mod list. Hover over the notepad icon to the right of the mod's name to read any notes relevant to enabling that mod, such as other mods that need to be enabled or disabled with it. If enabling/disabling optional mods does not seem to do anything, try closing MO2 and going to [listo install location]/profiles/listonomicon. Delete the ModsCache file and modsettings.lsx. Next time you launch the game it will take a long time to load as it rebuilds your mod list, and then should work as normal.

![Optional Mod Example](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/refs/heads/main/optional%20mods2.png)

### 12.) Optional Difficulty Tweaks

If Listo is too hard, and you'd actually have more fun if it was a little easier, you can make a few changes:
1. In Custom Difficulty settings, reduce the trade price penalty to x3-x3.5. If you reduce it too much, buying prices become too low and the economy really falls apart. You can reduce the long rest camp supply cost to a lower number, whatever you want.
2. Navigate to [Listo Install Location]\mods\zzz_ListonomiconModSettings\SE_CONFIG. Rename CombatExtender.json to something else (like CombatExtender.json.backup) and rename Easy CombatExtender.json to CombatExtender.json. This will cause the game to load an alternate, relaxed CX configuration. The alt file will still be more difficult than vanilla BG3 and include new, tweaked, and changed enemies - but the size of the tweaks is much less dramatic with lower health, AC, attack rolls, and saving throw DC for enemies across the board, bigger increases to allied characters, and many powerful buffs and abilities taken away from bosses.
3. Enable any of the OPTIONAL mods in the "OPTIONAL Easier Mods" section.
4. Go to Listonomicon\mods\zzz_ListonomiconModSettings\SE_CONFIG\Attunement and replace "conmfig.json" with "relaxed config.json" (delete the first, rename the latter as config.json). This will slightly increase the number of magic items you can equip, enabling more powerful builds or at least easier combo crafting.

If Listo is not hard enough,
1. Enable Absolute Wrath (search "OPTIONAL_Absolute Wrath" or look in the optional tweaks section of MO2).
2. If that still isn't hard enough, enable Champions of Faerun.
3. If that still isn't hard enough, enable OPTIONAL_Valkranas Skeletal Challenge.
4. If still that isn't hard enough, navigate to [Listo Install Location]\mods\zzz_ListonomiconModSettings\SE_CONFIG. Rename CombatExtender.json to something else (like CombatExtender.json.backup) and rename Hard CombatExtender.json to CombatExtender.json. This will cause the game to load an alternate, unrelaxed CX configuration. The alt file has more enemy health, more enemy buffs, and more cruel combinations of spells and abilities and features, with intentional enemy nerfs from the normal config removed.
5. DHM and Extra Encounters and Minibosses exist more for interesting challenge content rather than changing the overall challenge of the whole experience (more like dungeons/raids rather than global modifiers). If you love BG3 combat, want more of it, and want to guarantee reaching level 18+ by the end of the game, enable as many extra encounter mods as you like.

### 13.) Multiplayer

(written by Kmnder, edited by Ajax)

1. After installing Listonomicon, if enabling custom or optional mods, the host should generate a fresh ModsCache/ModSettings.lsx and share it with all other players to guarantee BG3 loads the same mods, in the same order. Have **all players start a new game** with the same custom game rules as what is in Listo's install instructions. 
2. Once that is done, have all the players that are going to join finish their dummy characters so they start on the ship (click through character creation, don't bother making any choices, you just need to get to the start of the game). **Save**. The host should make the real character they intend to play.
3. The Host then invites all players. When joining, players will be able to make their real characters they intend to play.
4. **Every time** you want to continue COOP, everyone should load their dummy save. Once everyone has loaded in, the Host invites everyone to the same game.
5. Kmnder: I’ve invited through clicking multiplayer+ and then steam inviting. But it’s worked 100% of the time so far.

### 14.) Cleanup (Optional)

If you are desperate to restore some space on your hard drive after installing Listo, you can go to "Listo Install Location/downloads" and delete everything to cut Listo's size. Note, however, that if you ever want to update Listo that Wabbajack will have to re-download _everything_ again rather than just updated and new mods.

### 15.) Updating Listonomicon

When updating Listo, follow the same install method you are comfortable with (finding the list via the gallery, or downloding an updated .wabba from Nexus). Point Wabbajack at the same install location and overwrite. Any mods that have not changed should not have to be re-downloaded, meaning updating is much faster (unless you deleted your Downloads folder to save hard drive space, then you need to redownload everything). After updating, go to %AppData%\Local\Larian Studios\Baldur's Gate 3 and delete the LevelCache folder. You may wish to right-click the red "Overwrite" text at the bottom of MO2 and hit "Clear Overwrite," especially if an update announced big Combat Extender changes.

![Your Brain](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/refs/heads/main/image-5.png)

### Linux Instructions

Thank you Steven2137!

**Install Wabbajack**

Follow this [guide](https://github.com/Omni-guides/Wabbajack-Modlist-Linux/wiki/Wabbajack-via-Proton) to install Wabbajack via Steam.

**Download Listonomicon**

Start Wabbajack with your Steam shortcut and Download the list. The download location can be anywhere, but the install location should be on the same disk as BG3.

**Configuration of the Mod Organizer 2 prefix**

1. Add the 'ModOrganizer.exe' in your install location of the list as a non steam game to Steam.
2. Choose Proton Experimental or the newest GE-Proton as the compatibility tool.
3. Use Protontricks to install Dotnet 6,7,8,9, vcrun2012 and vcrun2017.
4. Use winecfg to add dwrite.dll as a dll override.

**Configuration of Mod Organizer 2**

Rootbuilder needs to be changed from the link mode to copy mode. To do this, click the puzzle symbol -> root builder -> root builder and check the box next to 'copy'. 

**Launch the game**

Launch the game by choosing BG3 - Vulkan and click on run.
