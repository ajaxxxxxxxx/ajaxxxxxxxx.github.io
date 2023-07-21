---
layout: default
title: 5.) Steam Deck/Linux Installation
has_toc: true
parent: Optional Install Guides
nav_order: 5
description: How to Install Capital Punishment On Steam Deck
---
# **Community Guide: Capital Punishment Steam Deck/Linux Installation**

This guide is a community released guide and therefore, is not officially tested or guaranteed to be working by Boneyard Creations. For the sake of promoting community efforts such as these, we have made a page for you all to refer to if you are interested in trying this yourself. Please refer all support to the parties which have created this guide (Specified in the credits below)

## **Credits**

Thank you to users [Omniman](https://github.com/Omni-guides) for this published guide and offering support for it as well as ghrsch/Bort for their efforts pinning this method down as well as the contained DXVK configuration tweaks!

## **Instructions**
**The following has been tested on Capital Punishment v1.5.0.3**

These steps will need to be carried out in Desktop mode, but once complete you will be able to launch the Modlist and play the game from Game Mode. This guide assumes you have installed Capital Punishment on your Windows system and can successfully load and play the modlist. I also assume that you have set a user password on the Steam Deck and have a preferred method for transferring data from your Windows System to the deck (Rsync, WinSCP, whatever). As far as I am aware, New Vegas must be installed on the internal drive of the deck, and not an SDCard, but I am still trying to see if that is possible.

### Step 1 - **Install both Fallout New Vegas and Fallout 3**
Install both games on your Steam Deck and set the Proton compatibility to the latest Steam stable version, which as of now is 8.0-2. You can of course use alternative Proton versions such as ProtonGE, more on this in Step 9 at the end of the guide.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/f1537a1a-00ed-4846-b6bf-9d090a25a323)

Next, start Fallout New Vegas and from the Launcher, click Play to load into the Main Menu of the game, and then exit. Do the same for Fallout 3.

### **Step 2 - Install RockerBacon MO2 for Linux**
On Steam Deck, download the Rocker Bacon MO2 installer and extract it to it's own directory, e.g. /home/deck/Documents/RBMO2. The following one-liner will do that for you. If you wish to do this manually, you can get it from [here](https://github.com/rockerbacon/modorganizer2-linux-installer).

`mkdir /home/deck/Documents/RBMO2 ; wget https://github.com/rockerbacon/modorganizer2-linux-installer/releases/download/4.3.1/mo2installer-4.3.1.tar.gz -O /home/deck/Documents/RBMO2/mo2installer-4.3.1.tar.gz ; tar -xpzvf  /home/deck/Documents/RBMO2/mo2installer-4.3.1.tar.gz -C /home/deck/Documents/RBMO2`
Run the Rockerbacon ./install.sh script, and select Fallout New Vegas:

`/home/deck/Documents/RBMO2/install.sh`

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/b8fe070a-9582-468d-a341-9995988a07be)


Accept that the Proton version setting is done (I have tested with and without setting Proton to 6.3-8 instead of 8.0-2 and it doesn't appear to make any difference):

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/131a8f35-5a75-4597-967a-7e789a0fc3d0)


Then enter the path you want to store the modlist. I chose to store the list in /home/deck/Games/Fallout/CapitalPunishment:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/08c32dfd-28ff-49bd-b0e5-f865f6866ff5)


Click Ok, it willthen ask if you want to create the directory:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/89b99ad7-1078-46cf-973b-26c5295d1478)


Click Yes, and this will now run through the installation and configuration of MO2, but it will also create a redirect from the Fallout New Vegas game in Steam, to automatically load MO2 instead of starting NV directly.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/d68ce0b1-b9c4-4881-989c-fbc90d953595)

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/3945b3a3-dcf2-4abd-b8d6-1e6574edbe1c)


### **Step 3 - Copy Modlist Directories**
We need to copy in only the Stock Game, Profiles and mods directories from the Capital Punishment WJ Install directory, to the RockerBacon-created directory(/home/deck/Games/Fallout/CapitalPunishment/modorganizer2/). You could do this directly from Windows using your preferred method of transferring data to the Deck, but I preferred to copy the WJ installed directory as a whole to the deck, and then only move the needed directories when I was ready:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/de44097c-5a57-4c49-b36a-1b264b8ff311)


### **Step 4 - Launch MO2 and configure the instance.**
Launch Fallout New Vegas from Steam, and as mentioned above, it should load up MO2 instead of the game launcher. A little terminal window should appear:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/06c26d3d-b68e-4582-af54-82ee5e5c9ace)

You will be prompted to Create a new instance:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/0982a5cd-55a3-4bc7-89ed-b2d8d15a6fd8)

Next, select Portable, then TTW

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/7a7adb2c-3567-4ee9-9c1c-4764632a14d3)

Select TTW:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/761b541e-4951-4530-ac19-dd0581710bdc)

Then click Next to accept the path:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/e4afa9f2-62d2-4546-9b5c-8c0f6842d593)


Hit Next again, and then Finish:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/15893248-4986-4d4e-8ea9-c97aaca63919)

MO2 itself should now load, though it may complain that the profile 'default' doesn't exist, so it will use 1. HIGH instead:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/0525ebc1-bcb0-4a32-b710-8e63dba196c5)


If asked, click No to the MO2 Tutorial:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/d09c1e54-dffe-4911-a585-ec84865fbd32)


Likewise pick as you like from the options regarding NXM Handler:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/eb178756-8882-4221-9ed7-a334ddf2c918)


Finally, once MO2 has loaded, ensure that it lists mods in the left hand of the window, it should look something like this:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/ec5610b2-7f31-4ca9-8170-58514d5ef3e4)


### **Step 5 - Profile, Managed Game and Executable Paths**
Change profile to your preferred CapitalPunishment profile if it's not already seleted, I just stuck with the "High" profile.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/9f492df9-a087-417e-b08d-acb53baf88f4)


Next click the wrench

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/241ea745-d507-41ca-872a-25d0b29ed145)

You may notice that the Game Path (under the Paths tab) shows the FalloutNV.exe location from the vanilla game directory (in /home/deck/.local/share/Steam/steamapps/common/Fallout New Vegas). We need to change this and make sure the Game Path is set to /home/deck/Games/Fallout/CapitalPunishment/modorganizer2/Stock Game/FalloutNV.exe

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/fd67a2d8-e340-4a49-ae81-96083b6b9a10)


Click OK:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/3d8c0aa1-36bd-4790-93a6-63efd5e7066d)


and it will prompt you to restart MO2, do so:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/5c60a206-e223-4724-ade5-52ac57438075)


Once MO2 restarts, click the cog icon:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/7a766b3a-75ed-42cd-b80a-4c4fddfc21ad)


Edit the executable paths for NVSE, Tale of Two Wastelands and Fallout Launcher to be the respective paths in /home/deck/Games/Fallout/apitalPunishment/modorganizer2/Stock Game. E.g for NVSE, click the browse button/three dots next to the Binary path:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/eedfbb08-747d-40b9-8d50-a426d80e6eb0)


Browse to the path /home/deck/Games/Fallout/CapitalPunishment/modorganizer2/Stock Game, highlight the nvse_loader.exe file, and click OK:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/b242a713-31f1-4bcf-898a-cc65f2dab4ef)


Set the Start In path to be Z:\home\deck\Games\Fallout\CapitalPunishment\modorganizer2\Stock Game:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/daed032b-5244-489e-8f2d-1e726f4a3456)


Do the same for the "Tale of Two Wastelands" and "Fallout Launcher" executable entries:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/dbd49058-6048-49c3-8373-523611df0e34)


![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/7cec9c1e-4c5b-4642-a6e2-08ea6d3b97f7)


### **Step 7 - Copy in tweaked DXVK.conf file for better performance**
Thanks to users ghrsch and Bort, we can apply a dxvk configuration that should hopefully increase the performance of the list on Steam Deck. To grab it, run the following command in a Konsole terminal window:

`wget https://github.com/Omni-guides/Wabbajack-Modlist-Linux/raw/main/docs/FNV_CapitalPunishment_dxvk.conf -O /home/deck/Games/Fallout/CapitalPunishment/modorganizer2/Stock\ Game/dxvk.conf`

This tweaks a few settings, and caps the framerate to 40FPS, which you can then match with the Steam Deck's performance settings.

### **Step 8 - Click Play!.. Almost..**
With the executable paths set, Change the Launch Option to be Fallout and set the desired Options.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/d44399e3-b667-4a07-8033-8075f092a9ee)


You can set these how you want for performance, but I'd recommend setting to High instead of Very High, and increase the actor fade to the maximum.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/78880cce-221b-4693-b655-c7614626c2f7)


Accept the Graphics options, and now it's finally time to play! Set the Launch option back to Tale of Two Wastelands, and click Play:

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/896ad746-2609-49fc-be96-71a05e7632ab)


You may get a question about a read only configuration file, select the option to clear the read only flag.

Some text will scroll by in the little terminal window that opened when you launched New Vegas from Steam, and all being well after a short wait, the game should launch:


### **Step 9 - Optional but Recommended**
Increase Steam Deck Swap Space, Swappiness and adjust Steam Deck VRAM

This may be optional, but there have been reports of far better stability and performance after increasing the swap space available to the deck when running Modlists. This is an optional step, but if you are experiencing stability issues, it might be worth investigating. How to do so is outside the scope of this guide, but there is plenty of information available elsewhere on how to do it - CryoByte33 has an excellent set of utilities available on github that can take care of this, and more!

Personally I have increased the VRAM in the deck bios to 4GB (see here for details), 16GB Swap space, and a Swappiness of 1 - the recommended settings when you run Cryobyte33's Steam Deck Utilities. In fact, the full video of Cryobyte33 explaining what this all means, is definitely worth a watch!

Switch to an even newer Proton Version

Using an application such as ProtonUP-QT (available on Deck via the Discover store), you can install alternative versions of Proton, such as ProtonGE by GloriousEggroll. You may see some benefits in switching to the latest version of ProtonGE instead of using the version that Valve currently use by default, but it's entirely optional.

