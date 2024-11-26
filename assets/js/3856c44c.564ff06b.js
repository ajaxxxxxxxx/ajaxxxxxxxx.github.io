"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1335],{1392:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var n=t(5893),i=t(1151);const o={layout:"default",title:"Combat Extender and Game Mechanics and Balance Changes",nav_order:4,description:"Listonomicon"},s=void 0,r={id:"7listo/GameBalance",title:"Combat Extender and Game Mechanics and Balance Changes",description:"Listonomicon",source:"@site/docs/7listo/4-GameBalance.md",sourceDirName:"7listo",slug:"/7listo/GameBalance",permalink:"/docs/7listo/GameBalance",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{layout:"default",title:"Combat Extender and Game Mechanics and Balance Changes",nav_order:4,description:"Listonomicon"},sidebar:"tutorialSidebar",previous:{title:"Class, Feats, Features, Leveling, Character Creation and Customization, and other Gameplay Notes",permalink:"/docs/7listo/CharacterCreate"},next:{title:"Changes to Gameplay, Gear, QoL, Magic Items, Clothes, Armor, and Everything Else",permalink:"/docs/7listo/GameplayAndGear"}},l={},h=[{value:"Exhaustion",id:"exhaustion",level:2},{value:"New Encounters, Old Encounters, New-Old Encounters, and Old-New Encounters",id:"new-encounters-old-encounters-new-old-encounters-and-old-new-encounters",level:2},{value:"Game Balance and Combat Extender vs Extended Level Scale",id:"game-balance-and-combat-extender-vs-extended-level-scale",level:2},{value:"Specific Encounter Changes",id:"specific-encounter-changes",level:3},{value:"Party Size, Game Balance, and Performance",id:"party-size-game-balance-and-performance",level:2},{value:"Customized Custom Difficulty",id:"customized-custom-difficulty",level:2},{value:"Mod Configuration Menu",id:"mod-configuration-menu",level:2},{value:"Initiative",id:"initiative",level:2},{value:"Optional Difficulty Mods",id:"optional-difficulty-mods",level:2}];function d(e){const a={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"exhaustion",children:"Exhaustion"}),"\n",(0,n.jsx)(a.p,{children:'Characters will accumulate stacks of "Exhaustion" if they are downed, killed and revived, or spend a (cumulative) 16 turns in combat. They gain multiple stacks if they flee from combat. Characters remove 2 stacks of exhaustion by short resting, and 3 stacks by long resting. Exhaustion begins as a minor but noticeable debuff to maximum HP and movement speed, but increasing levels of Exhaustion are increasingly debilitating. You do not want to wait until a character is downed in Listo to heal them!'}),"\n",(0,n.jsx)(a.h2,{id:"new-encounters-old-encounters-new-old-encounters-and-old-new-encounters",children:"New Encounters, Old Encounters, New-Old Encounters, and Old-New Encounters"}),"\n",(0,n.jsx)(a.p,{children:"Listonomicon combines Encounters Overhaul (EO, formerly AEE), Vulkrana's Undead Encounters (VUE), Many More Monsters (MMM), and optional More Trash Monsters (MTM) with Combat Extender (CX) and optional Absolute Wrath (AW)."}),"\n",(0,n.jsx)(a.p,{children:"EO and VUE natively work together very well, and fill empty spaces in Act 1 and 2 (and 3, in VUE's case) with new and interesting encounters without overlapping each other. Where these mods add encounters to the very early game (on the way to, in, and around the Druids Grove, Nautiloid Crash, and Wither's Crypt), CX has been used to create ways for your party to win. By giving enemies various damage vulnerabilities or exploitable negative conditions or other limiting factors, balance has been restored so that a level 3 party should be able to do all very early game content (everything before the Blighted Village) with no or only minor route optimization. e.g. you do not need to worry about sneaking past an encounter on the beach and coming back to fight when you are stronger. The exception is the bonus skeleton encounter outside Wither's crypt, if you return to the crypt after clearing it and taking a long rest -- these skeletons can still mess up low level heroes! The Underdark, however, is more dangerous and should not be explored until the party is level 6+ and has accomplished most/all of the Grove storyline, beach, swamp, and goblin camp."}),"\n",(0,n.jsx)(a.p,{children:'MMM was never designed with EO and VUE in mind, and unfortunately this means many of the encounters it adds overlap heavily with EO and VUE. Furthermore, the design of many encounters still does require careful early game routing to avoid lopsided fights in ways that are hard to normalize against EO/VUE. For these reasons, Listo uses an MMM patch that heavily curtails the mod to the encounters that "fit" (in Ajax\'s judgement) with Listonomicon. This patch keeps encounters that overlap in good ways with EO/VUE, and it keeps some secret or enhanced boss fights (Gregg, though you may not recognize him!). Just like with EO/VUE, CX is used to normalize MMM with the rest of Listo - making some enemies tougher, making some enemies weaker, making Kuo-Toa silly, etc. MMM patching/testing is an active work in progress but mostly complete.'}),"\n",(0,n.jsx)(a.p,{children:"MTM integration will not be possible unless the original mod author (or a smarter patch maker) agrees to work with Listo. This mod remains optional, and should only be enabled by people who love BG3 combat and will not be bothered if two unrelated encounters overlap with each other. Or if high level monsters are added to low level areas. It's fun extra combat for combat lovers."}),"\n",(0,n.jsx)(a.h2,{id:"game-balance-and-combat-extender-vs-extended-level-scale",children:"Game Balance and Combat Extender vs Extended Level Scale"}),"\n",(0,n.jsxs)(a.p,{children:["With ",(0,n.jsx)(a.a,{href:"https://www.nexusmods.com/baldursgate3/mods/5207/?tab=description&topic_id=13712501",children:"Combat Extender"}),", enemies will have access to 5e and Homebrew spells, will fight smarter, and receive additional buffs to catch up/try to keep pace with exponential player power."]}),"\n",(0,n.jsxs)(a.p,{children:["Enemies receive proportional increases to HP according to the player\u2019s level. Their stats, AC, rolls, etc are improved proportional to their own level. This means all enemies are more dangerous (with higher level enemies being even more dangerous, and the few bosses over level 12 being especially dangerous) - but the player can, and will, still experience some amount of power fantasy as they eventually outpace the power of mook enemies. The goal of this enemy tuning is to keep combat interesting for longer, challenging players to consider their equipment, spells, and class features with more critical thinking than vanilla BG3. Bosses are especially enhanced, with many assigned direct manual tweaks to provide them with new abilities and sources of danger, while preserving (or adding) a path to victory such as a new critical weakness, a condition for players to exploit, etc. CX decisions are made on the assumption that players will honor Listonomicon\u2019s recommendation to ",(0,n.jsx)(a.strong,{children:"keep party size between 4 and 6 characters"}),", and ",(0,n.jsx)(a.strong,{children:"play on the custom difficulty settings described at the bottom of the List install instructions"})," (mostly tactician, with harder shopping and more food required for Long Rest), as well as explore all of the options they now have such as enhanced access to feats, new magic items for sale or found in the world, etc. Some of the new spells given to enemies can be quite nasty, but the most debilitating ones (like turn to stone, or AoE banish effects) should be limited to boss encounters like Nere and Balthazar. As a baseline, boss fights are tuned to be difficult, regular encounters should be less easy, and Larian has allowed us to enable honour mode rules (including anti damage rider cheese and enhanced enemy abilities) without the single save limit."]}),"\n",(0,n.jsx)(a.admonition,{type:"caution",children:(0,n.jsx)(a.p,{children:"You are expected to run away from some fights. Or assess your enemies, and choose to come back when you are prepared. Do not blindly run into every encounter! You will be challenged to pick your fights during Act 1 and will need to gather characters, gear, and levels to prepare for some enemies."})}),"\n",(0,n.jsx)(a.p,{children:"Combat should be surprising and challenging, not slow and tedious; please report enemies appearing with excess HP and AC. The one known flaw in how mods implement balance tweaks to Listonomicon is the manner in which NPCs are given extra damage: Split attacks, such as magic missile and ray of fire, will add this extra damage to each attack, much like the Agonizing Blast +cha damage bonus is added to each beam of Eldritch Blast. This can lead to unexpected, huge spikes of damage from enemy casters, especially in the early game. Focus fire on enemy mages! In addition, there are a small number of transforming enemies that interact in unpredictable ways with Combat Extender. Some gain too much HP, some don\u2019t get any bonus HP at all."}),"\n",(0,n.jsx)(a.p,{children:"Many manual entries have been made in Listo's Combat Extender config to cover various encounters added by mods. EO and VUE have received many Act 1 CX passes, and all modded Act 2 and 3 encounters are slowly being play tested and altered to make their experience consistent with the rest of Listonomicon. Check #combat-extender-tests-and-ideas on our Discord for the latest test config files and to discuss how to make CX better!"}),"\n",(0,n.jsx)(a.p,{children:"Many vanilla encounters have been significantly altered through the use of Combat Extender. Specific encounters in need of a punchup to stay relevant versus player power in Listonomicon have been tweaked, with some normal and many boss encounters being given feats, new spells, or the unique abilities of other creatures. Goblins, fae, Kuo-toa, and similar creatures with access to magic are now effectively wild magic sorcerers. Many beasts, goblins, hobgoblins, fae, and Kuo-toa are wild magic barbarians. Some enemies and creatures have become spellcasters. Be on your toes!"}),"\n",(0,n.jsx)(a.h3,{id:"specific-encounter-changes",children:"Specific Encounter Changes"}),"\n",(0,n.jsx)(a.p,{children:"Several fights in early Act 1 have been made easier to counteract the effects of CX. An unfortunate consequence of CX has been that players in earlier versions of Listo were forced to play an awkward order of encounters inconsistent with BG3's vanilla design. This rebalance will be thrown out if you choose to enable the optional More Trash Monsters mod. All enemies in the game have a 1% chance to be cloned, except bosses. Summoned creatures (such as familiars or goblin wargs) have a 5% chance to be cloned. Specific changes to make the game easier include:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"Commander Zhalk has several damage type weaknesses and reduced HP. However, the cambions that appear if you take too long during the Helm fight are able to move faster, and the hellsboar that appears when you approach the command console is slightly tougher, so it is more risk-reward to try to kill Zhalk to get his sword. He cannot be forced to drop it."}),"\n",(0,n.jsx)(a.li,{children:"Generally, a 3rd level party should be able to do everything that is available before the initial Grove fight (recruiting Astarion, Gale, Shadowheart, and Lae'zel, and finding Withers) and everything available immediately after the initial Grove fight (harpies, hobgoblin + kobolds at the Harper stash). Everything before the Blighted Village has been redone in CX with a 3rd level party in mind."}),"\n",(0,n.jsx)(a.li,{children:"The mindflayers added by EO and the vanilla intellect devourers found in the nautiloid crashsite have several damage vulnerabilities and reduced HP, making it easier to recruit Astarion before the Grove fight rather than forcing players to either delay recruiting him, or try to awkwardly sneak past the encounters."}),"\n",(0,n.jsx)(a.li,{children:"The harpies of the Grove are vulnerable to piercing and lightning damage."}),"\n",(0,n.jsx)(a.li,{children:"The Harper stash next to The Grove is a mini boss encounter, probably best saved for last before going to the Blighted Village. There is a hobgoblin boss and his hobgoblin henchmen, who are very dangerous. Then there is a handful of goblins, that are about as dangerous as the grove attackers. And finally there is a squad of kobold mooks who are only dangerous until they are seperated into individual cowards."}),"\n",(0,n.jsx)(a.li,{children:"The owlbear cave fight has been made significantly more possible for a 3rd or 4th level party. The extra owlbear added by EO has been turned into an owlbear teenager, effectively, and the momma owlbear is less tanky. You do not need to save this fight for late Act 1 anymore."}),"\n",(0,n.jsx)(a.li,{children:"The minotaur guarding the bridge added by EO is now like a weaker little brother to the minotaurs in the Underdark and much easier to fight."}),"\n",(0,n.jsx)(a.li,{children:"Withers Crypt and Blighted Village Act 1 undead encounters added by Valkrana's Undead Encounters are vulnerable to bludgeoning and radiant damage. The ghoul added by EO is vulnerable to radiant damage. The undead guarding Withers are vulnerable to radiant and bludgeoning damage."}),"\n",(0,n.jsx)(a.li,{children:"The Shar cultists added by EO guarding the puzzle path to the Underdark are nerfed. The two higher level enemies that are Living Shadows have sunlight hypersensitivity and are vulnerable to radiant damage. Their Living Shadow ability can also be overcome quite easily with minor critical thinking."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:['Almost every other fight in BG3 has been made harder, not easier. Across the board this is due to increases to HP and stats. In Act 2 and 3, enemies gain equivalent class features and feats similar to the choices players would make. e.g. enemy rogues gain better sneak attacks, take the Deadly Alacrity feat, etc. Generally, this is considered sufficient to keep Grymforge, Act "1.5" (the Creche), and Act 2 (Shadowcursed Lands) challenging. Act 3, however, is difficult to balance for a number of reasons. First, the vanilla game was designed for players to stop at Level 12 with a party size of 4, so late game content was never designed to be a challenge to level 16+ heroes in a group of 6. Second, the vanilla game was not designed for the sheer variety of options and synergy in classes, subclasses, feats, abilities, magic items, JWL trinkets, etc available to players by the time they reach the Lower City. Third, Listonomicon has to strike a balance that offers a fun and fair challenge to veteran players without making Act 3 an impossible jump in difficulty for anyone who did not optimize Act 1 and Act 2. Fourth, there is a general experienced Dungeon Master design philosophy that says sometimes you should just let players enjoy the power fantasy if they have earned it - while you need to throw dragons and eldritch horrors to challenge high level adventurers, you should also throw an army of mooks every now-and-then that players are able to kill with a single upcasted fireball. Fifth, Act 3 has a handful of fights where the challenge is ',(0,n.jsx)(a.em,{children:"not"})," the threat enemies pose to the player; the challenge is a time limit, or the threat to bystanders and NPCs, or other ways to challenge the player. An example scenario if this fifth point is forgotten: Rescuing Volo in Act 3. If the enemies in that fight were designed to be an appropriate challenge to level 20 adventurers, it is extremely likely that they would simply kill Volo on their first turn before the player even has a chance to react. That would not be a fun challenge, that would be a frustrating save scum situation. If Volo was made more powerful to compensate for extra dangerous enemies, then rescuing him loses the drama/risk. Listonomicon does not want to escalate an arms race of balancing friendly vs enemy NPCs vs the player if the point of the fight is not the challenge of the enemy NPCs. The sixth challenge is that simply throwing more encounters at players by filling every square inch of the map with something to fight has a bigger negative effect on the pace of the game than anything. It is important to preserve at least some of BG3's pace switching between combat, exploration, and roleplaying. Back to back to back fights broken up by long rests is a tedious pace for an RPG."]}),"\n",(0,n.jsx)(a.p,{children:"Now, with all of that context, note that the following fights are especially tweaked to be a challenge to the player:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"Several of the fights listed below have additional complications if Absolute Wrath is enabled."}),"\n",(0,n.jsx)(a.li,{children:"The Phase Spider Matriarch is immune to fall damage, is big, is bad, can cast spells, and loves to go invisible. A 4th or 5th level party can absolutely beat her, but you need to bring some combination of faerie fire, and spells or potions that let you see invisible creatures. Poison resistance is not a bad idea."}),"\n",(0,n.jsx)(a.li,{children:"The Paladins of Tyr (where you recruit Karlach) are much more dangerous. Anders is now an Oath of Conquest Paladin and can lock down your party with an AOE fear effect among other new abilities. Despite Karlach's complaints, you can recruit her and save this fight for later."}),"\n",(0,n.jsx)(a.li,{children:"Grym has been variously made more dangerous with abilities related to knocking you into lava or controlling the shape of the battlefield and limiting your mobility. More significantly, the magma mephits that spawn during the Grym fight are bigger, meaner versions of other magma mephits. When they spawn, you should adjust your focus to eliminate them as quickly as possible - or you may find them counterspelling you, casting heat metal, and generally being a nuisance. The only good news is that Grym has new elemental weaknesses, even without being superheated, giving you more ways to fight him than just bludgeoning damage and the forge hammer. Grym has ranged attacks to punish staircase cheese."}),"\n",(0,n.jsx)(a.li,{children:'The final Grove fight should be more challenging. If the players decide to team up with Minthara, they will find that several of the Grove\'s defender tieflings are now fighters, rangers, or barbarians (if, albeit, weak ones). If the players decide to team up against Minthara, they will find that her Grove attack force is much stronger with improved mobility, flammable explosive blood, some damage resistances, and new abilities. I have playtested this fight with a semi-optimized 5th level party and can reliably survive. Listo considers this the "right" way to fight Minthara, as knocking her out in the goblin camp is much easier but much, much less exciting. The fight has been play tested/balanced around a 6-member party, 5th level.'}),"\n",(0,n.jsx)(a.li,{children:"The EO gnoll fight near the Paladins of Tyr are a lot more difficult to cheese from range/height."}),"\n",(0,n.jsx)(a.li,{children:"Auntie Ethel is now even more dangerous to cast spells around."}),"\n",(0,n.jsx)(a.li,{children:'Balthazar, if the player chooses to fight him right away, should be a more forbidable encounter. His "Ghoul Medics" are now powerful healers, and Balthazar will always be healed with a maximized roll. Balthazar also generally has more spells at his disposal. Balthazar has AOE buffs for his allies, and his allies have AOE buffs for him and each-other.'}),"\n",(0,n.jsx)(a.li,{children:"The Myrkul bossfight has an enhanced Ketheric, enhanced Myrkul, and extra enemies added!"}),"\n",(0,n.jsx)(a.li,{children:"Starting in Act 3, many enemy archetypes have flat increases to outgoing damage."}),"\n",(0,n.jsx)(a.li,{children:"Carrion is a much more powerful necromancer than ever before."}),"\n",(0,n.jsxs)(a.li,{children:["Lorroakan is ",(0,n.jsx)(a.em,{children:"actually"})," a master wizard now (or at least much closer). He has several Elemental Adept feats, can recklessly cast AOE spells without harming his allies, has a better spell selection, and can cause a wild magic surge on anyone who casts a spell near him. He has more HP, and is generally less of a disappointment than his vanilla stats."]}),"\n",(0,n.jsx)(a.li,{children:"Sarevok is much more dangerous and able to go toe-to-toe with multiple enemies even while outnumbered. He has a minor health regen, dishes out multiple attacks per turn, and even when he dies he might not be dead without a crit or radiant damage."}),"\n",(0,n.jsx)(a.li,{children:"Ansur has a big heap of HP, Elemental Adept (Lightning), and generally much better survivability even when outnumbered by a 6-man party."}),"\n",(0,n.jsx)(a.li,{children:"Raphael himself has no direct buffs. But everyone else in the confrontation with him is much more dangerous! Each of his cambions are bigger and badder, and do something different. One is a wild magic barbarian, one is a giant barbarian, one is allergic to magic, one will smite you, etc. Korilla is now the chosen warlock of Raphael, and has the magical skills to back it up - including a spell list designed to be maximum annoying. She will silence, counterspell, and debuff your team while buffing, protecting, and healing her own. You may want to leave Hope outside."}),"\n",(0,n.jsx)(a.li,{children:"The final courtyard fight has an additional mummy, mindflayer, and spectator."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"party-size-game-balance-and-performance",children:"Party Size, Game Balance, and Performance"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Recommended party size is between 4 and 6. Use more companions at your peril. You set your party size with the ",(0,n.jsx)(a.a,{href:"https://www.nexusmods.com/baldursgate3/mods/11172?tab=description",children:"Mod Config Menu"})," (defaults to 6). It is better to use a bigger party in the early game (5-6 members) to help survive the initial struggle to get extra attack, magic items, a potion stockpile, etc. It is better to use a smaller party on the way to/in Act 3 (3-4 members) to help keep the game challenging, as well as to reduce the late game performance/FPS struggle."]}),"\n"]}),"\n",(0,n.jsx)(a.admonition,{type:"caution",children:(0,n.jsx)(a.p,{children:"Nothing stops you from filling your party with 12 characters. But this is detrimental to game performance and completely trivializes encounter difficulty.\nThe option for an unlimited party is convenient for ensuring story-relevant characters are available for the scenes and situations where you need them. It\u2019s also easier to juggle inventories around, compare stats, and other activities when you can add and remove a larger number of party members. However, even one extra party member is another action, bonus action, multiple gear slots, another opportunity to roll high on initiative, more healing or offensive spells, etc, added to your party\u2019s power in encounters. The game gets exponentially easier as the party size increases, and Combat Extender, Honour Mode, and other mods and game features can only do so much to counteract this phenomenon.\nTo this end, Listonomicon is recommended to play with 5 characters in the party. 3 or 4 for a challenge, 6 to make it easier. But it is up to you (and changing the party size in the mod configuration menu) to figure out how many (or how few) heroes is fun \u2013 and what your PC can handle. For example, my PC can survive most of the game with 6 heroes, but two necromancers who also summon four familiars and a beholderkin each leads to many CTDs. YMMV. If the game is feeling too easy, drop your party size and/or try enabling some of Listo\u2019s optional mods.\nYou can enable Sit This One Out 2 in Optional Mods if you want to maintain a large party, but make some companions unable to join combat."})}),"\n",(0,n.jsx)(a.admonition,{type:"warning",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://www.nexusmods.com/baldursgate3/mods/327",children:"Do not ride boats with more than 4 party members"}),". At this time, the only known game breaking bug caused by party size is riding the boats to Grymforge. If any characters get stuck, dismiss as many working characters as possible; ride the boat back to the UD; and then ride the boat back to Grymforge, and the missing characters should arrive safely in Grymforge. Sometimes characters will fall off elevators and other moving platforms in the game when you have too many members. The creche elevator has a hard time fitting everyone. Excess party members may fall off the moving platform in Shar's temple. All other level transitions I have tested work, so far."]})}),"\n",(0,n.jsx)(a.h2,{id:"customized-custom-difficulty",children:"Customized Custom Difficulty"}),"\n",(0,n.jsx)(a.p,{children:"Listonomicon\u2019s recommended custom difficulty settings have enemy aggression, power, and equipment set to \u201cTactician.\u201d The player gets no special bonuses to rolls and neither do enemies. Camp costs are tripled, meaning it requires 120 Food Units to long rest. Merchant prices are x4, and selling prices are 1/4. Nothing in the UI is hidden from the player such as NPC health or roll DC previews. The customized difficulty is just like you started a game on Tactician, with food and shopping made more difficult. If you plan to use Randomized Equipment Loot (optional mod), it may be a good idea to reduce the merchant price setting (decreases price to buy, increases profit to sell) to help balance out the unpredictable access to magic items and equipment."}),"\n",(0,n.jsx)(a.h2,{id:"mod-configuration-menu",children:"Mod Configuration Menu"}),"\n",(0,n.jsx)(a.p,{children:"When you pause the game, you should see a new option for the Mod Configuration Menu. If this button does not work, you can also hit \u201c;\u201d to open the MCM. The various (official) mods in Listo have already been configured to work together with each other and the rest of the list, and match the intended game experience. Some of the optional mods have preconfigured settings. Use this menu to edit settings further to your taste. If you decide that your character is walking too fast, or too slow; you don\u2019t like the config for auto loot seller; you want to disable all of the liquor being sent straight to your camp chest; or otherwise want to change settings, you can modify many mods in the MCM or find their config files in [listo install location]/mods/zzz_ListonomiconMOdSettings/SE_CONFIG. Make changes at your own peril!"}),"\n",(0,n.jsx)(a.h2,{id:"initiative",children:"Initiative"}),"\n",(0,n.jsxs)(a.p,{children:["Initiative in Listonomicon is calculated using a roll of d8+dex+bonuses. The vanilla calculation uses a d4 while the tabletop uses a d20. There are pros and cons to all three approaches. d8 was chosen to provide ",(0,n.jsx)(a.em,{children:"enough"})," randomness to prevent most characters from consistently \u201cbeating\u201d the initiative mechanic, while still enabling rogue (assassin)s, and other characters who heavily rely on going first to reasonably guarantee success with the Alert feat, high dex, and +init gear. You can change this using MCM."]}),"\n",(0,n.jsx)(a.h2,{id:"optional-difficulty-mods",children:"Optional Difficulty Mods"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Listo Hard Mode"}),': Enemy Stats has been pre-configured to establish a Listo "Hard Mode." Enable "OPTIONAL_Listo Hard Mode" at the bottom of MO2 if you dare. This will make all enemies arbitrarily more difficult. The goal of "Hard Mode" is NOT to make Listonomicon into a difficult game. It is to give people an option to make Listonomicon more difficult. It introduces bonuses to enemies that scale with the player\'s level. At player level 5, 10, 15, and 20, enemes will receive a +1 bonus to their stats (except constitution, which increases +2 per increment), rolls, and saving throws. These are cumulative across levels and synergistic between each other. e.g. at player level 15, enemies will have a total +3 to their Strength, and a +3 bonus to rolls, but strength will add to their melee rolls so the net bonus to their roll might be +4 or +5. At PL 3, 6, 9, 12, 15, and 18 enemies will receive 5% extra HP, cumulative with CX increased HP and increases to Constitution. At PL 6, 12, and 18, enemies will receive +1 AC, cumulative with any increases to their dexterity, and a +3 damage bonus.']}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://www.nexusmods.com/baldursgate3/mods/5552",children:"Absolute Wrath"})," is the patrician's choice for a more challenging, and more random, Listo experience. The mod ",(0,n.jsx)(a.em,{children:"randomly"})," assigns buffs, changes, and abilities to enemies (with some logic built in to avoid giving out the most powerful effects until the party reaches higher levels). These buffs range from mild (resistance to common damage types) to wild (explodes on death in a cloud that disarms and confuses anyone nearby while triggering a wild magic surge). Listo's CX config intentionally applies a number of curated choices from AW to various enemies; enabling Absolute Wrath will enable ",(0,n.jsx)(a.em,{children:"both"}),' the original purpose of the mod (random distribution of modifiers), and the part of Listo\'s CX config that hands out intentional, chosen AW modifiers. tl;dr even if no random effects are assigned in a particular fight, Listo will overall be harder - but consider this the "Wild Wasteland" experience.']}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://www.nexusmods.com/baldursgate3/mods/12485",children:"More Trash Monsters"})," adds more encounters to Act 1 that may or may not be balanced. ",(0,n.jsx)(a.a,{href:"https://www.nexusmods.com/baldursgate3/mods/5920",children:"Valkrana's Skeletal Challenge"})," adds randomly summoned undead to every single fight."]}),"\n",(0,n.jsx)(a.p,{children:'Other difficulty enhancing mods can be found under "I Wish The Game Was Harder." Note some optional mods will require you to fine tune settings to your liking via the MCM menu.'})]})}function c(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>r,a:()=>s});var n=t(7294);const i={},o=n.createContext(i);function s(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);