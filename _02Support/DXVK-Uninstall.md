---
layout: default
title: DXVK Uninstall
nav_order: 5
description: How to Uninstall DXVK
---

## **What is DXVK?**

- DXVK (DirectX Vulkan) is a Vulkan-based translation layer for Direct3D 9, 10 and 11 that allows you to run 3D apps and games. We use it to run Fallout: New vegas through the DXVK API which has benefits of much lower drawcall overhead than D3D9, which is one of the main performance limiting factors in this game

{: .important}
> For more information on its functionality, whether your gpu supports this, and its application to New Vegas, [Wall's Guide](https://wallsogb.github.io/FalloutNV-Performance-Guide/#DXVK) is very informative

## **What Cards are Supported?**
- All RTX GPUs are supported, together with GeForce GTX 1660 with 6GB+ of memory and GeForce GTX 1060+ with 6GB+ of memory
> As previously stated, [Wall's Guide](https://wallsogb.github.io/FalloutNV-Performance-Guide/#DXVK) contains resources which will help determine if your Card is supported otherwise

## **How to Uninstall?**
- Go to your `Capital Punishment/Stock Game` folder
![image](https://user-images.githubusercontent.com/112358568/207145060-b823bdde-386e-4ee1-a228-b8a129129040.png)

- Delete `dxvk.dll` & `dxvk.conf`
![image](https://user-images.githubusercontent.com/112358568/207145130-31ad44f0-b345-413a-8eba-cc50615a0eee.png)

- If you plan to update, you will have to repeat these steps again if you don't want DXVK

