---
layout: default
title: Installation Guide
nav_order: 2
description: Listonomicon
---

# **Installation Guide**
:::info
## **Requirements**
- ~ 38 GB of space for the modlist
- A legally obtained copy of Baldur's Gate 3 (while a Steam global copy is safest, any copy should do), **installed and launched vanilla from Steam at least once**
- [Wabbajack](https://www.wabbajack.org/)
- A Nexus Account (Premium recommended; drastically increases install speed)
:::
 
#### Installing Microsoft Visual C++ and .NET
This is necessary for players who want to customize Listo (including enabling optional mods or changing UI)
1. Install [Visual C++ x64](https://aka.ms/vs/17/release/vc_redist.x64.exe).
2. Install [.NET Runtime 8.X.X Desktop x64](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).
3. Install [.NET 6.0 Runtime Desktop x64](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-6.0.30-windows-x64-installer). 

![Listonom](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/main/bol.png)

### 0.) Basics

At no point in installing Listo do you need to manually download Mod Organizer 2. MO2 will come pre-packed in Listo's download from Wabbajack. There will be a Mod Organizer 2.exe in the folder where Listo is installed used to launch a portable instance just for Listo. You do not need the Baldur's Gate 3 Mod Manager, you do not need to download the BG3 Script Extender, and you do not need Vortex.

### 1.) Reinstall Baldur's Gate 3

- **Nuke BG3** (optional but _highly recommended_): Uninstall the game _completely_, delete anything left of the install folder (e.g. D:/SteamLibrary/steamapps/common/Baldurs Gate 3), and delete the folder at %localappdata%\Larian Studios. This is to ensure no errant files are leftover from previous playthroughs and is especially important for preventing data mismatches that will block multiplayer. Nuking everything improves the odds that Listo works as expected by providing a blank slate to build up from. Otherwise some files like an unwanted modsettings.lsx or gustavdev could interfere with Listo. This is especially true now with Mod.io integration and Larian's official mod manager services.
- Also ensure that your new Baldur's Gate 3 is in a steam folder on the base of your drive (IE: C:/Steam/.../BaldursGate3) if possible, Wabbajack/MO2 might struggle if it is in a default Steam location like C:/program files(86)/Steam/.../BG3.
- Remove the BG3 Script Extender if you installed it manually.
- Launch the game (vanilla from Steam) once to regenerate all of the folders/paths that MO2 and BG3MM need.

### 2.) Preparing Your Listonomicon Folder

Create a folder named Listonomicon somewhere on your PC, the closer to the root of the drive the better. For example, D:/Games/Listonomicon, or just D:/Listonomicon. When we discuss "Downloads" or "Mods" folders in the future, we mean [the drive with this folder]/Listonomicon/Downloads or [the drive with this folder]/Listonomicon/Mods. This folder is your Listo Install Location.

### 3.) Downloading the List

You can get a copy of Listonomicon.wabbajack from Nexus if you want/need to play an older version of the list for any reason. However, the correct method is to open Wabbajack and browse the mod gallery. Filter the list at the top to Baldur's Gate 3, look for Listonomicon, and hit the download icon. This will grab a copy of the .wabbajack file, and the download icon will become a play button. Click the play button. On the next screen, set the Modlist Installation Location to the Listonomicon folder you made in Step 2. "Resource Download Location" should automatically fill with "[Listo folder location]\downloads."

:::note
"But wait, what if I don't want to download all 550+ Listonomicon mods? I want the gameplay changes, but I'm never going to use every new cosmetic option!" In that case, you can manually download Listonomicon LITE.wabbajack from Nexus. **The "lite" version of Listo will be periodically updated to match major Listonomicon revisions, but will not be kept 1:1 up to date with Listo on a regular basis.** Use Wabba’s “Install from disk" option and select Listo Lite.wabbajack as your modlist.
:::

### 4.) Preparing Steam

- Navigate to Steam -> Right click BG3 -> Properties -> Updates and change “Automatic Updates” to “Only Update This Game When I Launch It.”
- Never launch the game via Steam, always launch it through Mod Organizer, to prevent updates from breaking the list and ending your playthrough. You may need to launch the game from Steam ONCE after a reinstall to make MO2 work.
- You may wish to disable cloud backup of save data, as well.
- **Whichever patch/hotfix you start your playthrough, you should stay on until the end of your playthrough**!

:::caution
BG3 is still receiving Patches (major updates) and Hotfixes (small updates). These updates tend to introduce new bugs and issues to the game that may be difficult to distinguish from issues caused by mods (either with the list, or mods broken by updates). Major updates can also break Script Extender functionality, etc etc. This is why it is highly, highly recommended to disable automated updates.
:::

### 5.) Launching MO2

- Your portable instance of Mod Organizer 2 should be ready as soon as Wabbajack is done. Look for ModOrganizer.exe in the folder where you installed Listonomicon. You can verify that everything is working by ensuring that MO2 has defaulted to the correct profile at the top-left, which should be Listonomicon.
- **Your total number of active mods should be 535. The purple separator at the top of your mod list should say Listonomicon v2.8**
- At the top-right, you should be able to switch the program to launch the Vulkan or dx11 version of the game.
- Hit "run" after selecting the EXE that works best for your system. Always launch the game this way (don't use Steam).
- You can verify Listo's mods are all loaded correctly after install by clicking on the official mod manager and looking at the installed mods tab. Is there a long list with almost everything enabled? Good.

### 6.) In-Game Settings

:::caution
You must change Animation Level of Detail to High in your Visual Settings. Otherwise, any heads added or changed by mods will suffer from visual bugs and animation issues. Any/all other graphics settings can be changed according to your PC specs.
:::

You should begin a new game on **Custom Difficulty** to have the same experience Listonomicon was play tested for. Hit "Restore Default" in the Custom Difficulty menu, all options should update to Listo's intended settings. The only exception is that you must manually change the ruleset from Normal to Honour, at the top of Custom Difficulty.

![Difficulty Settings](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/main/custom%20settings.png)

Per the image above, your difficulty settings should be as follows:

- Ruleset: Honour
- Enemy Aggression, Character Power, Enemy Loadouts, Additional Combat Mechanics: Tactician
- Camp Cost Multiplier: 3
- Trader Price Modificer: 4

### 7.) Customizing Listonomicon

**No support is offered or guaranteed for anyone who modifies the behavior or contents of Listonomicon.** It is already difficult to keep up with new mods daily on the Nexus; updates and changes to mods in the list; changes in the script extender; new and changed features in the community compatibility frameworks; as well as game patches and hotfixes; vanilla game bugs; and the consequences of (seemingly) minor mod setting tweaks on gameplay. Further modify the list at your own peril. We hope that you are able to customize a fun, stable, great experience tailored to your specific tastes using Listonomicon as a stepping stone - but will not promise troubleshooting or technical support. If adding mods to MO2 (or enabling optional mods from Listo) appears not to work in game, try closing MO2 and going to [listo install location]/profiles/listonomicon and delete the ModsCache file. Next time you launch the game it will take a long time to load as it rebuilds your mod list, and then should work as normal.

### 8.) Optional Mods and Difficulty Tweaks

There are several optional mods packaged with Listonomicon to enable even more fun, whacky, QoL, random, or challenge features. [Please read the comments on the Optional Mods tab of this excel](https://docs.google.com/spreadsheets/d/1_dZdM_16xeE4yIqKYyk7HMjLI3WW7PhfpdlrKHM4vyg/edit?usp=sharing) for a description/overview of optional mods, if you wish to. No official support is offered for adding any other mods to Listonomicon. You can find optional mods in MO2 by typing OPTIONAL into the search bar at the bottom-right of your mod list. Hover over the notepad icon to the right of the mod's name to read any notes relevant to enabling that mod, such as other mods that need to be enabled or disabled with it. If enabling/disabling optional mods does not seem to do anything, try closing MO2 and going to [listo install location]/profiles/listonomicon. Delete the ModsCache file and modsettings.lsx. Next time you launch the game it will take a long time to load as it rebuilds your mod list, and then should work as normal.

![Optional Mod Example](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/refs/heads/main/optional%20mods2.png)

If Listo is not hard enough, enable Absolute Wrath. If that still isn't hard enough, enable OPTIONAL_Listo Hard Mode.

If you want more fights, enable More Trash Monsters. If that still isn't enough fights, enable Deadlier Honour Mode Bosses and Encounters. Note DHM is extreme mode.

If Listo is too hard, and you'd actually have more fun if it was a little easier, you can make two changes.
1. In Custom Difficulty settings, reduce the trade price penalty to 3x and reduce the long rest camp supply cost to a lower number. If you reduce the cost multiplier to lower than 3, earning money from selling loot becomes too fast/powerful.
2. Navigate to [Listo Install Location]\mods\zzz_ListonomiconModSettings\SE_CONFIG. Rename CombatExtender.json to something else (like CombatExtender.json.backup) and rename Easy CombatExtender.json to CombatExtender.json. This will cause the game to load an alternate CX configuration. The alt file will still be more difficult than vanilla BG3 and include new, tweaked, and changed enemies - but the size of the tweaks is much less dramatic with lower health, AC, attack rolls, and saving throw DC for enemies.

### 9.) Multiplayer

(written by Kmnder, edited by Ajax)

1. After installing Listonomicon, if enabling custom or optional mods, the host should generate a fresh ModsCache/ModSettings.lsx and share it with all other players to guarantee BG3 loads the same mods, in the same order. Have **all players start a new game** ([with the same custom game rules as what is in Listo's install instructions](https://www.modlists.net/docs/7listo/Install#7-in-game-settings)). 
2. Once that is done, have all the players that are going to join finish their dummy characters so they start on the ship (click through character creation, don't bother making any choices, you just need to get to the start of the game). **Save**. The host should make the real character they intend to play.
3. The Host then invites all players. When joining, players will be able to make their real characters they intend to play.
4. **Every time** you want to continue COOP, everyone should load their dummy save. Once everyone has loaded in, the Host invites everyone to the same game.
5. Kmnder: I’ve invited through clicking multiplayer+ and then steam inviting. But it’s worked 100% of the time so far.
