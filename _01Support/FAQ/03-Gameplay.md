---
layout: default
title: Gameplay Questions
has_toc: true
parent: FAQ
nav_order: 3
description: Gameplay Questions
---

## **1.) Why can't I start in the Mojave?**

- **TL;DR at the end.** 

Our original intention with this collection was to utilize the alternate start mod for NV considering how in depth and how much roleplay it adds. Also we wanted to give the player the choice of NV or FO3. Sadly it wasn't compatible with TTW and the only one that really is is TTW Quickstart. This jumps you straight into the capital and at the end of the day, turned out to be what was best for how TTW/the mod list is balanced.

> TL;DR: Balancing and mod incompatibilities

## **2.) I feel like I start off extremely weak after leaving the Vault, why is that?**

To put it into perspective; You're an 18 year old kid who just jumped out of the Vault and the only gun you've held so far shoots BBs. You probably stand a chance again mutated rats and roaches and maybe a raider or two. However, until you start getting more proficient with weapons and building into your characters levels more, the world is going to punish you. If you feel like you've got to run away from a fight then you definitely should

## **3.) Why is the water messed up, blocky, and why can I see it through walls?**

This is caused by an improperly set up ENB. The ENB is no longer supported and is considered a modification of the modpack (which as well isnt supported)

## **4.) Where are the Sunset Sarsaparilla bottles during the tutorial? They aren't behind the building like usual.**

Look to your left. You won't be shooting at the building anymore

## **5.) How do I level up?**

Your character has to sleep to level up for more than 1 hour. If it doesn't work try sleeping again for more than 3 hours

## **6.) How do I fix the Tranquility Lane Bug?**

{: .note} 
> While this should be fixed, I have decided to include the Legacy Fix in the FAQ just in case of any future issues

- Saving while SetPCYoung 1 is in effect overrides the player's race's IsChild flag when you load that save so you're 'permanently' flagged as IsChild until the game engine resets/reloads.

- When you load the new save (even works when stuck in the lounger bc the game has already issued SetPCYoung 0) the player's IsChild flag will correctly have updated back to 0 (meaning you can now leave the lounger without needing to use any fix mods or console commands). 

- Effectively the bug occurs again, but in reverse - as evidenced by saves made and loaded BEFORE entering Tranquility lane returning IsChild >> 0 after entering but >> 1 after saving in TL then loading that save.

## **7.) How do I get the hit indicator out of the middle of my screen?**

To turn this off you can go to Just Mods in MCM, then turn off the Hit Indicator.
