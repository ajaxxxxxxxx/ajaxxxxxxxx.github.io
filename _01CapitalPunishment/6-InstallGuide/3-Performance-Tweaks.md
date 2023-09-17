---
layout: default
title: 3.) Performance Tweaks (Optional)
has_toc: true
parent: Optional Install Guides
nav_order: 3
description: How to Tweak Performance
---

## **Performance Tweaks**
This is a completely optional step and mainly intended for those who are experiencing frame rate issues. I do not feel confident enough in my knowledge regarding performance to type out a guide. I also do not want to directly rip off the hard work of Wall on this page. Therefore below you may find a link to Wall's guide; more specifically the FPS Limiter guide.

# **[Wall's Performance Guide](https://wallsogb.github.io/FalloutNV-Performance-Guide/#RecommendedLimiters)**

# **Installing NVHR**
- If NVHR has worked for you in the past, hasn't caused multiple Out of Memory Errors, or running Capital Punishment with NVHR is causing major performance hits, this section may be for you

1.) Manually download the latest NVHR from [here](https://www.nexusmods.com/newvegas/mods/69779?tab=files). Extract the zip file

2.) Drag all of the contents of the extracted folder into your Capital Punishment/Stock Game Directory. You now have NVHR installed.

### **Downgrade to NVHR 3.2**
- This is an optional troubleshooting step. If you would like to try and downgrade to an earlier version of NVHR to see if this provides better results for you, then follow this tutorial.

1.) Delete `d3dx9_38.dll` in `Capital Punishment/Stock Games`

2.) Delete the `NVHR` folder located in `Capital Punishment/Stock Games/Data`

3.) Manually Download NVHR 3.2 [Here](https://www.nexusmods.com/newvegas/mods/69779?tab=files&file_id=1000076606)

4.) Unzip the downloaded mod and run `CPU_info.exe` to determine which file preset you will be using

![image](https://user-images.githubusercontent.com/112358568/227371787-e6b23743-76de-4e20-bda5-ec65dd3f5ac3.png)

5.) Go to the folder it told you to in `CPU_info.exe`, copy and paste the d3dx9_38.dll from there into your `Capital Punishment/Stock Games` directory

6.) You may optionally put the d3dx9_38.tmp into the same directory above if you would like to see the black windows terminal. Helps to give you confirmation that it is loading up/other mods are loading correctly.
