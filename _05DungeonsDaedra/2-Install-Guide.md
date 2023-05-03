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
*   An English Copy of Oblivion with All DLC
*   **Default Oblivion configuration files**. To generate them, first ensure that the Documents/MyGames/Oblivion folder has been wiped, then **launch the game once in vanilla**.
*   **60GB of hard drive space** (not including Oblivion).
*   A Nexus Premium account is heavily suggested if you do not want to click endlessly!

### Using the Wabbajack Autoinstaller

1.** Download [Wabbajack Here](https://github.com/wabbajack-tools/wabbajack/releases/)**; Extract the Wabbajack.exe file to a new directory called **Wabbajack**, as close to the root of your drive as possible (e.g. C:\Wabbajack).
2. **Create a new folder for the new installation**, and call it **D&D**, make sure this is on the root of your drive and not in the Wabbajack installation folder
3. **Launch Wabbajack.exe** from within the Wabbajack folder. Go to Modlists, then search for the **Dungeons & Daedra** modlist (Make sure you have checked Unofficial Lists at the top of Wabbajack if it isnt showing up. Hit **Download and Install** to download the modlist file. Alternatively, the modlist can be downloaded manually from [this page](https://www.nexusmods.com/oblivion/mods/52947). If installing manually, click install from disk in the Wabbajack program, then select the Wabbajack file you got from the NExus
4. Under Installation Location, **select the D&D folder** you created in step 2. The download location should automatically set to D&D\downloads. Click **Begin**.
5. Wabbajack will open a browser and ask for Nexus authorisation. Log in and then hit **Authorise.** (_If you get an error on authorisation, download and install [.Net Framework 4.8](https://dotnet.microsoft.com/download/dotnet-framework/net48) and run the installer again_)
6. After the **installation complete** message appears, close the installer.

### Game Folder Files

Within the D&D folder, copy the contents of the **Game Folder Files** folder to your root Oblivion directory (e.g. C:\Steam\steamapps\common\Oblivion).

### Creating a Wrye Bash Bashed Patch

1. Select **Wrye Bash** from the in MO2 and hit **Run**. Select **Oblivion** if prompted.
2. In Wrye Bash, find the **Bashed Patch 0.esp** at the bottom of the modlist. Right click it and then click **Rebuild Patch**.
3. In the following interface, make sure that the following options are enabled for the best experience (courtesy of Mexxy/Heartlands Guide):
    * **Tweak Assorted -> DarNify Books** ticked so books look as intended
    * **Tweak Settings -> Arrow Speed is x2.0** for more responsive archery (right click box to change)
    * **Tweak Actors -> Irresponsible Creatures** ticked
    * **Tweak Settings -> Crime: Alarm Distance at 2000** to reduce guard crime intuition range (right click to change)
    * **Tweak Settings -> Actor: Greeting Distance at 100** for less NPC chatter (right click to change)
    * **Tweak Settings -> Warning: Exterior Distance to Hostiles at 2000** for reduced combat distance outdoors (right click to change)
4. When asked about mods to be de-activated and incorporated into the patch, simply **press OK**. If any master dependency issues arise, let us know in our discord. 
5. Hit **Build Patch** and wait for it to complete. Press Ok when its done, let it activate the wryebash patch, then close wryebash when all is done.
6. Back in MO2, right click the **Overwrite** panel at the bottom of the mods pane and select **Create mod**. Call it **Bashed Patch**, place it in the **Install Specific Tweaks** section, and enable it in MO2. 

### Running Better Oblivion Sorting Software (BOSS) with User Rules

1. Go to the application list in MO2 on the top right
2. Select **BOSS GUI** from the **executable dropdown** in MO2 and hit **Run**. The BOSS GUI will appear over the top of MO2. Hit **Run BOSS** without changing any of the settings. It will now take some time to download the latest masterlist, if it hasn't done so already. (This occasionally fails - if this happens, first ensure 'Update Masterlist' is ticked, then try running BOSS again. 
3. Eventually, you should receive the masterlist. When you are successful, untick 'Update Masterlist'.). After the masterlist is obtained, BOSS will sort your plugins and output an HTML log when completed.
4. Find the **userlist.txt** file in **D&D/Game Folder Files/Userlist File (DONT PASTE THIS TO OBLIVION DIRECTORY)**, & cut the userlist.txt inside to your **tools/BOSS/bin/Release-64/oblivion** and overwrite any existing file there.
5. Repeat step 2, using BOSS to sort your load order with the newly applied user rules.

### Special Installation Steps

##### _Steam and Retail Users_

Only applicable if you have a Steam or retail copy of Oblivion. GOG users can skip this step.

* Within the D&D MO2 folder, go to **tools/Oblivion RAM Optimization** and run **4gb patch.exe**.
* Target both the **Oblivion.exe** and **OblivionLauncher.exe** executables in your root Oblivion directory.


##### _Ultrawide Users_

Only applicable for use with a monitor that has greater than a 16:9 aspect ratio.

* Open the **INI Editor in MO2** (jigsaw/puzzle icon on the top bar).
* Under **[Display]**, change **iSizeW** and **iSizeH** to match your resolution. For example, for 2k, iSizeW=2560 and iSizeH=1440.
* Download the **Ultra Widescreen Fix for Heartland** from [here](https://drive.google.com/open?id=1dnWbrmT_zcIESIqmLWMVSzHaEdQgkCs8) and install through MO2, placing it in the **Install Specific Tweaks** section.
* Download the **Black Rectangle Ultrawide Fix** from [here](https://www.nexusmods.com/oblivion/mods/48351), and install through MO2, placing it in the **Install Specific Tweaks** section.

### Running the Game
1. If you use Steam, ensure it is running.
1. To play the game, select **Oblivion** in the MO2 **executable dropdown** and hit **Run.**
3. After playing and closing the game, create a new empty mod called OBSE Logs (Use the '...' button at the top of the left MO2 pane, then select 'Create empty mod'. Next, click on the **Overwrite** panel at the bottom of the mods pane and drag and drop the OBSE log files into the empty OBSE Logs mod. This ensures any logs generated on successive plays will be stored here and will not produce a warning.
4. You're ready to go! Check the optional steps tab if you would like to further enhance your experience.
