---
layout: default
title: Installation Guide
nav_order: 2
description: Abyssal Installation Guide
---

## **Part 1 - Initial Setup**

1.) Download the [StarfieldCustom.ini]() in our downloads section

2.) Place this file in your `C:/Users/[User]/Documents/My Games/Starfield`

3.) Don't want to download it? You can also set it up yourself

- Make a file called StarfieldCustom.ini inside the afforementioned directory
- Inside, paste this verbatim

```
[Archive]
bInvalidateOlderFiles=1
sResourceDataDirsFinal=
```

4.) Also want to change your FOV? Here is how!

- In your same StarfieldCustom.ini, input these values

```
[Camera]
fFPWorldFOV=100.0000
fTPWorldFOV=100.0000
```

- You can change the above values to what you would like! Below are the vanilla values.

```
[Camera]
fFPWorldFOV=85.0000
fTPWorldFOV=70.0000
```

## **Part 2 - File Downloads**

1.) To start, below is a list of the mods that you will need to **MANUALLY DOWNLOAD**. If you are a stickler for organization, I have provided a folder format below that may suit you for organizing these mods as you download them

2.) Once these are all downloaded, go ahead and unzip them into their own folders and organize the folders at your discretion.

### **Root Folder Installs**

- [Starfield Script Extender](https://www.nexusmods.com/starfield/mods/106)
- [Baka Achievement Enabler](https://www.nexusmods.com/starfield/mods/658)
- [Starfield Upscaler](https://www.nexusmods.com/starfield/mods/111)
- [Upscaler Base Plugin](https://www.nexusmods.com/site/mods/502)
- [Starfield Optimizations](https://www.nexusmods.com/starfield/mods/104)

### **Data Folder Installs**

- [BetterHUD](https://www.nexusmods.com/starfield/mods/214)
- [StarUI Inventory](https://www.nexusmods.com/starfield/mods/773)
- [Smooth Ship Reticle](https://www.nexusmods.com/starfield/mods/270)

### **Texture Folder Installs**

- [Neutral LUT's](https://www.nexusmods.com/starfield/mods/323)


## **Part 3 - Root Folder Installs**

- All of these mods will be downloaded to the ROOT Starfield folder. This is commonly found at `C:\Program Files\Steam\SteamApps\common\Starfield\`
- If no special instructions are given, all the files given by these mods will be placed into the root folder
- DO NOT put the folders/zip archives into the root folder, but the files inside those folders

### **1.) Starfield Script Extender**

- [Link](https://www.nexusmods.com/starfield/mods/106)

1.) Copy the dll and exe files in to your Starfield folder. 

2.) Ignore the src folder. It is there for programmers only.

### **2.) Baka Achievement Enabler**

- [Link](https://www.nexusmods.com/starfield/mods/658)

### **3.) Starfield Upscaler & Upscaler Base Plugin**

- [Upscaler Link](https://www.nexusmods.com/starfield/mods/111)
- [Upscaler Base Link](https://www.nexusmods.com/site/mods/502)

1.) Extract this mod to your root folder

2.) Install the Upscaler Base plugin and place the PDPerfPlugin.dll into mods/UpscalerBasePlugin folder.

3.) You need to download nvngx_dlss.dll or libxess.dll, and place them into mods/UpscalerBasePlugin folder. The file you choose is dependent on which Graphics Card you have. 

- [DLSS - NVIDIA](https://www.techpowerup.com/download/nvidia-dlss-dll/)
> Make sure to download the latest 2.x version if you are using the free version of this plugin as it does not support 3.x

- [FSR2 - AMD](https://github.com/PureDark/FidelityFX-FSR2/releases/)
  
- [XeSS - Intel](﻿https://raw.githubusercontent.com/intel/xess/main/bin/libxess.dll)

4.) Press END in the game to open the menu for the upscaler, and you can select DLSS or XeSS.

5.) You need to turn on FSR2 in the game's settings, this mod replaces FSR2 with DLSS/XeSS.

### **4.) Starfield Performance Optimizations**

- [Link](https://www.nexusmods.com/starfield/mods/104)

1.) Choose the preset(s) you want when installing. If you want all of the presets, choose the All in One Pack

2.) Extract the files to your root folder, overwriting the files it asks you to.

## **Part 4 - Data Folder Installs**

- All of these mods will be downloaded to the ROOT Starfield folder. This is commonly found at `C:\Program Files\Steam\SteamApps\common\Starfield\Data`
- If no special instructions are given, all the files given by these mods will be placed into or overwrite the Data folder
- DO NOT put the folders/zip archives into the root folder, but the files inside those folders

### 1.) **StarUI - Inventory**

- [Link](https://www.nexusmods.com/starfield/mods/773)

1.) Copy the interface folder and paste it inside of your data folder
