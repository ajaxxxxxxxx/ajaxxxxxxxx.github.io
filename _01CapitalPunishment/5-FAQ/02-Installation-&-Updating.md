---
layout: default
title: Installation & Updating
has_toc: true
parent: FAQ
nav_order: 2
description: Installation & Updating
---

## **1.) Can I modify this pack?**

Due to the jankiness of New Vegas and the variety of conflicts introducing new mods can cause, we do not support any modification whatsoever for this pack. This includes, but is not limited to...

- Stewies Tweaks Changes
- New Mod Installations
- Disabling/Deleting Preexisting Mods
- Editing INI's of Existing Mods
> We do have channels where users may help eachother with unsupported modifications and have an active user base consistently discussing various changes they have made.

## **2.) I updated my game and ________ file is now gone. Where did it go?**

If the file did not come with the Wabbajack installation, then it will be deleted on the next update

> The main file is Tale of Two Wastelands.7zip. Make sure to follow our [UPDATING GUIDE](https://www.modlists.net/01CapitalPunishment/4-Support/3-Updating/) to ensure when you update, it doesn't delete out of your mods/downloads folders.

## **3.) I Cannot Launch My Game/I am Getting Cannot Read Arguments**

- Launch the game with New Vegas, NOT NVSE

- If this doesn't work, try verifying the integrity of FNV in steam

- If this does not work, go to your Fallout New Vegas steam folder (Which should be completely clean of any alterations)

- From there copy all of the files inside and paste them into your Stock Games folder

- Run the 4GB Patcher

- After this is done try to launch your game like normal

~ Thank you to [Afro](https://www.youtube.com/channel/UC0AU8onc8vlBxm3jaqYlM0g) for this fix!

## **4.) How do I show the In Game Keybind Interface?**

We have removed Reshade from the list, but still provide the files to allow for users who wish to use it. You can follow our reshade guide [here](https://www.modlists.net/01CapitalPunishment/6-InstallGuide/2-Reshade-Installation/) to set this up or you can view our keybinds/controls page [here](https://www.modlists.net/01CapitalPunishment/4-Support/2-Controls-&-Tweaks/) 


## **5.) Where can I find an updated list of mods?**

[Hardcore List](https://loadorderlibrary.com/lists/capital-punishment-1122)
[Casual List](https://loadorderlibrary.com/lists/capital-punishment-casual-list)

## **6.) When I launch the game, it loads the black dialog box, but does not launch the game. How do I fix this?**
This is likely due to preexisting INI's or other files being prevalent in your %USER$/My Games/FalloutNV folder. Delete these files, run your new vegas through steam once, then follow the steps below.

### **The 4 Fixes**

**1.) The Primary Fix**
- Step 1: Go to your Documents/My Games/FalloutNV and delete all of its contents
- Step 2: Run Fallout New Vegas through Steam once. A popup should come up saying "Detecting Settings".
- Step 3: Configure your settings to how you like. Close the launcher when you are done.
- Step 4: Try to launch Capital Punishment through MO2 again
> The reason this is the primary fix is because most people are either not running with falloutprefs & fallout.ini generated or they are running files/older ini's that are conflicting with the list. 

**2.) If the above does not apply/does not work try this (This should be fixed in 1.45)**

- Step 1: Go to your Capital Punishment/Profiles/Casual_Punishment_Default folder

- Step 2: Delete the included "Falloutprefs & Fallout.ini"

- Step 3: Try to launch the game again 

**3.) If neither of the above applies or works try this**

- Step 1: Run Tale of Two Wastelands through MO2.

- Step 2: When the New Vegas Launcher pops up, change your resolution/your preset to your preferred preset. Exit the launcher

- Step 3: Run Tale of Two Wastelands through MO2 again

- Step 4: A popup will appear asking if you would like to "Clear the Read Only Flag" choose the first option stating "Clear the Read Only Flag"

**4.) If you are running a version below 1.45 then follow this**

- Step 1: Delete CPUinfo.exe, D3dx9_38.tmp, NVHR Folder, and d3dx9_38.dll from your Capital Punishment/Stock Game Folder

- Step 2: Manually download the latest NVHR from [here](https://www.nexusmods.com/newvegas/mods/69779?tab=files)

- Step 3: Extract the zip folder, then paste the files contained within to your Capital Punishment/Stock Game Folder

## **7.) I am having a missing textures, my game is super bright at certain times of the day, I am having *insert error here***
With the current version of MO2, it is likely that your load order may be resetting. This can cause a variety of in game conflicts. To correctly reset your load order follow the steps below.

1.) Depending on the list you are using, go to either the [Hardcore Load Order Library](https://loadorderlibrary.com/lists/capital-punishment-1122) or [Casual Load Order Library](https://loadorderlibrary.com/lists/capital-punishment-casual-list) page

2.) Download the `loadorder.txt`. Copy this file to your clipboard once it is downloaded.

3.) Go to your `Capital Punishment/profiles/Casual_Punishment_Default` folder

4.) Paste the copied `loadorder.txt` into your `Capital Punishment/profiles/Casual_Punishment_Default`. When it asks you to overwrite your previous load order, select
yes
