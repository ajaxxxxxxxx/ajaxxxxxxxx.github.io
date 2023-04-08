---
layout: default
title: Installation Guide
nav_order: 2
description: Install Guide
---

# **REGARDING THIS GUIDE:** 

**This guide, in its majority, is a direct copy and paste of the [Heartland Installation Guide](https://github.com/wabbajack-tools/mod-lists/blob/master/heartland/readme.md). This will be edited and rewritten entirely as we continue to test and release new iterations to not directly plagiarize the writings they have made/to represent the steps needed to install Dungeons & Daedra itself. The Heartland team and Bevilex are hugely responsible for me making such small edits and I hope that I can expand upon these further. Make sure to show them love by checking out their socials, which I will have linked on the D&D home page!**

## Mandatory Instructions

#### Prerequisites:
*   A **vanilla copy of Oblivion** in the **English language** with at least the Knights of the Nine and Shivering Isles DLCs, **obtained from Steam or GOG**, and **installed outside of C:\Program Files.** 
*   **Default Oblivion configuration files**. To generate them, first ensure that the Documents/MyGames/Oblivion folder has been wiped, then **launch the game once in vanilla**.
*   **60GB of hard drive space** (not including Oblivion).
*   A Nexus Premium account, or a lot of time to download the mods manually!

### Using the Wabbajack Autoinstaller

1. **Download** the latest version of Wabbajack from the [Wabbajack Github](https://github.com/wabbajack-tools/wabbajack/releases/), and **extract the Wabbajack.exe** file to a new directory called **Wabbajack**, as close to the root of your drive as possible (e.g. C:\Wabbajack).
2. **Create a new folder** for the new installation, and call it **D&D**, placing it close to the root of your drive once again, but not within the Wabbajack folder. Ensure you have at least 60GB of hard drive space.
3. **Launch Wabbajack.exe** from within the Wabbajack folder. Select the **Dungeons & Daedra** modlist, and then hit **Download and Install** to download the modlist file. Alternatively, the modlist can be downloaded manually from this page. If installing manually, place the modlist file in the Wabbajack directory, and select **Install from Disk**.
4. Under Installation Location, **select the D&D folder** you created in step 2. Set the Download Location to D&D\downloads. Click **Begin**.
5. Wabbajack will open a browser and ask for Nexus authorisation. Log in and then hit **Authorise.** (_If you get an error on authorisation, download and install [.Net Framework 4.8](https://dotnet.microsoft.com/download/dotnet-framework/net48) and run the installer again_)
6. Wabbajack will now download and install the mods specified in the installer. The download size is approximately 18GB so this may take a little while. The installer should keep you informed of progress.
7. After the **installation complete** message appears, close the installer.

### Game Folder Files

Within the D&D folder, copy the contents of the **Game Folder Files** folder to your root Oblivion directory (e.g. C:\Steam\steamapps\common\Oblivion).

### Creating a Wrye Bash Bashed Patch

1. Select **Wrye Bash** from the in MO2 and hit **Run**. If prompted for a game choice, select **Oblivion**.
2. Within the Wrye Bash interface, right click the plugin right at the bottom (**Bashed Patch 0.esp**) and click **Rebuild Patch**.
3. In the following interface, make sure that the following options are enabled for the best experience (courtesy of Mexxy):
    * **Tweak Assorted -> DarNify Books** ticked so books look as intended
    * **Tweak Settings -> Arrow Speed is x2.0** for more responsive archery (right click box to change)
    * **Tweak Actors -> Irresponsible Creatures** ticked
    * **Tweak Settings -> Crime: Alarm Distance at 2000** to reduce guard crime intuition range (right click to change)
    * **Tweak Settings -> Actor: Greeting Distance at 100** for less NPC chatter (right click to change)
    * **Tweak Settings -> Warning: Exterior Distance to Hostiles at 2000** for reduced combat distance outdoors (right click to change)
4. When asked about mods to be de-activated and incorporated into the patch, simply **press OK**.
5. Hit **Build Patch**. This will take a few minutes, and produce a popup log when complete. Close Wrye Bash.
6. Back in MO2, right click the **Overwrite** panel at the bottom of the mods pane and select **Create mod**. Call it **Bashed Patch**, place it in the **Install Specific Tweaks** section, and ensure it is enabled after installation.

### Running Better Oblivion Sorting Software (BOSS) with User Rules

1. Run **ModOrganizer.exe** in the D&D MO2 folder.
3. Select **BOSS GUI** from the **executable dropdown** in MO2 and hit **Run**. The BOSS GUI will appear over the top of MO2. Hit **Run BOSS** without changing any of the settings. It will now take some time to download the latest masterlist, if it hasn't done so already. (This occasionally fails - if this happens, first ensure 'Update Masterlist' is ticked, then try running BOSS again. Eventually, you should receive the masterlist. When you are successful, untick 'Update Masterlist'.). After the masterlist is obtained, BOSS will sort your plugins and output an HTML log when completed.
4. Find the **userlist.txt** file in **D&D/Game Folder Files/Userlist File (DONT PASTE THIS TO OBLIVION DIRECTORY)**, & cut the userlist.txt inside to your **tools/BOSS/bin/Release-64/oblivion** and overwrite any existing file there.
5. Repeat step 2, using BOSS to sort your load order with the newly applied user rules.

### Special Installation Steps

##### _Steam and Retail Users_

Only applicable if you have a Steam or retail copy of Oblivion. GOG users can skip this step.

* Within the D&D MO2 folder, go to **tools/Oblivion RAM Optimization** and run **4gb patch.exe**.
* Target both the **Oblivion.exe** and **OblivionLauncher.exe** executables in your root Oblivion directory. Both executables will now have been patched to improve the memory that can be allocated to their processes.

##### _Standard GOTY Users_

Only applicable if you purchased the standard GOTY version of Oblivion. (if this is the case, you have the Knights of the Nine and Shivering Isles expansions, but not the house plugins or Horse Armor).

* Disable the following mods in the left pane:
1. **Unofficial Oblivion DLC Patches**
2. **Book Jackets for Misc. DLC**
3. **Interior Draw Distance ENB Fog Fix**
4. **Snowy Road to Bruma DLC Frostcrag Patch**
5. **Harvest [Flora] - DLCFrostcrag.esp**
6. **Harvest [Flora] - DLCVileLair.esp**
7. **Interior Draw Distance ENB Fog Fix**
8. **Grimbot's Spell Tomes Jackets**

##### _Ultrawide Users_

Only applicable for use with a monitor that has greater than a 16:9 aspect ratio.

* Open the **INI Editor in MO2** (jigsaw/puzzle icon on the top bar).
* Under **[Display]**, change **iSizeW** and **iSizeH** to match your resolution. For example, for 1440p, iSizeW=3440 and iSizeH=1440.
* Download the **Ultra Widescreen Fix for Heartland** from [here](https://drive.google.com/open?id=1dnWbrmT_zcIESIqmLWMVSzHaEdQgkCs8) and install through MO2, placing it in the **Install Specific Tweaks** section.
* Download the **Black Rectangle Ultrawide Fix** from [here](https://www.nexusmods.com/oblivion/mods/48351), and install through MO2, placing it in the **Install Specific Tweaks** section.

### Running the Game
1. If you use Steam, ensure it is running.
1. To play the game, select **Oblivion** in the MO2 **executable dropdown** and hit **Run.**
3. After playing and closing the game, create a new empty mod called OBSE Logs (Use the '...' button at the top of the left MO2 pane, then select 'Create empty mod'. Next, click on the **Overwrite** panel at the bottom of the mods pane and drag and drop the OBSE log files into the empty OBSE Logs mod. This ensures any logs generated on successive plays will be stored here and will not produce a warning.
4. You're ready to go! Check the optional steps tab if you would like to further enhance your experience.
