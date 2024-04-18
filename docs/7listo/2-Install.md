---
layout: default
title: Installation Guide
nav_order: 2
description: Listonomicon
---

# **Installation Guide**
:::info
## **Requirements**
- ~ 20 GB of Space For the Modlist, 150 GB of Space for Baldur's Gate 3
- A Legally Obtained Copy of Baldur's Gate 3 (While a Steam Global Copy is Safest, Any Copy Should Do)
- [Wabbajack](https://www.wabbajack.org/)
- A Nexus Account (Premium Recommended; Drastically Increases Install Speed)
:::

### 1.) Reinstall Baldur's Gate 3

- Nuke BG3. I would recommend uninstalling the game completely, deleting anything left of the install folder, and deleting the contents of %appdata%\Local\Larian Studios. This is to ensure no errant files are leftover from previous playthroughs. Without Mod Organizer 2 (MO2), the BG3 mod manager and modding process makes edits to your install folder and adds files in places that won’t be caught in an uninstall. Nuking everything improves the odds that Listo works as expected.
- Also ensure that your new Baldur's Gate 3 is in a steam folder on the base of your drive (IE: C:/Steam/.../BaldursGate3)

### 2.) Manually Downloading the List

- You can manually grab a copy of Listonomicon [here](https://github.com/Listonomicon-Team/Listonomicon) (under “Releases” on the right side) and use Wabba’s “Install from disk,” or you can search the unofficial gallery for Listonomicon and download that way.

### 3.) Downloading the list from the Gallery

- If you do not want to download manually, install Listonomicon through Wabbajack as normal. The download icon will be replaced with a play icon, on the next page you can choose an install location. Make sure to install the list to somewhere that is not in a protected folder (such as Downloads) and not inside your Baldur’s Gate 3 install. For example, I install to H:\Games\Listonomicon, with mods downloaded to H:\Games\Listonomicon\downloads. If you want to install manually from a Github distro, navigate back to the landing page of Wabbajack and choose “Install From Disk.” 

### 4.) Download the [Script Extender](https://github.com/Norbyte/bg3se/releases) and install to [game install path]\Baldurs Gate 3\bin.

### 5.) Finalizing Mod List Settings

- Once the modlist download has completed, navigate to where you downloaded your Listonomicon (e.g. H:\Listonomicon\downloads) and find “zzz_ListonomiconModSettings.” Open the zip file and copy/paste its contents to %AppData%\Local\Larian Studios\Baldur's Gate 3\Script Extender (create the Script Extender folder if it does not exist).

### 6.) Preparing Steam

- Navigate to Steam -> Right click BG3 -> Properties -> Updates and change “Automatic Updates” to “Only Update This Game When I Launch It.”
- Never launch the game via Steam, always launch it through Mod Organizer, to prevent updates from breaking the list and ending your playthrough.
- You may wish to disable cloud backup of save data, as well. Whichever patch/hotfix you start your playthrough, you should stay on until the end of your playthrough!

:::caution
BG3 is still receiving Patches (major updates) and Hotfixes (small updates). These updates tend to introduce new bugs and issues to the game that may be difficult to distinguish from issues caused by mods (either with the list, or mods broken by updates). Major updates can also break Script Extender functionality, etc etc.
:::

### 7.) Launching MO2

- Your portable instance of Mod Organizer 2 should be ready as soon as Wabbajack is done. However, you can verify that everything is working by ensuring that it has defaulted to the correct profile at the top-left, which should be Listonomicon.
- Your total number of active mods should be 245. The colored separator at the top of your mod list should say Listonomicon v#.
- At the top-right, you should be able to switch the program to launch to the BG3 Mod Manager (BG3MM).

### 8.) Deploying Mod Configuration Files

- You will need to navigate to wherever you instructed Wabbajack to download your mod files (such as H:\Games\Listonomicon\downloads) and find “zzz_ListonomiconModSettings.7z” (should be at the bottom). Inside should be all of the configuration files you need for various Listonomicon mods.
- Navigate to “%AppData%\Local\Larian Studios\Baldur's Gate 3\Script Extender” and place the contents of the zip file here. If you have already run the game, mod settings may have already been generated - hit “Yes” to overwrite anything here. If you cannot find the mod settings file in your MO2 downloads, you can download them manually.

### 9.) Verifying in BG3MM

- You may be able to launch the game and begin playing without further steps being necessary. However, if that is not the case…
- First, navigate to the top right of MO2 where you select the exe to launch. In the drop down, select Baldur’s Gate 3 Mod Manager (BG3MM). There should not be any pop-ups or errors in BG3MM stating missing files. - There should be a large number of mods active on the left side, and the only items on the right side should be a module for dice and a module for Honour Mode. 
- If this is not correct, and instead you have a whole whack ton of mods on the right side of BG3MM, then you need to navigate to wherever you instructed Wabbajack to download your mod files (such as H:\Games\Listonomicon\downloads) and find “zzz_Listonomicon_BG3MM_json.zip.” Inside is a .json file. Place this somewhere you can find it easily. In BG3MM, you will want to import this .json as a mod load order.
- Navigate to the “Export” section of the top row in BG3MM and click “Export Order to Game.” Then close BG3MM. - In MO2, switch the top-right drop down back to your choice of BG3 exe’s (dx11 or vulkan). You should be able to launch the game from MO2 without error.
- If you cannot find zzz_Listonomicon_BG3MM_json.zip in your MO2 downloads, you can download it manually.

### 10.) Playing the List

- Launch the game via MO2. Using the drop-down at the top right, switch the program to be launched to either the Vulkan or DX version of the game, depending on which has better performance/compatibility with your system. Everything else should work like normal! Always launch the game this way to prevent Steam from forcing updates.

### 11.) In Game Settings

:::caution
You must change Animation Level of Detail to High in your Visual Settings. Otherwise, any heads added or changed by mods will suffer from visual bugs and animation issues.
:::

- You should begin a new game on Tactician Difficulty to have the same experience Listonomicon was play tested for. Mods have already enabled many Honour Mode mechanics, without restricting you to a single save. You may wish to customize your experience to increase the amount of food required to Long Rest among other tweaks for an additional challenge, if you feel exceptionally brave!

### 12.) [Better Hotbar 2](https://www.nexusmods.com/baldursgate3/mods/2417?tab=description) can sometimes suffer from hiding the final panel! [Follow the author’s pinned instruction at the top of the comments section](https://www.nexusmods.com/baldursgate3/mods/2417?tab=posts) to ensure that you have access to all of your hotbar panels, otherwise temporary effects (such as flying after casting spells for storm sorcerers) may be hidden from you. You should only need to do this once, unless your hotbar is changed due to a polymorph or similar effect.



