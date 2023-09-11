---
layout: default
title: Installation Guide
nav_order: 2
description: Abyssal Installation Guide
---

![requirements](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/9be3cd97-d22d-4f60-abfa-204a9c17a413)
- A Steam Copy of Starfield
- 2-3 GBs of Space (Not including your installation of Starfield)

![pt1](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/f4d1e08a-5f7b-40d9-aa1b-b7154578413c)


1.) Download one of the [StarfieldCustom.ini](https://www.nexusmods.com/starfield/mods/1817?tab=files) in our downloads section

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

![pt2](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/30fcb9c4-c4cd-4265-9671-c01455fc6c04)


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


![Part3](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/385cb951-f01a-45be-836f-6124031da68e)


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

![Part4](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/2caa8230-09a2-472d-b52c-87cabfb1adc6)

- All of these mods will be downloaded to the ROOT Starfield folder. This is commonly found at `C:\Program Files\Steam\SteamApps\common\Starfield\Data`
- If no special instructions are given, all the files given by these mods will be placed into or overwrite the Data folder
- DO NOT put the folders/zip archives into the root folder, but the files inside those folders

### 1.) **StarUI - Inventory**

- [Link](https://www.nexusmods.com/starfield/mods/773)

1.) Copy the interface folder and paste it inside of your data folder

### 2.) **BetterHUD**

- [Link](https://www.nexusmods.com/starfield/mods/214)

1.) Copy all files from inside this folder and paste within your data folder

### 3.) **Smooth Ship Reticle**

- [Link](https://www.nexusmods.com/starfield/mods/270)

1.) Overwrite your data folder with the provided data folder from the mod

![Part5](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/a7d17b33-cf73-4930-b4ee-f8c2bd349603)

- All of these mods will be downloaded to the TEXTURES Starfield folder. This is commonly found at `C:/Users/[User]/Documents/My Games/Starfield/Data/Textures`
- If no special instructions are given, all the files given by these mods will be placed into or overwrite the textures folder.
- DO NOT put the folders/zip archives into the root folder, but the files inside those folders

### **Neutral LUT's - No Color Filters**

- [Link](https://www.nexusmods.com/starfield/mods/323)

1.) Overwrite the textures folder with the one provided by the mod

![Part6](https://github.com/TheMrNewVegas/TheMrNewVegas.github.io/assets/112358568/598c6056-3cd7-46ca-bbf3-778d82dcb0c3)

- Now that you have finished the installation of all mods within this list, you are good to go!
- Make sure that when you run the game, you are running it from the sfse_loader.exe. If you dont do this, then some of this mods will not function properly.
