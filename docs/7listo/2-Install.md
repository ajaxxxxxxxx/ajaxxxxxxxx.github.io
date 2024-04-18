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
:::

### 1.) Reinstall Baldur's Gate 3

- Nuke BG3. I would recommend uninstalling the game completely, deleting anything left of the install folder, and deleting the contents of %appdata%\Local\Larian Studios. This is to ensure no errant files are leftover from previous playthroughs. Without Mod Organizer 2 (MO2), the BG3 mod manager and modding process makes edits to your install folder and adds files in places that won’t be caught in an uninstall. Nuking everything improves the odds that Listo works as expected.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/95ab41d6-b3e8-471c-bebb-3528a29a1a7c)

### 2.) After it has installed, launch the game and let it generate new INI's. Once it has, press play. After reaching the main menu, exit the game.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/e7bc0205-4a92-4bc3-953e-bdcbe7f09149)

### 3.) Now go to [The OpenMW Website](https://openmw.org/downloads/). At the bottom of the page, find Development Builds, then Windows Builds. Click this to download the latest nightly dev build of OpenMW.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/51b209bc-df1d-475b-8514-1ce41e421b17)

### 4A.) (Wabbajack Gallery Users) After this has finished downloading, leave it be. Search for Path of the Incarnate on Wabbajack. Make sure you have checked "Unofficial Lists". Open the list and set the correct modlist path that you wish Path of the Incarnate to install to.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/af0a8e79-e539-42dd-bc63-9ce74df1f294)

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/eae79624-9ea6-4253-8d76-ce1b59e1a0c2)

### 4B) (Nexus File Users) Search for [Path of the Incarnate](https://www.nexusmods.com/morrowind/mods/53437?tab=files) on Nexus and download the zip folder containing the .wabba file. Unzip this folder and place the Wabbajack file somehwere you can easily select it. Now open Wabbajack, select install from disk, and select the .wabba file. Then set the correct modlist path that you wish Path of the Incarnate to install to.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/7b945a46-1f6a-49cd-89ae-ca8f9a2ae90e)

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/63c93bed-0666-4a8a-aec3-01bfb421cb80)

- Once you select your Modlist installation, Wabbajack will automatically assign a downloads folder within it for you.

- Make sure your chosen path is NOT on a protected path such as program files, desktop, etc. It is best to create it on the base of a drive (IE: C:/POTI). After doing this, click the play button at the right and wait for the list to fully download

### 5.) Once the installation has completed, you can click the checkmark to close Wabbajack. Now we will continue with getting OpenMW setup.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/03a0cd6b-5977-4f0e-90f8-8aeab9adb57f)

### 6.) Find the OpenMW zip file that you downloaded earlier and unzip it in a location of your choice.

- It is suggested that you unzip it near your POTI install folder for ease of access.

- You may also rename this to whatever you would like

- If you do place your OpenMW folder inside of your POTI directory, remember that it will delete each time you update the list. It is suggested that you remove it from the folder and place it in a location such as your desktop before updating to avoid having to reinstall.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/04113823-9234-4de0-a1c8-d2c118ed1074)

### 7.) Inside the unzipped folder, find the 'openmw-wizard.exe'. Run this file, select next, then choose Existing Installation. Press next to move to the next page

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/517fb86b-a853-4505-a395-2f96c64e5d07)

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/b06e25bd-09c0-4dd4-8cb0-dfaccce3bfb0)

### 8.) Select browse on this next popup and find your Morrowind installation. Then find your Morrowind.esm. Select it and press open. Then press next on the installer

- For steam users, this can commonly be found under `C:/Program Files(x86)/Steam/steamapps/common/Morrowind/Data Files\Morrowind.esm`

- Other platform installations should be relatively the same, for more information on where your installation is likely located please use google. 

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/c8115dd1-11c5-4888-87e5-98f21cad7fa4)

### 9.) Continue to press next until you reach this screen. Check everything BUT Import bitmap fonts setup from Morrowind.ini. Then press next. After this you have finished install OpenMW. Click finish to exit the installer.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/a6ae026b-5ca7-4314-b5bb-690fbf176c89)

### 10.) Go to your Path of the Incarnate Folder/Game Folder Files. You will see 2 files here. Copy these and paste them to User/Documents/My Games/OpenMW.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/de5e936b-1c0f-42d0-902d-8230046d42ee)

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/527780d7-e810-4996-883d-043227c1b32f)

### 11.) Return to your Path of the Incarnate folder again and look for ModOrganizer.exe. Launch this, then in Mod Organizer, look for the dropdown menu. Select it, then select edit. Under the selection `OpenMW Launcher`, set the binary path to where your OpenMW-launcher.exe is located. Once you have done this, apply your changes and press ok.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/6a111fec-5439-47d2-8e35-9324e222a3ea)

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/5990230a-e83c-4dcd-8efb-1f1de8520f8e)

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/ef094809-7395-439e-a0f9-d81b5a91d925)

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/ab6fbf85-fca2-4784-b01f-b599e64bc91b)

### 12.) Make sure that OpenMW Launcher is selected in your MO2 drop down. Then press run. If a message pops up asking you to set up the installation wizard, you may select Skip. You will now officially be in the OpenMW launcher.
 
- From here, you may go to settings to graphics to customize your resolution and other graphics settings before playing

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/91d04d39-1d45-4b06-bd07-c6aba52edec2)

### 13.) (OPTIONAL) Go to the Data Files section in the OpenMW menu that opens up, then Navigation Mesh Cache below. Press the "Update" button to begin this process

- This step has been shown to significantly decrease load times in game, but will take some time and is entirely optional.

- You may increase the Max Size of the Nav Mesh Cache, but please only do so if you know what you are doing. Otherwise, stick with the default. The largest we have heard of is 18 gb.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/fa748d6a-bf6e-48f1-b07b-178e4a3f466a)

### 14.) You are now ready to play Path of the Incarnate! When you are finished with everything, select Launch OpenMw at the bottom of the launcher and enjoy!

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/cc03497b-932d-4220-936b-7b4de7907aa4)



