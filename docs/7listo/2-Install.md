---
layout: default
title: Installation Guide
nav_order: 2
description: Listonomicon
---

# **Installation Guide**
:::info
## **Requirements**
- ~ 31 GB of Space For the Modlist
- A Legally Obtained Copy of Baldur's Gate 3 (While a Steam Global Copy is Safest, Any Copy Should Do), installed and launched vanilla from Steam at least once
- [Wabbajack](https://www.wabbajack.org/)
- A Nexus Account (Premium Recommended; Drastically Increases Install Speed)
:::

![Listonom](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/main/bol.png)

### 1.) Reinstall Baldur's Gate 3

- **Nuke BG3** (optional but highly recommended): Uninstall the game completely, delete anything left of the install folder, and delete the contents of %appdata%\Local\Larian Studios. This is to ensure no errant files are leftover from previous playthroughs and is especially important for preventing data mismatches preventing multiplayer. Nuking everything improves the odds that Listo works as expected by providing a blank slate to build up from. Otherwise some files like an unwanted modsettings.lsx or gustavdev could interfere with Listo.
- Also ensure that your new Baldur's Gate 3 is in a steam folder on the base of your drive (IE: C:/Steam/.../BaldursGate3), Wabbajack/MO2 might struggle if it is in a default Steam location like C:/program files(86)/Steam/.../BG3.

### 2.) Manually Downloading the List

You can grab a copy of Listonomicon.wabbajack [here](https://www.nexusmods.com/baldursgate3/mods/8976?tab=description) and use Wabba’s “Install from disk,” or you can search the unofficial gallery for Listonomicon and download that way.

### 3.) Downloading the list from the Gallery

If you do not want to download manually, install Listonomicon through Wabbajack as normal. The download icon will be replaced with a play icon, on the next page you can choose an install location. Make sure to install the list to somewhere that is not in a protected folder (such as Downloads, Documents, etc) and not inside your Baldur’s Gate 3 install. For example, install to H:\Games\Listonomicon, with mods downloaded to H:\Games\Listonomicon\downloads.

:::note
But wait, what if I don't want to download all 390+ Listonomicon mods? I want the gameplay changes, but I'm never going to use every new cosmetic option! In that case, you can manually download Listonomicon LITE.wabbajack from the [Nexus Page](https://www.nexusmods.com/baldursgate3/mods/8976?tab=description). Refer back to step 2 for manual installation instructions.
When you launch BG3MM, you will get an error saying hundreds of mods are missing. Hit the option to remove missing mods and clear errors, then save and export the list to game. **The "lite" version of Listo will be periodically updated to match major Listonomicon revisions, but will not be kept 1:1 up to date with Listo on a regular basis.**
:::

### 4.) Script Extender

Download the [Script Extender](https://github.com/Norbyte/bg3se/releases) and install to [game install path]\Baldurs Gate 3\bin. You can also install Script Extender by launching BG3MM (from Mod Organizer 2) and going to tools -> download Script Extender. Some users can use both options, some users only work when using one or the other, nobody knows why.

### 5.) Finalizing Mod List Settings

Once the modlist download has completed, navigate to where you downloaded your Listonomicon (e.g. H:\Listonomicon\downloads) and find “zzz_Listonomicon Mod Settings.” Open the zip file and copy/paste its contents to %AppData%\Local\Larian Studios\Baldur's Gate 3\Script Extender (create the Script Extender folder if it does not exist).

:::info
Do not forget to repeat this step when updating Listonomicon! For maximum safety, delete the contents of %AppData%\Local\Larian Studios\Baldur's Gate 3\Script Extender and then repeat step 5 when updating the list, to ensure that any old/unneeded mod settings are gone and any new/updated mod settings are added correctly.
:::

### 6.) Preparing Steam

- Navigate to Steam -> Right click BG3 -> Properties -> Updates and change “Automatic Updates” to “Only Update This Game When I Launch It.”
- Never launch the game via Steam, always launch it through Mod Organizer, to prevent updates from breaking the list and ending your playthrough. You may need to launch the game from Steam ONCE after a reinstall to make BG3MM work.
- You may wish to disable cloud backup of save data, as well. Whichever patch/hotfix you start your playthrough, you should stay on until the end of your playthrough!

:::caution
BG3 is still receiving Patches (major updates) and Hotfixes (small updates). These updates tend to introduce new bugs and issues to the game that may be difficult to distinguish from issues caused by mods (either with the list, or mods broken by updates). Major updates can also break Script Extender functionality, etc etc. This is why it is highly, highly recommended to disable automated updates.
:::

### 7.) Launching MO2

- Your portable instance of Mod Organizer 2 should be ready as soon as Wabbajack is done. However, you can verify that everything is working by ensuring that it has defaulted to the correct profile at the top-left, which should be Listonomicon.
- **Your total number of active mods should be 390. The colored separator at the top of your mod list should say Listonomicon v1.0.**
- At the top-right, you should be able to switch the program to launch to the BG3 Mod Manager (BG3MM).

### 8.) Deploying Mod Configuration Files

- You will need to navigate to wherever you instructed Wabbajack to download your mod files (such as H:\Games\Listonomicon\downloads) and find “zzz_Listonomicon Mod Settings.zip” (should be at the bottom). Inside should be all of the configuration files you need for various Listonomicon mods. We handled this in step 5.
- Navigate to “%AppData%\Local\Larian Studios\Baldur's Gate 3\Script Extender” and place the contents of the zip file here. If you have already run the game, mod settings may have already been generated - hit “Yes” to overwrite anything here. If you cannot find the mod settings file in your MO2 downloads, you can download them manually.

### 9.) Verifying in BG3MM

- You may be able to launch the game and begin playing without further steps being necessary. However, if that is not the case…
- First, navigate to the top right of MO2 where you select the exe to launch. In the drop down, select Baldur’s Gate 3 Mod Manager (BG3MM). There should not be any pop-ups or errors in BG3MM stating missing files. - There should be a large number of mods active on the left side, and the only items on the right side should be a module for dice and a module for Honour Mode. 
- If this is not correct, and instead you have a whole whack ton of mods on the right side of BG3MM, then you need to navigate to wherever you instructed Wabbajack to download your mod files (such as H:\Games\Listonomicon\downloads) and find “zzz_Listo Mod Order for BG3MM.zip.” Inside is a .json file. Place this somewhere you can find it easily. In BG3MM, you will want to import this .json as a mod load order by clicking file -> import order from file (top left).
- Navigate to the “Export” section of the top row in BG3MM and click “Export Order to Game.” Then close BG3MM. - In MO2, switch the top-right drop down back to your choice of BG3 exe’s (dx11 or vulkan). You should be able to launch the game from MO2 without error.

### 10.) Playing the List

Launch the game via MO2. Using the drop-down at the top right, switch the program to be launched to either the Vulkan or DX version of the game, depending on which has better performance/compatibility with your system. Everything else should work like normal! Always launch the game this way to prevent Steam from forcing updates. Do not launch the game via Steam or BG3MM.

### 11.) In Game Settings

:::caution
You must change Animation Level of Detail to High in your Visual Settings. Otherwise, any heads added or changed by mods will suffer from visual bugs and animation issues. Any/all other graphics settings can be changed according to your PC specs.
:::

You should begin a new game on Custom Difficulty to have the same experience Listonomicon was play tested for. [Custom mode has been modified](https://www.nexusmods.com/baldursgate3/mods/9310) to replace the default settings with the Listo-intended experience.

### 12.) [Better Hotbar 2](https://www.nexusmods.com/baldursgate3/mods/2417?tab=description) 

- Better Hotbar 2 can sometimes suffer from hiding the final panel!
- [Follow the author’s pinned instruction at the top of the comments section](https://www.nexusmods.com/baldursgate3/mods/2417?tab=posts) to ensure that you have access to all of your hotbar panels, otherwise temporary effects (such as flying after casting spells for storm sorcerers) may be hidden from you. You should only need to do this once, unless your hotbar is changed due to a polymorph or similar effect.

### 13.) Customizing Listonomicon
**No support is offered or guaranteed for anyone who modifies the behavior or contents of Listonomicon.** It is already difficult to keep up with new mods daily on the Nexus; updates and changes to mods in the list; changes in the script extender; new and changed features in the community compatibility frameworks; as well as game patches and hotfixes; vanilla game bugs; and the consequences of (seemingly) minor mod setting tweaks on gameplay. Further modify the list at your own peril. We hope that you are able to customize a fun, stable, great experience tailored to your specific tastes using Listonomicon as a stepping stone - but will not promise troubleshooting or technical support.

### 14.) 16:9 vs 21:9 UI

There is an Ultrawide UI section in MO2. If you have a normal 16x9 resolution monitor (e.g. 1920x1080 or 2560x1440), make sure the two ultrawide UI mods are DISABLED in this section, and all UI mods are ENABLED in the User Interface section of MO2. If you have an ultrawide 21x9 monitor (e.g. 3440x1440), make sure the two ultrawide UI mods are ENABLED, and disable the top 2 mods in the User Interface section (i.e. disable the 16x9 version of Better Hotbar and Party Panel).

### 15.) Optional Mods

There are several optional mods packaged with Listonomicon to enable even more QoL or challenge features. [Please read the comments on the Optional Mods tab of this excel](https://docs.google.com/spreadsheets/d/1_dZdM_16xeE4yIqKYyk7HMjLI3WW7PhfpdlrKHM4vyg/edit?usp=sharing) for instructions on enabling these mods, if you wish to. No official support is offered for adding any other mods to Listonomicon.
