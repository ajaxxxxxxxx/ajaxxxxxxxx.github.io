---
sidebar_position: 2
---

# Installation Guide

# [![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/72676bf0-0302-4f82-b373-609b33a8d51e)](https://www.modlists.net/docs/2capitalpunishment/Home) [![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/22bca291-aae2-45fe-80ff-308fa49e85bf)](https://linktr.ee/bycmods) [![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/99d6f770-e29c-4813-9a37-5494d0753818)](https://www.nexusmods.com/newvegas/mods/80042) [![Notes](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/faded006-6e5b-4646-9e24-13119fe01d33)](https://www.modlists.net/docs/2capitalpunishment/Release-Notes)

:::info
## Requirements

> 170 GB of Free Space
>
> A Nexus Account (Preferably Premium)
>
> A Mod Pub Account (For TTW) 
>
> A Newly Installed, Global Steam Installation of Fallout NV w/ All DLC (This will change in 1.5.7.0)
>
> A Newly Installed Copy of Fallout 3 With All DLC (GOG, Steam, Or Epic Games Copy).
>
> Your Steam & Capital Punishment Install Folders at the Root of Your Harddrive (IE: C:/Capital Punishment & C:/Steam)
:::

:::info
## Tools/Programs You Need

> [Directx Runtime Libraries](https://download.microsoft.com/download/8/4/A/84A35BF1-DAFE-4AE8-82AF-AD2AE20B6B14/directx_Jun2010_redist.exe)
>
> [Visual C++ Runtime Libraries](https://aka.ms/vs/17/release/vc_redist.x64.exe)
>
> [.NET Framework 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) **AND** [.NET Framework 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
>
> [The Wabbajack Launcher](https://www.wabbajack.org)
>
> [7-Zip](https://www.7-zip.org/) (Or Winrar)
:::

## ![](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/eee43769-3e17-40b6-b670-958c8e660dc5) Installing the Games

1.) Install a Fresh Copy of Fallout New Vegas & 3 (English Language Only). **Once installation is finished, launch them once and a popup should appear saying detecting game settings.** 

2.) Set your resolution and other settings to your liking and close the launcher after

## ![](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/70759b7b-3ab5-4a6c-8043-51ea6211bf44) Wabbajack Setup

1.) Launch your installed Wabbajack & go to the Cogwheel at the top right. Log into your Nexus account through here

2A.) If you are installing the list from Nexus, unzip the folder you downloaded. Then, inside wabbajack, go to "Install From Disk". Find the .wabba file you just unzipped and select it

2B.) If you are installing the list through Wabbajack's Gallery, go to "Browse Modlists" then search Capital Punishment. Click the download icon,

3.) Set your modlist installation location to wherever your would like it (IE: C:/Modlists/Capital Punishment) & it will automatically create the downloads directory for you. Press the play button when you are done and installation will begin

## ![](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/40470e33-c3f1-4276-a905-30a02d6084e0) Installing TTW

1.) Download and unzip the [TTW 3.3.2 Installer](https://mod.pub/ttw/133-tale-of-two-wastelands). Then create a new folder called `[NoDelete] Tale of Two Wastelands`

> The `[No Delete]` tag has recently been having issues. PLEASE BACK UP YOUR TALE OF TWO WASTELANDS OUTSIDE OF YOUR CAPITAL PUNISHMENT FOLDER

2.) Make sure Steam is fully closed, then run the Tale of Two Wastelands Launcher. Set the paths for where your `Fallout 3`, `Fallout NV`, & `[NoDelete] Tale of Two Wastelands` main directories are located, then press install (This takes a while)

3.) After the TTW Launcher successfully completes the installation, zip up the `[NoDelete] Tale of Two Wastelands` folder. You may now safely delete Fallout 3 from your computer.

4.) When Wabbajack successfully completes installing the modlist, drag this 7zip into your `Capital Punishment/Downloads` directory. Go back to your main `Capital Punishment directory`, then open up `Mod Organizer 2`

5.) For each profile you open, a dialog box will popup saying that your fallout.ini & falloutprefs.ini are missing and that it will take them from your Vanilla game folder press okay. Another box will pop upafter this regarding the read only flag. **ALWAYS** select 'Clear the Read Only Flag'

6.) On the right hand side, sort by Filetime until you see your `[NoDelete] Tale of Two Wastelands.7z` at the top. Drag and drop this to the top of the lefthand separator `PUT TALE OF TWO WASTELANDS HERE`

## ![](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/b82eeb7e-aefc-4ee2-80b7-11956054f964) Preconfigured Save Setup 

1.) Go to Capital Punishment/Game Folder Files, copy the two appropriate Save Files for the profile you plan to use (Casual or Hardcore), then paste them into the appropriate profile folder you plan to use **(HC = Hardcore)**

- **At the End Of the Saves Look for the Markers For Casual/Hardcore**

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/96f62de7-5f55-485d-bb73-4a91dc69a457)

- **Copy the Two Saves Which Correlate & Paste Them Into `Capital Punishment/Profiles/[The Profile Of Your Choice]/saves`**

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/d4984034-f544-4a58-a447-d4a43eaf122f)


## ![](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/1d522d2a-b8a7-4451-995a-5e47417329c5) Final Setup

1.) Make sure in MO2 that all of the application directories in the dropdown match the locations on your system. If they do not, change them so that they do.

2.) At the top left of MO2, go to `Tools/Settings/Paths/Managed Game`. Make sure that this is set to where your vanilla Fallout New Vegas installation

> This will not override your New Vegas installation; We now use Root Builder which allows us to use your vanilla New Vegas directory without modifying it.

3.) You can now select "Capital Punishment TTW" from the right hand dropdown and press play.

## ![](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/62ffbb65-1612-4fe6-acd0-6927a741d152) Switching to Casual or Another Profile

- Depending on the experience/performance choices you would like to make when playing this list, you may want to select a different list.

1.) In MO2, select the dropdown menu at the top. From there, choose the profile you would like to play.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/ede43e0d-26b9-477b-bc05-cd628e66a7f3)

2.) After doing that, press Run in MO2 with Capital Punishment TTW selected and the list you have chosen should boot up.

![image](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/f5c647a2-f0ed-4e6e-933e-74320d85d4ea)

- For a list of what each profile does/is about, you can check out our profiles page on here on the wiki!


## ![](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/1b455b94-9c62-4d3c-b75f-e2ad04f90739) Optional Post Installation Steps

- You can choose to delete the contents of the `Capital Punishment/Downloads` folder to free up space, but when you update you will have to fully reinstall everything again.
- Past this you may check out our Optional Installation Steps later in this documentation. These involve steps for downloading NVR, Reshade, and much more!

