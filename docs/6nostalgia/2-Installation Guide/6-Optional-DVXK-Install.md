---
layout: default
title: 6. DXVK w/ Reshade Installation (Optional)
has_toc: true
parent: Installation Guide
nav_order: 6
description: How to install DXVK
---

## **What is DXVK?**

- DXVK (DirectX Vulkan) is a Vulkan-based translation layer for Direct3D 9, 10 and 11 that allows you to run 3D apps and games. We use it to run Fallout: New vegas through the DXVK API which has benefits of much lower drawcall overhead than D3D9, which is one of the main performance limiting factors in this game

> For more information on its functionality, whether your gpu supports this, and its application to New Vegas, [Wall's Guide](https://wallsogb.github.io/FalloutNV-Performance-Guide/#DXVK) is very informative

## **What Cards are Supported?**
- All RTX GPUs are supported, together with GeForce GTX 1660 with 6GB+ of memory and GeForce GTX 1060+ with 6GB+ of memory
> As previously stated, [Wall's Guide](https://wallsogb.github.io/FalloutNV-Performance-Guide/#DXVK) contains resources which will help determine if your Card is supported otherwise

## **DXVK Installation w/ Reshade Tutorial**
- When you download this pack, reshade is automatically installed, but it is for base New Vegas & not for DXVK implementation. This guide will take you through the steps of getting reshade setup for DXVK as well as installing DXVK

### Uninstalling The Current Reshade

1.) Go to the [Official Reshade Website](https://reshade.me) & Scroll to the bottom. Press **Download Reshade 5.9.2**. NOT THE ONE WITH FULL ADDON SUPPORT

![image](https://gyazo.com/afddc8671d3d73fa0cfae40fb175bb43)

2.) Run the downloaded reshade exe. Click browse, then select your FalloutNV.exe in your Nostalgia/Stock Games folder. Press open, then press next

![image](https://user-images.githubusercontent.com/112358568/223608054-545a21d9-408b-4878-8147-7145a64198e4.png)

![image](https://user-images.githubusercontent.com/112358568/223608123-f7a1099a-3336-4a61-929a-a60d2dbb3b00.png)

![image](https://i.gyazo.com/542416c847d5e65f6c70ce39229d8d4c.png)

![image](https://i.gyazo.com/83a92115c4be0c743f4c9a2f0c3706d3.png)


3.) Choose whichever you want for this part of the tutorial as we are simply uninstalling the reshade we have on now. Press next, and when it asks you to Modify or Uninstall, press Uninstall. Then press next again. It will ask permission most likely, give it permission then a finish screen will pop up telling you Reshade has successfully been uninstalled

![image](https://user-images.githubusercontent.com/112358568/223608264-02771be4-2d3b-4644-b258-0a8e4e4863de.png)

![image](https://user-images.githubusercontent.com/112358568/223608323-ce8fcdfa-5724-4201-af1d-b48b70963904.png)

![image](https://user-images.githubusercontent.com/112358568/223608403-0be24a82-5861-4331-979a-b27be6351e4b.png)

### Installing Reshade w/ Vulkan Support

1.) Launch the Reshade exe again and like we did in the previous steps, find your FalloutNV.exe in your Stock Games/Nostalgia folder. Select it, then press next. This time you HAVE to choose Vulkan. After doing so press next.

![image](https://user-images.githubusercontent.com/112358568/223608557-142c4a3c-8f37-4d2d-a0a6-f3743e302246.png)

2.) When it asks to select a preset to install, click browse. Inside of your Nostalgia/Stock Games folder, look for NostalgiaOverlay.ini and open it. Press next when you've done this.

![image](https://user-images.githubusercontent.com/112358568/223608639-d9db28c2-1847-4d2d-acc5-487bd58997e4.png)

![image](https://i.gyazo.com/3d125004beac85e9fb647ed3533495f6.png)

3.) The next screen will be all of the shaders, textures, and other effects that are associated with this preset. Just press next past this. Once it is finished, press finish. Now to installing DXVK

![image](https://user-images.githubusercontent.com/112358568/223608826-202cdf8d-54c5-44ad-bd4c-198127ab4398.png)

![image](https://user-images.githubusercontent.com/112358568/223608886-28a11dd7-c3af-4598-afa1-398de9b0dda2.png)

### Installing DXVK/Control Overlay

1.) Go to your Nostalgia/Game Folder FIles. Look for the folder labelled **DXVK**. Copy all of the contents of this into your Nostalgia/Stock Games directory

![image](https://i.gyazo.com/52c8f56e75b4538d5a592479ca6b12ad.png)

![image](https://i.gyazo.com/53adaf714d9843165d66a5d4adcc818b.png)

![image](https://i.gyazo.com/612c9412e6b5ce1b56fdc3aed5393d64.png)


2.) Once that is done go back to Nostalgia/Game Folder Files. Find DXVK Reshade Install Files, open it, and copy the Layer.png. Take this file and paste it into Nostalgia/Stock Games/reshade-shaders/Textures and overwrite the existing Overlay.png

![image](https://i.gyazo.com/ba114ddbc67ea8a5e29e5ece0ec4a7b8.png)

![image](https://i.gyazo.com/b7fdcccb6530407084a5ae6ffeb6e897.png)

3.) Now go to MO2, launch your game normally, and when you reach the main menu press the HOME button. Skip the tutorial.

![image](https://user-images.githubusercontent.com/112358568/223609658-a785392a-b8bc-49cc-812b-b6adcdc8f4ff.png)

4.) Go to the settings menu at the top of reshade. When you arrive, go to the keybinds section at the top and change "Next Preset Key" to the INSERT button on your keyboard. This will make it easier to switch to the control keybinds. Once you've done all of this, you can press home again to close the reshade menu. You should be good to go and your game should run 10x smoother.

![image](https://user-images.githubusercontent.com/112358568/223609712-3c78fe2c-6be4-481e-870b-e369cae7387e.png)

![image](https://user-images.githubusercontent.com/112358568/223609824-843642f6-892f-4c1f-bd8c-c86c08116179.png)

### Reverting back to regular reshade
- Whether it be due to compatibility or preference, switching back is pretty easy. Just follow the steps below.

1.) Follow the first portion of this guide again [Uninstalling The Current Reshade]. To uninstall Reshade. Then, go into your Stock games folder & delete D3D9.dll, DXVK LICENSE.md, & dxvk.conf

![image](https://user-images.githubusercontent.com/112358568/223610369-c61268f7-0ed4-4ab9-b1fc-ae88372f9c27.png)

2.) Go to Nostalgia/Game Folder Files/Regular Reshade Files. Copy all of the contents of this and paste it into your Nostalgia/Stock Games folder

![image](https://i.gyazo.com/97156b4d3b5d7db596e09c4fb7689e71.png)

![image](https://i.gyazo.com/99d49acb9a48154bde3e1819780173a0.png)

3.) You should now be reverted back to the base version of reshade that comes with this list

