---
layout: default
title: Installation Guide
nav_order: 2
description: Listonomicon
---

# **Installation Guide**
:::info
## **Requirements**
- ~ 33 GB of Space For the Modlist
- A Legally Obtained Copy of Baldur's Gate 3 (While a Steam Global Copy is Safest, Any Copy Should Do), installed and launched vanilla from Steam at least once
- [Wabbajack](https://www.wabbajack.org/)
- A Nexus Account (Premium recommended; drastically increases install speed)
:::

![Listonom](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/main/bol.png)

### 1.) Reinstall Baldur's Gate 3

- **Nuke BG3** (optional but highly recommended): Uninstall the game _completely_, delete anything left of the install folder (e.g. d:/SteamLibrary/steamapps/common/Baldurs Gate 3), and delete the folder at %appdata%\Local\Larian Studios. This is to ensure no errant files are leftover from previous playthroughs and is especially important for preventing data mismatches that will block multiplayer. Nuking everything improves the odds that Listo works as expected by providing a blank slate to build up from. Otherwise some files like an unwanted modsettings.lsx or gustavdev could interfere with Listo. This is especially true now with Mod.io integration and Larian's official mod manager services.
- Also ensure that your new Baldur's Gate 3 is in a steam folder on the base of your drive (IE: C:/Steam/.../BaldursGate3), Wabbajack/MO2 might struggle if it is in a default Steam location like C:/program files(86)/Steam/.../BG3.
- Launch the game (vanilla) once to regenerate all of the folders/paths that MO2 and BG3MM need.
- You may need to click on the new official mod manager in the main menu and accept Larian's ToS, then enable/disable a random mod. If BG3MM is not able to send a working mod settings.lsx (mod load order) to your game, this work around may force BG3 to generate a working mod settings.lsx that BG3MM can then replace.

### 2.) Preparing Your Listonomicon Folder

Create a folder named Listonomicon somewhere on your PC, the closer to the root of the drive the better. For example, D:/Games/Listonomicon, or just D:/Listonomicon. When we discuss "Downloads" or "Mods" folders in the future, we mean [the drive with this folder]/Listonomicon/Downloads or [the drive with this folder]/Listonomicon/Mods.

### 3.) Manually Downloading the List - OPTIONAL

You can grab a copy of Listonomicon.wabbajack [here](https://www.nexusmods.com/baldursgate3/mods/8976?tab=description) and use Wabba’s “Install from disk" if you prefer a manual install or if you want to install an older version of the list for some reason. Otherwise, ignore step 3 and follow step 4's install instructions instead. Manual installation is needed for the "Lite" (no cosmetic mods) version of Listo.

### 4.) Downloading the list from the Gallery

If you do not want to download manually, install Listonomicon through Wabbajack as normal. Launch Wabbajack and choose "Download from gallery." At the top, click "Show Unofficial Lists" and change the game filter to Baldur's Gate 3. At the time of writing, Listonomicon will be the only search result. Hit the download icon at the bottom right, which will turn into a play button. Click the play button. On the next screen, set the Modlist Installation Location to the Listonomicon folder you made in Step 2. "Resource Download Location" should automatically fill with "[Listo folder location]\downloads."

:::note
But wait, what if I don't want to download all 413+ Listonomicon mods? I want the gameplay changes, but I'm never going to use every new cosmetic option! In that case, you can manually download Listonomicon LITE.wabbajack from the [Nexus Page](https://www.nexusmods.com/baldursgate3/mods/8976?tab=description). Refer back to step 3 for manual installation instructions.
When you launch BG3MM, you will get an error saying hundreds of mods are missing. Hit the option to remove missing mods and clear errors, then save and export the list to game. **The "lite" version of Listo will be periodically updated to match major Listonomicon revisions, but will not be kept 1:1 up to date with Listo on a regular basis. Listo Lite is not updated for Patch 7.**
:::

### 5.) Preparing the BG3 Mod Manager and Script Extender

- Inside your Listonomicon folder, create a folder named "BG3ModManager_Latest."
- Download the latest [Baldur's Gate 3 Mod Manager by LaughingLeader](https://github.com/LaughingLeader/BG3ModManager/releases).
- Extract the contents of the BG3MM to the Listonomicon/BG3ModManager_Latest folder.
- In Listonomicon/BG3ModManager_Latest, create a folder named "Orders."
- In your Listonomicon/Mods, you can find zzz_Listo Mod Order. The .json file inside "Listo Mod Order for BG3MM.json" can be cut/paste to the nwe orders folder at Listonomicon/BG3ModManager_Latest/Orders. If you cannot find zzz_Listo Mod Order, you can always manually download "[zzz_Listo Mod Order for BG3MM](https://www.nexusmods.com/baldursgate3/mods/8976?tab=files)." (You can also download Listo's mod settings from this page)
- After installing the list (Step 3 or 4), when you launch Mod Organizer 2, you should be able to launch BG3MM as one of the options at the top-right. If not, in the drop down click "Manage" and set the BG3MM exe's location to where the EXE is located in Listonomicon/BG3ModManager_Latest.
- In BG3MM, along the top bar the second option is "Mod Order." In the drop down, select "Listo Mod Order for BG3MM." Along the same row, hit "Export Order to Game."

![Listonom](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/main/BG3MM%20example.png)

- Next we need to prepare the BG3 Script Extender. You have two options:
- Manual: Download the [Script Extender](https://github.com/Norbyte/bg3se/releases) and install to [game install path]\Baldurs Gate 3\bin.
- Semi-Automatic: You can launch the Baldur's Gate 3 Mod Manager through Mod Organizer 2, and under "Tools" select download and extract the script extender.
- For some users, both methods work. For other users, only one method or the other seems to work. Nobody knows why.

### 6.) Finalizing Mod List Settings

Once the modlist download has completed, navigate to where you downloaded your Listonomicon (e.g. H:\Games\Listonomicon) and open the "Mods" folder just like we did for the BG3MM mod order. Find “zzz_Listo Mod Settings.” Copy/paste the contents of the folder to %AppData%\Local\Larian Studios\Baldur's Gate 3\Script Extender (create the Script Extender folder if it does not exist).

:::info
Do not forget to repeat this step when updating Listonomicon! For maximum safety, delete the contents of %AppData%\Local\Larian Studios\Baldur's Gate 3\Script Extender and then repeat this step when updating the list, to ensure that any old/unneeded mod settings are gone and any new/updated mod settings are added correctly.
:::

### 7.) Preparing Steam

- Navigate to Steam -> Right click BG3 -> Properties -> Updates and change “Automatic Updates” to “Only Update This Game When I Launch It.”
- Never launch the game via Steam, always launch it through Mod Organizer, to prevent updates from breaking the list and ending your playthrough. You may need to launch the game from Steam ONCE after a reinstall to make BG3MM work.
- You may wish to disable cloud backup of save data, as well. **Whichever patch/hotfix you start your playthrough, you should stay on until the end of your playthrough**!

:::caution
BG3 is still receiving Patches (major updates) and Hotfixes (small updates). These updates tend to introduce new bugs and issues to the game that may be difficult to distinguish from issues caused by mods (either with the list, or mods broken by updates). Major updates can also break Script Extender functionality, etc etc. This is why it is highly, highly recommended to disable automated updates.
:::

### 8.) Launching MO2

- Your portable instance of Mod Organizer 2 should be ready as soon as Wabbajack is done. However, you can verify that everything is working by ensuring that it has defaulted to the correct profile at the top-left, which should be Listonomicon.
- **Your total number of active mods should be 421. The colored separator at the top of your mod list should say Listonomicon v1.1.3.**
- At the top-right, you should be able to switch the program to launch to the BG3 Mod Manager (BG3MM).
- If MO2 is not able to launch BG3ModManager, open the drop-down and hit "Edit." As long as you placed the mod manager in the right folder in Step 2, you can set the "Binary" field to "BG3ModManager_Latest\BG3ModManager.exe" Make sure to hit apply at the bottom-right.
- When you launch BG3MM, make sure to switch the order to "Listo Mod Order" and hit "Export to game." **You need to update your load order in BG3MM and export it to your game any time you add or remove mods in MO2. Otherwise your game will detect your mod settings are different from your exported mod order and disable all mods.**
- You can find a backup copy of the Listo mod order for BG3MM in [Listo install location]/mods/zzz_Listo Mod Order for BG3MM or download a fresh copy from Listonomicon's Nexus page.

### 9.) Playing the List

Launch the game via MO2. Using the drop-down at the top right, switch the program to be launched to either the Vulkan or DX version of the game, depending on which has better performance/compatibility with your system. Everything else should work like normal! Always launch the game this way to prevent Steam from forcing updates. Do not launch the game via Steam or BG3MM.

### 10.) In Game Settings

:::caution
You must change Animation Level of Detail to High in your Visual Settings. Otherwise, any heads added or changed by mods will suffer from visual bugs and animation issues. Any/all other graphics settings can be changed according to your PC specs.
:::

You should begin a new game on Custom Difficulty to have the same experience Listonomicon was play tested for. Listo's custom difficulty settings mod has not been updated to match Larian's new custom difficulty menu.

![Difficulty Settings](https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/main/custom%20settings.png)

Per the image above, set your difficulty settings as follows:

- Ruleset: Honour
- Enemy Aggression, Character Power, Enemy Loadouts, Additional Combat Mechanics: Tactician
- Camp Cost Multiplier: 3
- Trader Price Modificer: 4
- Everything else should default to the right values.

### 11.) [Better Hotbar 2](https://www.nexusmods.com/baldursgate3/mods/2417?tab=description) 

- Better Hotbar 2 can sometimes suffer from hiding the final panel!
- [Follow the author’s pinned instruction at the top of the comments section](https://www.nexusmods.com/baldursgate3/mods/2417?tab=posts) to ensure that you have access to all of your hotbar panels, otherwise temporary effects (such as flying after casting spells for storm sorcerers) may be hidden from you. You should only need to do this once, unless your hotbar is changed due to a polymorph or similar effect.

### 12.) Customizing Listonomicon
**No support is offered or guaranteed for anyone who modifies the behavior or contents of Listonomicon.** It is already difficult to keep up with new mods daily on the Nexus; updates and changes to mods in the list; changes in the script extender; new and changed features in the community compatibility frameworks; as well as game patches and hotfixes; vanilla game bugs; and the consequences of (seemingly) minor mod setting tweaks on gameplay. Further modify the list at your own peril. We hope that you are able to customize a fun, stable, great experience tailored to your specific tastes using Listonomicon as a stepping stone - but will not promise troubleshooting or technical support.

### 13.) 16:9 vs 21:9 UI

There is an Ultrawide UI section in MO2. If you have a normal 16x9 resolution monitor (e.g. 1920x1080 or 2560x1440), make sure the two ultrawide UI mods are DISABLED in this section, and all UI mods are ENABLED in the User Interface section of MO2. If you have an ultrawide 21x9 monitor (e.g. 3440x1440), make sure the two ultrawide UI mods are ENABLED, and disable the top 2 mods in the User Interface section (i.e. disable the 16x9 version of Better Hotbar and Party Panel).

### 14.) Optional Mods

There are several optional mods packaged with Listonomicon to enable even more QoL or challenge features. [Please read the comments on the Optional Mods tab of this excel](https://docs.google.com/spreadsheets/d/1_dZdM_16xeE4yIqKYyk7HMjLI3WW7PhfpdlrKHM4vyg/edit?usp=sharing) for instructions on enabling these mods, if you wish to. No official support is offered for adding any other mods to Listonomicon.
