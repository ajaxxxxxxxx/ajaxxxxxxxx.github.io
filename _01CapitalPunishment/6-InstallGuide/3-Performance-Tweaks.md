---
layout: default
title: 3.) Performance Tweaks (Optional)
has_toc: true
parent: Install Guide
nav_order: 4
description: How to Tweak Performance
---

## **Performance Tweaks**
This is a completely optional step and mainly intended for those who are experiencing frame rate issues. I do not feel confident enough in my knowledge regarding performance to type out a guide. I also do not want to directly rip off the hard work of Wall on this page. Therefore below you may find a link to Wall's guide; more specifically the FPS Limiter guide.

# **[Wall's Performance Guide](https://wallsogb.github.io/FalloutNV-Performance-Guide/#RecommendedLimiters)**

## **NVHR Causing Severe Lag**
So while NVHR is an extremely useful tool, the most recent update has caused a few issues for some systems. With that in mind, we suggest two things.

### **1.) Remove NVHR All Together**
- Delete `d3dx9_38.dll` in `Capital Punishment/Stock Games`
- Delete the `NVHR` folder located in `Capital Punishment/Stock Games/Data`

### **2.) Downgrade to NVHR 3.2**
1.) Delete `d3dx9_38.dll` in `Capital Punishment/Stock Games`

2.) Delete the `NVHR` folder located in `Capital Punishment/Stock Games/Data`

3.) Manually Download NVHR 3.2 [Here](https://www.nexusmods.com/newvegas/mods/69779?tab=files&file_id=1000076606)

4.) Unzip the downloaded mod and run `CPU_info.exe` to determine which file preset you will be using

![image](https://user-images.githubusercontent.com/112358568/227371787-e6b23743-76de-4e20-bda5-ec65dd3f5ac3.png)

5.) Go to the folder it told you to in `CPU_info.exe`, copy and paste the d3dx9_38.dll from there into your `Capital Punishment/Stock Games` directory

6.) You may optionally put the d3dx9_38.tmp into the same directory above if you would like to see the black windows terminal. Helps to give you confirmation that it is loading up/other mods are loading correctly.
