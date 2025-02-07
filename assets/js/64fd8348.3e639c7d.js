"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6672],{3784:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=o(5893),i=o(1151);const a={layout:"default",title:"Installation Guide",nav_order:2,description:"Listonomicon"},s="Installation Guide",l={id:"7listo/Install",title:"Installation Guide",description:"Listonomicon",source:"@site/docs/7listo/2-Install.md",sourceDirName:"7listo",slug:"/7listo/Install",permalink:"/docs/7listo/Install",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{layout:"default",title:"Installation Guide",nav_order:2,description:"Listonomicon"},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/docs/7listo/Home"},next:{title:"Combat Extender, Game Mechanics, and Balance Changes",permalink:"/docs/7listo/GameBalance"}},r={},d=[{value:"<strong>Requirements</strong>",id:"requirements",level:2},{value:"Installing Microsoft Visual C++ and .NET",id:"installing-microsoft-visual-c-and-net",level:4},{value:"1.) Read Requirements",id:"1-read-requirements",level:3},{value:"2.) Basics",id:"2-basics",level:3},{value:"3.) Reinstall Baldur&#39;s Gate 3",id:"3-reinstall-baldurs-gate-3",level:3},{value:"3.) Preparing Your Listonomicon Folder",id:"3-preparing-your-listonomicon-folder",level:3},{value:"4.) Downloading the List",id:"4-downloading-the-list",level:3},{value:"5.) Preparing Steam",id:"5-preparing-steam",level:3},{value:"6.) Launching MO2",id:"6-launching-mo2",level:3},{value:"7.) In-Game Settings",id:"7-in-game-settings",level:3},{value:"8.) Customizing Listonomicon",id:"8-customizing-listonomicon",level:3},{value:"9.) Optional Mods",id:"9-optional-mods",level:3},{value:"10.) Optional Difficulty Tweaks",id:"10-optional-difficulty-tweaks",level:3},{value:"11.) Multiplayer",id:"11-multiplayer",level:3},{value:"12.) Cleanup (Optional)",id:"12-cleanup-optional",level:3}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"installation-guide",children:(0,n.jsx)(t.strong,{children:"Installation Guide"})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.h2,{id:"requirements",children:(0,n.jsx)(t.strong,{children:"Requirements"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"~ 38 GB of space for the modlist"}),"\n",(0,n.jsxs)(t.li,{children:["A legally obtained copy of Baldur's Gate 3 (while a Steam global copy is safest, any copy should do), ",(0,n.jsx)(t.strong,{children:"installed and launched vanilla from Steam at least once"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.wabbajack.org/",children:"Wabbajack"})}),"\n",(0,n.jsx)(t.li,{children:"A Nexus Account (Premium recommended; drastically increases install speed)"}),"\n"]})]}),"\n",(0,n.jsxs)(t.admonition,{type:"danger",children:[(0,n.jsx)(t.h4,{id:"installing-microsoft-visual-c-and-net",children:"Installing Microsoft Visual C++ and .NET"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"This is required."})}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Install ",(0,n.jsx)(t.a,{href:"https://aka.ms/vs/17/release/vc_redist.x64.exe",children:"Visual C++ x64"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Install ",(0,n.jsx)(t.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/8.0",children:".NET Runtime 8.X.X Desktop x64"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Install ",(0,n.jsx)(t.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-6.0.30-windows-x64-installer",children:".NET 6.0 Runtime Desktop x64"}),"."]}),"\n"]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/main/bol.png",alt:"Listonom"})}),"\n",(0,n.jsx)(t.h3,{id:"1-read-requirements",children:"1.) Read Requirements"}),"\n",(0,n.jsx)(t.p,{children:'Please scroll back up and read the "Installing Microsoft Visual C++ and .NET" warning. These prequisities are required for the MO2 plugin to work correctly.'}),"\n",(0,n.jsx)(t.h3,{id:"2-basics",children:"2.) Basics"}),"\n",(0,n.jsx)(t.p,{children:"At no point in installing Listo do you need to manually download Mod Organizer 2. A MO2 \"portable instance\" will come pre-packed in Listo's download from Wabbajack. There will be a Mod Organizer 2.exe in the folder where Listo is installed used to launch the portable instance just for Listo. There is no reason to install MO2 manually. You do not need the Baldur's Gate 3 Mod Manager, you do not need to download the BG3 Script Extender, and you do not need Vortex. MO2 does the old Mod Manager's job, script extender is pre-packaged with Listo, and the whole point of Wabbajack is to ditch Vortex."}),"\n",(0,n.jsx)(t.h3,{id:"3-reinstall-baldurs-gate-3",children:"3.) Reinstall Baldur's Gate 3"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Nuke BG3"})," (optional but ",(0,n.jsx)(t.em,{children:"highly recommended"}),"): Uninstall the game ",(0,n.jsx)(t.em,{children:"completely"}),", delete anything left of the install folder (e.g. D:/SteamLibrary/steamapps/common/Baldurs Gate 3), and delete the folder at %localappdata%\\Larian Studios. This is to ensure no errant files are leftover from previous playthroughs and is especially important for preventing data mismatches that will block multiplayer. Nuking everything improves the odds that Listo works as expected by providing a blank slate to build up from. Otherwise some files like an unwanted modsettings.lsx or gustavdev could interfere with Listo. This is especially true now with Mod.io integration and Larian's official mod manager services."]}),"\n",(0,n.jsx)(t.li,{children:"Also ensure that your new Baldur's Gate 3 is in a steam folder on the base of your drive (IE: C:/Steam/.../BaldursGate3) if possible, Wabbajack/MO2 might struggle if it is in a default Steam location like C:/program files(86)/Steam/.../BG3."}),"\n",(0,n.jsx)(t.li,{children:"Remove the BG3 Script Extender if you installed it manually (this should have happened with the nuking)."}),"\n",(0,n.jsx)(t.li,{children:"After reinstalling, launch the game (vanilla from Steam) once to regenerate all of the folders/paths that MO2 and BG3MM need. When you reach the main menu, quit and continue to Step 3."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"3-preparing-your-listonomicon-folder",children:"3.) Preparing Your Listonomicon Folder"}),"\n",(0,n.jsx)(t.p,{children:'Create a folder named Listonomicon somewhere on your PC, the closer to the root of the drive the better. For example, D:/Games/Listonomicon, or just D:/Listonomicon. When we discuss "Downloads" or "Mods" folders in the future, we mean [the drive with this folder]/Listonomicon/Downloads or [the drive with this folder]/Listonomicon/Mods. This folder is your Listo Install Location.'}),"\n",(0,n.jsx)(t.h3,{id:"4-downloading-the-list",children:"4.) Downloading the List"}),"\n",(0,n.jsx)(t.p,{children:'You can get a copy of Listonomicon.wabbajack from Nexus if you want/need to play an older version of the list for any reason. However, the correct method is to open Wabbajack and browse the mod gallery. Filter the list at the top to Baldur\'s Gate 3, look for Listonomicon, and hit the download icon. This will grab a copy of the .wabbajack file, and the download icon will become a play button. Click the play button. On the next screen, set the Modlist Installation Location to the Listonomicon folder you made in Step 2. "Resource Download Location" should automatically fill with "[Listo folder location]\\downloads."'}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["\"But wait, what if I don't want to download all 550+ Listonomicon mods? I want the gameplay changes, but I'm never going to use every new cosmetic option!\" In that case, you can manually download Listonomicon LITE.wabbajack from Nexus. ",(0,n.jsx)(t.strong,{children:'The "lite" version of Listo will be periodically updated to match major Listonomicon revisions, but will not be kept 1:1 up to date with Listo on a regular basis.'}),' Use Wabba\u2019s \u201cInstall from disk" option and select Listo Lite.wabbajack as your modlist.']})}),"\n",(0,n.jsx)(t.h3,{id:"5-preparing-steam",children:"5.) Preparing Steam"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Navigate to Steam -> Right click BG3 -> Properties -> Updates and change \u201cAutomatic Updates\u201d to \u201cOnly Update This Game When I Launch It.\u201d"}),"\n",(0,n.jsx)(t.li,{children:"Never launch the game via Steam, always launch it through Mod Organizer, to prevent updates from breaking the list and ending your playthrough. You may need to launch the game from Steam ONCE after a reinstall to make MO2 work."}),"\n",(0,n.jsx)(t.li,{children:"You may wish to disable cloud backup of save data, as well."}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Whichever patch/hotfix you start your playthrough, you should stay on until the end of your playthrough"}),"!"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"BG3 is still receiving Patches (major updates) and Hotfixes (small updates). These updates tend to introduce new bugs and issues to the game that may be difficult to distinguish from issues caused by mods (either with the list, or mods broken by updates). Major updates can also break Script Extender functionality, etc etc. This is why it is highly recommended to disable automated updates."})}),"\n",(0,n.jsx)(t.h3,{id:"6-launching-mo2",children:"6.) Launching MO2"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Your portable instance of Mod Organizer 2 should be ready as soon as Wabbajack is done. Look for ModOrganizer.exe in the folder where you installed Listonomicon. You can verify that everything is working by ensuring that MO2 has defaulted to the correct profile at the top-left, which should be Listonomicon."}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Your total number of active mods should be 611, and the purple seperator at the top should say Listonomicon v3.y. For Listo Lite, your total active mods should be 412 and the seperator should say Listonomicon v3.6 Lite."})}),"\n",(0,n.jsx)(t.li,{children:"At the top-right, you should be able to switch the program to launch the Vulkan or dx11 version of the game."}),"\n",(0,n.jsx)(t.li,{children:'Hit "run" after selecting the EXE that works best for your system. Always launch the game this way (don\'t use Steam).'}),"\n",(0,n.jsx)(t.li,{children:'You can verify Listo\'s mods are all loaded correctly after install by clicking on the official mod manager and looking at the installed mods tab. Is there a long list with almost everything enabled? Good. Some mods, like overwrites to text, will not show as "Enabled" but will still be working ifne.'}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"7-in-game-settings",children:"7.) In-Game Settings"}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["You must change ",(0,n.jsx)(t.strong,{children:"Animation Level of Detail"})," to ",(0,n.jsx)(t.strong,{children:"High"})," in your Visual Settings. Otherwise, any heads added or changed by mods will suffer from visual bugs and animation issues. Any/all other graphics settings can be changed according to your PC specs."]})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.em,{children:["You should begin a new game on ",(0,n.jsx)(t.strong,{children:"Custom Difficulty"})]})," to have the same experience Listonomicon was play tested for. When starting a new campaign, navigate to the right to select Custom Difficulty (it's after Honour Mode). Hit \"Restore Default\" at the bottom-right in the Custom Difficulty menu, all options should update to Listo's intended settings. The only exception is that ",(0,n.jsx)(t.strong,{children:"you must manually change the ruleset from Normal to Honour, at the top of Custom Difficulty"}),". If you do not enable the Honour Ruleset, you will not be able to change it during your campaign. Many intended features of Listo will not work, and you will be unable to equip magic items."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:['Please remember to hit "Custom Difficulty" ',(0,n.jsx)(t.strong,{children:"and set the ruleset at the top to Honour Mode"}),". This is the only difficulty setting that cannot be changed mid-campaign and you will not have the intended experience without HM's changes to enemies, mechanics, and game rules."]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/main/custom%20settings.png",alt:"Difficulty Settings"})}),"\n",(0,n.jsx)(t.p,{children:"Per the image above, your difficulty settings should be as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Ruleset: Honour"}),"\n",(0,n.jsx)(t.li,{children:"Enemy Aggression, Character Power, Enemy Loadouts, Additional Combat Mechanics: Tactician"}),"\n",(0,n.jsx)(t.li,{children:"Camp Cost Multiplier: 3. I have never found food to be any kind of limit by the time I reach Wuakeen's Rest. With the changes in Listo's economy, you should consider selling expensive food and alcohol; leaving this multiplier on 3 is to prevent you from selling ALL food and should not be reduced even if looking for an easier game."}),"\n",(0,n.jsx)(t.li,{children:"Trader Price Modificer: 4. This heavily influences the buying and sell price of everything. Maxing out the setting is not just about difficulty, it's about fighting against hyperinflation in Faerun's economy caused by all the new loot and magic items in Listo. If adjusting settings for an easier game, do not reduce this further than x3.5 or you will be swimming in so much gold that it completely trivializes the game."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"If you do not enable the Honour Ruleset at the top"})," you will not be able to equip magic items. This is a built-in feature to punish you for not reading the instructions."]}),"\n",(0,n.jsx)(t.h3,{id:"8-customizing-listonomicon",children:"8.) Customizing Listonomicon"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"No support is offered or guaranteed for anyone who modifies the behavior or contents of Listonomicon."})," But we hope that Listo provides a fun, stable foundation to add your favorite mods to :)"]}),"\n",(0,n.jsx)(t.h3,{id:"9-optional-mods",children:"9.) Optional Mods"}),"\n",(0,n.jsx)(t.p,{children:"There are several optional mods packaged with Listonomicon to enable even more fun, whacky, QoL, random, or challenge features. No official support is offered for adding any other mods to Listonomicon. You can find optional mods in MO2 by typing OPTIONAL_ into the search bar at the bottom-right of your mod list. Hover over the notepad icon to the right of the mod's name to read any notes relevant to enabling that mod, such as other mods that need to be enabled or disabled with it. If enabling/disabling optional mods does not seem to do anything, try closing MO2 and going to [listo install location]/profiles/listonomicon. Delete the ModsCache file and modsettings.lsx. Next time you launch the game it will take a long time to load as it rebuilds your mod list, and then should work as normal."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://raw.githubusercontent.com/Listonomicon-Team/Listonomicon/refs/heads/main/optional%20mods2.png",alt:"Optional Mod Example"})}),"\n",(0,n.jsxs)(t.p,{children:["Optional mods are broken out into a few categories:\n",(0,n.jsx)(t.strong,{children:"1. RECOMMENDED Optional Tweaks"})," are mostly those that Ajax enables when playing Listo, such as Absolute Wrath.\n",(0,n.jsx)(t.strong,{children:"2. TESTED Optional Tweaks and QoL"})," are mods that are known to work in/with Listo well, but come with minor issues (like new encounter mods that overlap with other encounter mods) or is a QoL fix that not all players need (like Sit This One Out).\n",(0,n.jsx)(t.strong,{children:"3. HARDER Optional Tweaks"})," are focused just on difficulty and challenge. These are solutions for players who find Listo too easy but are not considered when playtesting and tweaking Listo.\n",(0,n.jsx)(t.strong,{children:"4. SILLY Optional Tweaks"})," are fun, funny, or whacky mods that work with Listo but are unbalanced, or too goofy, or fall too far outside the scope of the List's goals, or has other glaring issues (like Gortash as a Dragonborn, it's a great mod idea but his lipsync breaks in a very distracting way).\n",(0,n.jsx)(t.strong,{children:"5. Other"})," There are optional mods peppered throughout other sections of MO2, not just organized at the bottom, because in order to work properly they need to be placed in a particular section of your load order. The easiest way to find these (rather than sift through 600+ mods) is to use the search bar at the bottom-right of MO2 and type OPTIONAL_."]}),"\n",(0,n.jsx)(t.h3,{id:"10-optional-difficulty-tweaks",children:"10.) Optional Difficulty Tweaks"}),"\n",(0,n.jsx)(t.p,{children:"If Listo is too hard, and you'd actually have more fun if it was a little easier, you can make two changes:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"In Custom Difficulty settings, reduce the trade price penalty to x3-x3.5. If you reduce it too much, buying prices become too low and the economy really falls apart. You can reduce the long rest camp supply cost to a lower number, whatever you want."}),"\n",(0,n.jsx)(t.li,{children:"Navigate to [Listo Install Location]\\mods\\zzz_ListonomiconModSettings\\SE_CONFIG. Rename CombatExtender.json to something else (like CombatExtender.json.backup) and rename Easy CombatExtender.json to CombatExtender.json. This will cause the game to load an alternate, relaxed CX configuration. The alt file will still be more difficult than vanilla BG3 and include new, tweaked, and changed enemies - but the size of the tweaks is much less dramatic with lower health, AC, attack rolls, and saving throw DC for enemies across the board."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If Listo is not hard enough,"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'Enable Absolute Wrath (search "OPTIONAL_Absolute Wrath" or look in the optional tweaks section of MO2).'}),"\n",(0,n.jsx)(t.li,{children:"If that isn't hard enough, navigate to [Listo Install Location]\\mods\\zzz_ListonomiconModSettings\\SE_CONFIG. Rename CombatExtender.json to something else (like CombatExtender.json.backup) and rename Hard CombatExtender.json to CombatExtender.json. This will cause the game to load an alternate, unrelaxed CX configuration. The alt file has more enemy health, more enemy buffs, and more cruel combinations of spells and abilities and features."}),"\n",(0,n.jsx)(t.li,{children:"If that still isn't hard enough, enable OPTIONAL_Listo Hard Mode in MO2. OPTIONAL_Listo Hard Mode uses the Enemy Stats mod to increase enemy attributes and HP for every 5 character levels, on top of the tweaks from Combat Extender, and/or Absolute Wrath."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"11-multiplayer",children:"11.) Multiplayer"}),"\n",(0,n.jsx)(t.p,{children:"(written by Kmnder, edited by Ajax)"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["After installing Listonomicon, if enabling custom or optional mods, the host should generate a fresh ModsCache/ModSettings.lsx and share it with all other players to guarantee BG3 loads the same mods, in the same order. Have ",(0,n.jsx)(t.strong,{children:"all players start a new game"})," (",(0,n.jsx)(t.a,{href:"https://www.modlists.net/docs/7listo/Install#7-in-game-settings",children:"with the same custom game rules as what is in Listo's install instructions"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["Once that is done, have all the players that are going to join finish their dummy characters so they start on the ship (click through character creation, don't bother making any choices, you just need to get to the start of the game). ",(0,n.jsx)(t.strong,{children:"Save"}),". The host should make the real character they intend to play."]}),"\n",(0,n.jsx)(t.li,{children:"The Host then invites all players. When joining, players will be able to make their real characters they intend to play."}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Every time"})," you want to continue COOP, everyone should load their dummy save. Once everyone has loaded in, the Host invites everyone to the same game."]}),"\n",(0,n.jsx)(t.li,{children:"Kmnder: I\u2019ve invited through clicking multiplayer+ and then steam inviting. But it\u2019s worked 100% of the time so far."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"12-cleanup-optional",children:"12.) Cleanup (Optional)"}),"\n",(0,n.jsxs)(t.p,{children:["If you are desperate to restore some space on your hard drive after installing Listo, you can go to [Listo Install Location]/downloads and delete everything to cut Listo's size. Note, however, that if you ever want to update Listo that Wabbajack will have to re-download ",(0,n.jsx)(t.em,{children:"everything"})," again rather than just updated and new mods."]})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>s});var n=o(7294);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);