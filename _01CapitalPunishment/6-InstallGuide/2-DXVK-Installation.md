---
layout: default
title: 2.) DXVK w/ Reshade Installation (Optional)
has_toc: true
parent: Optional Install Guides
nav_order: 2
description: How to Install DXVK w/ Reshade
---

## **What is DXVK?**

- DXVK (DirectX Vulkan) is a Vulkan-based translation layer for Direct3D 9, 10 and 11 that allows you to run 3D apps and games. We use it to run Fallout: New vegas through the DXVK API which has benefits of much lower drawcall overhead than D3D9, which is one of the main performance limiting factors in this game

{: .important}
> For more information on its functionality, whether your gpu supports this, and its application to New Vegas, [Wall's Guide](https://wallsogb.github.io/FalloutNV-Performance-Guide/#DXVK) is very informative

## **What Cards are Supported?**
- All RTX GPUs are supported, together with GeForce GTX 1660 with 6GB+ of memory and GeForce GTX 1060+ with 6GB+ of memory
> As previously stated, [Wall's Guide](https://wallsogb.github.io/FalloutNV-Performance-Guide/#DXVK) contains resources which will help determine if your Card is supported otherwise

## **DXVK Installation w/ Reshade Tutorial**
- When you download this pack, reshade is automatically installed, but it is for base New Vegas & not for DXVK implementation. This guide will take you through the steps of getting reshade setup for DXVK as well as installing DXVK

### Uninstalling The Current Reshade

1.) Go to the [Official Reshade Website](https://reshade.me) & Scroll to the bottom. Press **Download Reshade 5.7.0**. NOT THE ONE WITH FULL ADDON SUPPORT

![image](https://user-images.githubusercontent.com/112358568/223607908-c6101adc-464f-46e3-ad76-20e7659a08ca.png)

2.) Run the downloaded reshade exe. Click browse, then select your FalloutNV.exe in your Capital Punishment/Stock Games folder. Press open, then press next

![image](https://user-images.githubusercontent.com/112358568/223608054-545a21d9-408b-4878-8147-7145a64198e4.png)

![image](https://user-images.githubusercontent.com/112358568/223608123-f7a1099a-3336-4a61-929a-a60d2dbb3b00.png)

![image](https://user-images.githubusercontent.com/112358568/223608139-34e3e798-eabd-43e6-a098-afc069fec0ae.png)

![image](https://user-images.githubusercontent.com/112358568/223608195-0fdd1055-2b47-4e6e-ba83-e25fc80e722d.png)


3.) Choose whichever you want for this part of the tutorial as we are simply uninstalling the reshade we have on now. Press next, and when it asks you to Modify or Uninstall, press Uninstall. Then press next again. It will ask permission most likely, give it permission then a finish screen will pop up telling you Reshade has successfully been uninstalled

![image](https://user-images.githubusercontent.com/112358568/223608264-02771be4-2d3b-4644-b258-0a8e4e4863de.png)

![image](https://user-images.githubusercontent.com/112358568/223608323-ce8fcdfa-5724-4201-af1d-b48b70963904.png)

![image](https://user-images.githubusercontent.com/112358568/223608403-0be24a82-5861-4331-979a-b27be6351e4b.png)

### Installing Reshade w/ Vulkan Support

1.) Launch the Reshade exe again and like we did in the previous steps, find your FalloutNV.exe in your Stock Games/Capital Punishment folder. Select it, then press next. This time you HAVE to choose Vulkan. After doing so press next.

![image](https://user-images.githubusercontent.com/112358568/223608557-142c4a3c-8f37-4d2d-a0a6-f3743e302246.png)

2.) When it asks to select a preset to install, click browse. Inside of your Capital Punishment/Stock Games folder, look for tobiah.ini and open it. Press next when you've done this.

![image](https://user-images.githubusercontent.com/112358568/223608639-d9db28c2-1847-4d2d-acc5-487bd58997e4.png)

![image](https://user-images.githubusercontent.com/112358568/223608732-4e453e71-68ed-4fda-a367-aa5873f4635a.png)

3.) The next screen will be all of the shaders, textures, and other effects that are associated with this preset. Just press next past this. Once it is finished, press finish. Now to installing DXVK

![image](https://user-images.githubusercontent.com/112358568/223608826-202cdf8d-54c5-44ad-bd4c-198127ab4398.png)

![image](https://user-images.githubusercontent.com/112358568/223608886-28a11dd7-c3af-4598-afa1-398de9b0dda2.png)

### Installing DXVK/Control Overlay

1.) Go to your Capital Punishment/Game Folder FIles. Look for the folder labelled **DXVK**. Copy all of the contents of this into your Capital Punishment/Stock Games directory

![image](https://user-images.githubusercontent.com/112358568/223609061-d299b73f-1dbd-4179-b9ce-fce46f4a959e.png)

![image](https://user-images.githubusercontent.com/112358568/223609111-3d433ab7-7579-4a3a-b747-92082bbb81a8.png)

![image](https://user-images.githubusercontent.com/112358568/223609157-bf3fa47e-1228-4569-8884-b63a4f747058.png)


2.) Once that is done go back to Capital Punishment/Game Folder Files. Find DXVK Reshade Install Files, open it, and copy the Layer.png. Take this file and paste it into Capital Punishment/Stock Games/reshade-shaders/Textures and overwrite the existing Layer.png

![image](https://user-images.githubusercontent.com/112358568/223609319-80a11c24-f5aa-415f-9926-bcad1a6d29fb.png)

![image](https://user-images.githubusercontent.com/112358568/223609422-39081b6c-acd3-4c68-b477-283864246ef1.png)

3.) Now go to MO2, launch your game normally, and when you reach the main menu press the HOME button. Skip the tutorial.

![image](https://user-images.githubusercontent.com/112358568/223609658-a785392a-b8bc-49cc-812b-b6adcdc8f4ff.png)

4.) Go to the settings menu at the top of reshade. When you arrive, go to the keybinds section at the top and change "Next Preset Key" to the INSERT button on your keyboard. This will make it easier to switch to the control keybinds. Once you've done all of this, you can press home again to close the reshade menu. You should be good to go and your game should run 10x smoother.

![image](https://user-images.githubusercontent.com/112358568/223609712-3c78fe2c-6be4-481e-870b-e369cae7387e.png)

![image](https://user-images.githubusercontent.com/112358568/223609824-843642f6-892f-4c1f-bd8c-c86c08116179.png)

### Reverting back to regular reshade
- Whether it be due to compatibility or preference, switching back is pretty easy. Just follow the steps below.

1.) Follow the first portion of this guide again [Uninstalling The Current Reshade](https://www.modlists.net/01CapitalPunishment/6-InstallGuide/8-DXVK-Installation/#uninstalling-the-current-reshade). To uninstall Reshade. Then, go into your Stock games folder & delete D3D9.dll, DXVK LICENSE.md, & dxvk.conf

![image](https://user-images.githubusercontent.com/112358568/223610369-c61268f7-0ed4-4ab9-b1fc-ae88372f9c27.png)

2.) Go to Capital Punishment/Game Folder Files/Regular Reshade Files. Copy all of the contents of this and paste it into your Capital Punishment/Stock Games folder

![image](https://user-images.githubusercontent.com/112358568/223610484-ff8077c5-54d0-4eec-881f-a835b376be92.png)

![image](https://user-images.githubusercontent.com/112358568/223610554-00f326c1-edc5-43e9-bdd0-8b74415e1b28.png)

3.) You should now be reverted back to the base version of reshade that comes with this list

