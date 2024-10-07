---
layout: default
title: Installation Guide
nav_order: 2
description: Listonomicon
---

# **Installation Guide**
:::info
## **Requirements**
- ~ 35 GB of space for the modlist
- A legally obtained copy of Baldur's Gate 3 (while a Steam global copy is safest, any copy should do), **installed and launched vanilla from Steam at least once**
- [Wabbajack](https://www.wabbajack.org/)
- A Nexus Account (Premium recommended; drastically increases install speed)
:::

![Listonom](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/main/bol.png)

### 1.) Reinstall Baldur's Gate 3

- **Nuke BG3** (optional but _highly recommended_): Uninstall the game _completely_, delete anything left of the install folder (e.g. D:/SteamLibrary/steamapps/common/Baldurs Gate 3), and delete the folder at %appdata%\Local\Larian Studios. This is to ensure no errant files are leftover from previous playthroughs and is especially important for preventing data mismatches that will block multiplayer. Nuking everything improves the odds that Listo works as expected by providing a blank slate to build up from. Otherwise some files like an unwanted modsettings.lsx or gustavdev could interfere with Listo. This is especially true now with Mod.io integration and Larian's official mod manager services.
- Also ensure that your new Baldur's Gate 3 is in a steam folder on the base of your drive (IE: C:/Steam/.../BaldursGate3) if possible, Wabbajack/MO2 might struggle if it is in a default Steam location like C:/program files(86)/Steam/.../BG3.
- Remove the BG3 Script Extender if you installed it manually.
- Launch the game (vanilla from Steam) once to regenerate all of the folders/paths that MO2 and BG3MM need.
- You may need to click on the new official mod manager in the main menu and accept Larian's ToS, then enable/disable a random mod. Try this step if MO2 fails to send mods to your game.

### 2.) Preparing Your Listonomicon Folder

Create a folder named Listonomicon somewhere on your PC, the closer to the root of the drive the better. For example, D:/Games/Listonomicon, or just D:/Listonomicon. When we discuss "Downloads" or "Mods" folders in the future, we mean [the drive with this folder]/Listonomicon/Downloads or [the drive with this folder]/Listonomicon/Mods.

### 3.) Downloading the list from the Gallery

If you do not want to download manually, install Listonomicon through Wabbajack as normal. Launch Wabbajack and choose "Download from gallery." At the top, click "Show Unofficial Lists" and change the game filter to Baldur's Gate 3. Hit the download icon at the bottom right, which will turn into a play button. Click the play button. On the next screen, set the Modlist Installation Location to the Listonomicon folder you made in Step 2. "Resource Download Location" should automatically fill with "[Listo folder location]\downloads."

:::note
But wait, what if I don't want to download all 444+ Listonomicon mods? I want the gameplay changes, but I'm never going to use every new cosmetic option! In that case, you can manually download Listonomicon LITE.wabbajack. Manual install instructions are Step #4. **The "lite" version of Listo will be periodically updated to match major Listonomicon revisions, but will not be kept 1:1 up to date with Listo on a regular basis.**
:::

### 4.) Manually Downloading the List - OPTIONAL

You can grab a copy of Listonomicon.wabbajack [here](https://www.nexusmods.com/baldursgate3/mods/8976?tab=description) and use Wabba’s “Install from disk" if you prefer a manual install or if you want to install an older version of the list for some reason. Otherwise, ignore step 3 and follow step 4's install instructions instead.

### 5.) Preparing Steam

- Navigate to Steam -> Right click BG3 -> Properties -> Updates and change “Automatic Updates” to “Only Update This Game When I Launch It.”
- Never launch the game via Steam, always launch it through Mod Organizer, to prevent updates from breaking the list and ending your playthrough. You may need to launch the game from Steam ONCE after a reinstall to make BG3MM work.
- You may wish to disable cloud backup of save data, as well.
- **Whichever patch/hotfix you start your playthrough, you should stay on until the end of your playthrough**!

:::caution
BG3 is still receiving Patches (major updates) and Hotfixes (small updates). These updates tend to introduce new bugs and issues to the game that may be difficult to distinguish from issues caused by mods (either with the list, or mods broken by updates). Major updates can also break Script Extender functionality, etc etc. This is why it is highly, highly recommended to disable automated updates.
:::

### 6.) Launching MO2

- Your portable instance of Mod Organizer 2 should be ready as soon as Wabbajack is done. However, you can verify that everything is working by ensuring that it has defaulted to the correct profile at the top-left, which should be Listonomicon.
- **Your total number of active mods should be 428. The purple separator at the top of your mod list should say Listonomicon v2.0**
- At the top-right, you should be able to switch the program to launch the Vulkan or dx11 version of the game.
- Hit "run" after selecting the EXE that works best for your system. Always launch the game this way (don't use Steam).
- You can verify Listo's mods are all loaded correctly after install by clicking on the official mod manager and looking at the installed mods tab. Is there a long list with everything enabled? Good.

### 7.) In Game Settings

:::caution
You must change Animation Level of Detail to High in your Visual Settings. Otherwise, any heads added or changed by mods will suffer from visual bugs and animation issues. Any/all other graphics settings can be changed according to your PC specs.
:::

You should begin a new game on **Custom Difficulty** to have the same experience Listonomicon was play tested for. Listo's custom difficulty settings mod has not been updated to match Larian's new custom difficulty menu, so you will need to manually select some options.

![Difficulty Settings](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/main/custom%20settings.png)

Per the image above, set your difficulty settings as follows:

- Ruleset: Honour
- Enemy Aggression, Character Power, Enemy Loadouts, Additional Combat Mechanics: Tactician
- Camp Cost Multiplier: 3
- Trader Price Modificer: 4
- Everything else should default to the right values.

### 8.) Customizing Listonomicon

**No support is offered or guaranteed for anyone who modifies the behavior or contents of Listonomicon.** It is already difficult to keep up with new mods daily on the Nexus; updates and changes to mods in the list; changes in the script extender; new and changed features in the community compatibility frameworks; as well as game patches and hotfixes; vanilla game bugs; and the consequences of (seemingly) minor mod setting tweaks on gameplay. Further modify the list at your own peril. We hope that you are able to customize a fun, stable, great experience tailored to your specific tastes using Listonomicon as a stepping stone - but will not promise troubleshooting or technical support.

### 9.) Optional Mods

There are several optional mods packaged with Listonomicon to enable even more fun, whacky, QoL, random, or challenge features. [Please read the comments on the Optional Mods tab of this excel](https://docs.google.com/spreadsheets/d/1_dZdM_16xeE4yIqKYyk7HMjLI3WW7PhfpdlrKHM4vyg/edit?usp=sharing) for a description/overview of optional mods, if you wish to. No official support is offered for adding any other mods to Listonomicon. You can find optional mods in MO2 by typing OPTIONAL into the search bar at the bottom-right of your mod list. Hover over the notepad icon to the right of the mod's name to read any notes relevant to enabling that mod, such as other mods that need to be enabled or disabled with it.

![Optional Mod Example](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/refs/heads/main/optional%20mods.png)
