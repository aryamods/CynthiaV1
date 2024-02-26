//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return `
┌─「 *OWNER MENU* 」
│ ❏${prefix}autoread 
│ ❏${prefix}autobio 
│ ❏${prefix}autotype 
│ ❏${prefix}unavailable 
│ ❏${prefix}autorecord 
│ ❏${prefix}autorecordtype 
│ ❏${prefix}autoswview 
│ ❏${prefix}setautoblock 
│ ❏${prefix}setantiforeign 
│ ❏${prefix}autoblock 
│ ❏${prefix}onlygc 
│ ❏${prefix}onlypc 
│ ❏${prefix}onlyindia 
│ ❏${prefix}onlyindo 
│ ❏${prefix}anticall 
│ ❏${prefix}self 
│ ❏${prefix}public 
│ ❏${prefix}join 
│ ❏${prefix}poll 
│ ❏${prefix}bc 
│ ❏${prefix}bcgroup 
│ ❏${prefix}setmenu 
│ ❏${prefix}setimgmenu 
│ ❏${prefix}setvidmenu 
│ ❏${prefix}setgifmenu 
│ ❏${prefix}setreply 
│ ❏${prefix}setprefix 
│ ❏${prefix}addlimit 
│ ❏${prefix}dellimit 
│ ❏${prefix}resethit 
│ ❏${prefix}resetuser 
│ ❏${prefix}creategc 
│ ❏${prefix}setexif 
│ ❏${prefix}userjid 
│ ❏${prefix}setbotbio 
│ ❏${prefix}delppbot 
│ ❏${prefix}shutdown 
│ ❏${prefix}setppbot 
│ ❏${prefix}addprem 
│ ❏${prefix}delprem 
│ ❏${prefix}addowner 
│ ❏${prefix}delowner 
│ ❏${prefix}addvn 
│ ❏${prefix}addapk 
│ ❏${prefix}addzip 
│ ❏${prefix}addpdf 
│ ❏${prefix}delapk 
│ ❏${prefix}delzip 
│ ❏${prefix}delpdf 
│ ❏${prefix}delvn 
│ ❏${prefix}addsticker 
│ ❏${prefix}delsticker 
│ ❏${prefix}addimage 
│ ❏${prefix}delimage 
│ ❏${prefix}addvideo 
│ ❏${prefix}delvideo 
│ ❏${prefix}addtitle 
│ ❏${prefix}deltitle 
│ ❏${prefix}upswtext 
│ ❏${prefix}upswvideo 
│ ❏${prefix}upswimage 
│ ❏${prefix}upswaudio 
│ ❏${prefix}block 
│ ❏${prefix}unblock 
│ ❏${prefix}leavegc 
│ ❏${prefix}pushcontact 
│ ❏${prefix}pushcontactv2 
└────────────────────

┌─「 *OWNER MENU* 」
│ ❏${prefix}antibot 
│ ❏${prefix}antiviewonce 
│ ❏${prefix}welcome 
│ ❏${prefix}adminevent 
│ ❏${prefix}groupevent 
│ ❏${prefix}antiforeign 
│ ❏${prefix}antimedia 
│ ❏${prefix}antiaudio 
│ ❏${prefix}antivideo 
│ ❏${prefix}antiimage 
│ ❏${prefix}antidocument 
│ ❏${prefix}antilocation 
│ ❏${prefix}anticontact 
│ ❏${prefix}antisticker 
│ ❏${prefix}antipoll 
│ ❏${prefix}antilink 
│ ❏${prefix}antilinkgc 
│ ❏${prefix}antivirtex 
│ ❏${prefix}grouplink 
│ ❏${prefix}listadmin 
│ ❏${prefix}invite 
│ ❏${prefix}ephemeral 
│ ❏${prefix}delete 
│ ❏${prefix}setppgroup 
│ ❏${prefix}delppgroup 
│ ❏${prefix}setnamegc 
│ ❏${prefix}setdesc 
│ ❏${prefix}add 
│ ❏${prefix}kick 
│ ❏${prefix}promote 
│ ❏${prefix}demote 
│ ❏${prefix}getcontact 
│ ❏${prefix}savecontact 
│ ❏${prefix}sendcontact 
│ ❏${prefix}contactag 
│ ❏${prefix}hidetag 
│ ❏${prefix}totag 
│ ❏${prefix}tagall 
│ ❏${prefix}editinfo 
│ ❏${prefix}opentime 
│ ❏${prefix}closetime 
│ ❏${prefix}resetlink 
│ ❏${prefix}getbio 
│ ❏${prefix}vote 
│ ❏${prefix}upvote 
│ ❏${prefix}downvote 
│ ❏${prefix}checkvote 
│ ❏${prefix}delvote 
│ ❏${prefix}autostickergc 
│ ❏${prefix}antivirus 
│ ❏${prefix}antitoxic 
│ ❏${prefix}nsfw 
│ ❏${prefix}react 
└────────────────────

┌─「 *DOWNLOAD MENU* 」
│ ❏${prefix}ytsearch 
│ ❏${prefix}play 
│ ❏${prefix}ytmp3 
│ ❏${prefix}ytmp4 
│ ❏${prefix}tiktokaudio 
│ ❏${prefix}tiktok 
│ ❏${prefix}igvideo 
│ ❏${prefix}igimage 
│ ❏${prefix}facebook 
│ ❏${prefix}mediafire 
│ ❏${prefix}google 
│ ❏${prefix}imdb 
│ ❏${prefix}weather 
│ ❏${prefix}wanumber 
│ ❏${prefix}spotify 
│ ❏${prefix}gitclone 
│ ❏${prefix}happymod 
│ ❏${prefix}gdrive 
│ ❏${prefix}pinterest 
│ ❏${prefix}ringtone 
└────────────────────

┌─「 *RANDOM VIDEO MENU* 」
│ ❏${prefix}tiktokgirl 
│ ❏${prefix}tiktoknukthy 
│ ❏${prefix}tiktokkayes 
│ ❏${prefix}tiktokpanrika 
│ ❏${prefix}tiktoknotnot 
│ ❏${prefix}tiktokghea 
│ ❏${prefix}tiktoksantuy 
│ ❏${prefix}tiktokbocil 
└────────────────────

┌─「 *STALKER MENU* 」
│ ❏${prefix}igstalk 
│ ❏${prefix}tiktokstalk 
│ ❏${prefix}mlstalk 
│ ❏${prefix}npmstalk 
│ ❏${prefix}ghstalk 
└────────────────────

┌─「 *AI MENU* 」
│ ❏${prefix}openai 
│ ❏${prefix}dalle 
│ ❏${prefix}cyhntia 
│ ❏${prefix}remini 
└────────────────────

┌─「 *FUN MENU* 」
│ ❏${prefix}define 
│ ❏${prefix}lyrics 
│ ❏${prefix}suit 
│ ❏${prefix}math 
│ ❏${prefix}tictactoe 
│ ❏${prefix}fact 
│ ❏${prefix}truth 
│ ❏${prefix}dare 
│ ❏${prefix}couple 
│ ❏${prefix}soulmate 
│ ❏${prefix}stupidcheck 
│ ❏${prefix}handsomecheck 
│ ❏${prefix}uncleancheck 
│ ❏${prefix}hotcheck 
│ ❏${prefix}smartcheck 
│ ❏${prefix}greatcheck 
│ ❏${prefix}evilcheck 
│ ❏${prefix}dogcheck 
│ ❏${prefix}coolcheck 
│ ❏${prefix}waifucheck 
│ ❏${prefix}awesomecheck 
│ ❏${prefix}gaycheck 
│ ❏${prefix}cutecheck 
│ ❏${prefix}lesbiancheck 
│ ❏${prefix}hornycheck 
│ ❏${prefix}prettycheck 
│ ❏${prefix}lovelycheck 
│ ❏${prefix}uglycheck 
│ ❏${prefix}pick 
│ ❏${prefix}pickupline 
│ ❏${prefix}quotes 
│ ❏${prefix}can 
│ ❏${prefix}is 
│ ❏${prefix}when 
│ ❏${prefix}where 
│ ❏${prefix}what 
│ ❏${prefix}how 
│ ❏${prefix}rate 
│ ❏${prefix}cry 
│ ❏${prefix}kill 
│ ❏${prefix}hug 
│ ❏${prefix}pat 
│ ❏${prefix}lick  
│ ❏${prefix}kiss 
│ ❏${prefix}bite 
│ ❏${prefix}yeet 
│ ❏${prefix}bully 
│ ❏${prefix}bonk 
│ ❏${prefix}wink 
│ ❏${prefix}poke 
│ ❏${prefix}nom 
│ ❏${prefix}slap 
│ ❏${prefix}smile  
│ ❏${prefix}wave 
│ ❏${prefix}awoo 
│ ❏${prefix}blush 
│ ❏${prefix}smug 
│ ❏${prefix}glomp  
│ ❏${prefix}happy 
│ ❏${prefix}dance 
│ ❏${prefix}cringe 
│ ❏${prefix}cuddle 
│ ❏${prefix}highfive  
│ ❏${prefix}shinobu 
│ ❏${prefix}handhold 
│ ❏${prefix}spank 
│ ❏${prefix}tickle 
│ ❏${prefix}avatar 
│ ❏${prefix}feed 
│ ❏${prefix}fox_girl 
│ ❏${prefix}gecg 
│ ❏${prefix}checkme 
│ ❏${prefix}sound1 - sound161 
└────────────────────

┌─「 *RANDOM PHOTO MENU* 」
│ ❏${prefix}aesthetic 
│ ❏${prefix}coffee 
│ ❏${prefix}wikimedia 
│ ❏${prefix}wallpaper 
│ ❏${prefix}art 
│ ❏${prefix}bts 
│ ❏${prefix}dogwoof 
│ ❏${prefix}catmeow 
│ ❏${prefix}lizardpic 
│ ❏${prefix}goosebird 
│ ❏${prefix}8ballpool 
│ ❏${prefix}cosplay 
│ ❏${prefix}hacker 
│ ❏${prefix}cyber 
│ ❏${prefix}gamewallpaper 
│ ❏${prefix}islamic 
│ ❏${prefix}jennie 
│ ❏${prefix}jiso 
│ ❏${prefix}satanic 
│ ❏${prefix}justina 
│ ❏${prefix}cartoon 
│ ❏${prefix}pentol 
│ ❏${prefix}cat 
│ ❏${prefix}kpop 
│ ❏${prefix}exo 
│ ❏${prefix}lisa 
│ ❏${prefix}space 
│ ❏${prefix}car 
│ ❏${prefix}technology 
│ ❏${prefix}bike 
│ ❏${prefix}shortquote 
│ ❏${prefix}antiwork 
│ ❏${prefix}hacking 
│ ❏${prefix}boneka 
│ ❏${prefix}rose 
│ ❏${prefix}ryujin 
│ ❏${prefix}ulzzangboy 
│ ❏${prefix}ulzzanggirl 
│ ❏${prefix}wallml 
│ ❏${prefix}wallphone 
│ ❏${prefix}mountain 
│ ❏${prefix}goose 
│ ❏${prefix}profilepic 
│ ❏${prefix}couplepp 
│ ❏${prefix}programming 
│ ❏${prefix}pubg 
│ ❏${prefix}blackpink 
│ ❏${prefix}randomboy   
│ ❏${prefix}randomgirl 
│ ❏${prefix}hijab   
│ ❏${prefix}chinese 
│ ❏${prefix}indo 
│ ❏${prefix}japanese 
│ ❏${prefix}korean 
│ ❏${prefix}malay 
│ ❏${prefix}thai 
│ ❏${prefix}vietnamese 
└────────────────────

┌─「 *Sticker MENU* 」
│ ❏${prefix}goose 
│ ❏${prefix}woof 
│ ❏${prefix}8ball 
│ ❏${prefix}lizard 
│ ❏${prefix}meow 
│ ❏${prefix}gura 
│ ❏${prefix}doge 
│ ❏${prefix}patrick 
│ ❏${prefix}lovestick 
│ ❏${prefix}telestick 
└────────────────────

┌─「 *ANIME MENU* 」
│ ❏${prefix}akira 
│ ❏${prefix}akiyama 
│ ❏${prefix}ana 
│ ❏${prefix}asuna 
│ ❏${prefix}ayuzawa 
│ ❏${prefix}boruto 
│ ❏${prefix}chiho 
│ ❏${prefix}chitoge 
│ ❏${prefix}cosplayloli 
│ ❏${prefix}cosplaysagiri 
│ ❏${prefix}deidara 
│ ❏${prefix}doraemon 
│ ❏${prefix}elaina 
│ ❏${prefix}emilia 
│ ❏${prefix}erza 
│ ❏${prefix}gremory 
│ ❏${prefix}hestia 
│ ❏${prefix}husbu 
│ ❏${prefix}inori 
│ ❏${prefix}isuzu 
│ ❏${prefix}itachi 
│ ❏${prefix}itori 
│ ❏${prefix}kaga 
│ ❏${prefix}kagura 
│ ❏${prefix}kakasih 
│ ❏${prefix}kaori 
│ ❏${prefix}keneki 
│ ❏${prefix}kotori 
│ ❏${prefix}kurumi 
│ ❏${prefix}loli 
│ ❏${prefix}madara 
│ ❏${prefix}megumin 
│ ❏${prefix}mikasa 
│ ❏${prefix}mikey 
│ ❏${prefix}miku 
│ ❏${prefix}minato 
│ ❏${prefix}naruto 
│ ❏${prefix}neko 
│ ❏${prefix}neko2 
│ ❏${prefix}nekonime 
│ ❏${prefix}nezuko 
│ ❏${prefix}onepiece 
│ ❏${prefix}pokemon 
│ ❏${prefix}randomnime 
│ ❏${prefix}randomnime2 
│ ❏${prefix}rize 
│ ❏${prefix}sagiri 
│ ❏${prefix}sakura 
│ ❏${prefix}sasuke 
│ ❏${prefix}shina 
│ ❏${prefix}shinka 
│ ❏${prefix}shinomiya 
│ ❏${prefix}shizuka 
│ ❏${prefix}shota 
│ ❏${prefix}tejina 
│ ❏${prefix}toukachan 
│ ❏${prefix}tsunade 
│ ❏${prefix}waifu 
│ ❏${prefix}animewall 
│ ❏${prefix}yotsuba 
│ ❏${prefix}yuki 
│ ❏${prefix}yulibocil 
│ ❏${prefix}yumeko 
│ ❏${prefix}8ball 
│ ❏${prefix}tickle 
│ ❏${prefix}gecg 
│ ❏${prefix}feed 
│ ❏${prefix}animeawoo 
│ ❏${prefix}animemegumin 
│ ❏${prefix}animeshinobu 
│ ❏${prefix}animehandhold 
│ ❏${prefix}animehighfive 
│ ❏${prefix}animecringe 
│ ❏${prefix}animedance 
│ ❏${prefix}animehappy 
│ ❏${prefix}animeglomp 
│ ❏${prefix}animeblush 
│ ❏${prefix}animesmug 
│ ❏${prefix}animewave 
│ ❏${prefix}animesmille 
│ ❏${prefix}animepoke 
│ ❏${prefix}animewink 
│ ❏${prefix}animebonk 
│ ❏${prefix}animebully 
│ ❏${prefix}animeyeet 
│ ❏${prefix}animebite 
│ ❏${prefix}animelick 
│ ❏${prefix}animekill 
│ ❏${prefix}animecry 
│ ❏${prefix}animewlp 
│ ❏${prefix}animekiss 
│ ❏${prefix}animehug 
│ ❏${prefix}animeneko 
│ ❏${prefix}animepat 
│ ❏${prefix}animeslap 
│ ❏${prefix}animecuddle 
│ ❏${prefix}animewaifu 
│ ❏${prefix}animenom 
│ ❏${prefix}animefoxgirl 
│ ❏${prefix}animegecg 
│ ❏${prefix}animetickle 
│ ❏${prefix}animefeed 
│ ❏${prefix}animeavatar 
│ ❏${prefix}anime 
│ ❏${prefix}animequote 
│ ❏${prefix}random loli 
│ ❏${prefix}random waifu 
│ ❏${prefix}random neko 
│ ❏${prefix}random zerotwo 
└────────────────────

┌─「 *NSFW MENU* 」
│ ❏${prefix}hentai 
│ ❏${prefix}gifhentai 
│ ❏${prefix}gifblowjob 
│ ❏${prefix}hentaivid 
│ ❏${prefix}hneko 
│ ❏${prefix}nwaifu 
│ ❏${prefix}animespank 
│ ❏${prefix}trap 
│ ❏${prefix}gasm 
│ ❏${prefix}ahegao 
│ ❏${prefix}ass 
│ ❏${prefix}bdsm 
│ ❏${prefix}blowjob 
│ ❏${prefix}cuckold 
│ ❏${prefix}cum 
│ ❏${prefix}milf 
│ ❏${prefix}eba 
│ ❏${prefix}ero 
│ ❏${prefix}femdom 
│ ❏${prefix}foot 
│ ❏${prefix}gangbang 
│ ❏${prefix}glasses 
│ ❏${prefix}jahy 
│ ❏${prefix}masturbation 
│ ❏${prefix}manga 
│ ❏${prefix}neko-hentai 
│ ❏${prefix}neko-hentai2 
│ ❏${prefix}nsfwloli 
│ ❏${prefix}orgy 
│ ❏${prefix}panties  
│ ❏${prefix}pussy 
│ ❏${prefix}tentacles 
│ ❏${prefix}thighs 
│ ❏${prefix}yuri 
│ ❏${prefix}zettai 
└────────────────────

┌─「 *PHOTOOXY MENU* 」
│ ❏${prefix}shadow  
│ ❏${prefix}write  
│ ❏${prefix}romantic  
│ ❏${prefix}burnpaper 
│ ❏${prefix}smoke  
│ ❏${prefix}narutobanner  
│ ❏${prefix}love  
│ ❏${prefix}undergrass 
│ ❏${prefix}doublelove  
│ ❏${prefix}coffecup 
│ ❏${prefix}underwaterocean 
│ ❏${prefix}smokyneon 
│ ❏${prefix}starstext 
│ ❏${prefix}rainboweffect 
│ ❏${prefix}balloontext 
│ ❏${prefix}metalliceffect 
│ ❏${prefix}embroiderytext 
│ ❏${prefix}flamingtext 
│ ❏${prefix}stonetext 
│ ❏${prefix}writeart 
│ ❏${prefix}summertext 
│ ❏${prefix}wolfmetaltext 
│ ❏${prefix}nature3dtext 
│ ❏${prefix}rosestext 
│ ❏${prefix}naturetypography 
│ ❏${prefix}quotesunder 
│ ❏${prefix}shinetext 
└────────────────────

┌─「 *EPHOTO360 MENU* 」
│ ❏${prefix}glitchtext 
│ ❏${prefix}writetext 
│ ❏${prefix}advancedglow 
│ ❏${prefix}typographytext 
│ ❏${prefix}pixelglitch 
│ ❏${prefix}neonglitch 
│ ❏${prefix}flagtext 
│ ❏${prefix}flag3dtext 
│ ❏${prefix}deletingtext 
│ ❏${prefix}blackpinkstyle 
│ ❏${prefix}glowingtext 
│ ❏${prefix}underwatertext 
│ ❏${prefix}logomaker 
│ ❏${prefix}cartoonstyle 
│ ❏${prefix}papercutstyle 
│ ❏${prefix}watercolortext 
│ ❏${prefix}effectclouds 
│ ❏${prefix}blackpinklogo 
│ ❏${prefix}gradienttext 
│ ❏${prefix}summerbeach 
│ ❏${prefix}luxurygold 
│ ❏${prefix}multicoloredneon 
│ ❏${prefix}sandsummer 
│ ❏${prefix}galaxywallpaper 
│ ❏${prefix}1917style 
│ ❏${prefix}makingneon 
│ ❏${prefix}royaltext 
│ ❏${prefix}freecreate 
│ ❏${prefix}galaxystyle 
│ ❏${prefix}lighteffects 
└────────────────────

┌─「 *DATABASE MENU* 」
│ ❏${prefix}setcmd 
│ ❏${prefix}delcmd 
│ ❏${prefix}listcmd 
│ ❏${prefix}lockcmd 
│ ❏${prefix}addmsg 
│ ❏${prefix}delmsg 
│ ❏${prefix}getmsg 
│ ❏${prefix}listmsg 
└────────────────────

┌─「 *BUG MENU* 」
│ ❏${prefix}amountbug 
│ ❏${prefix}pmbug 
│ ❏${prefix}delaybug 
│ ❏${prefix}docubug 
│ ❏${prefix}unlimitedbug 
│ ❏${prefix}bombug 
│ ❏${prefix}lagbug 
│ ❏${prefix}trollybug 
│ ❏${prefix}gcbug 
│ ❏${prefix}delaygcbug 
│ ❏${prefix}laggcbug 
│ ❏${prefix}bomgcbug 
│ ❏${prefix}unlimitedgcbug 
│ ❏${prefix}trollygcbug 
│ ❏${prefix}docugcbug 
│ ❏${prefix}verif 
│ ❏${prefix}banv1 
│ ❏${prefix}banv2 
│ ❏${prefix}banv3 
│ ❏${prefix}banv4 
│ ❏${prefix}banv5 
│ ❏${prefix}banv6 
│ ❏${prefix}unbanv1 
│ ❏${prefix}unbanv2 
│ ❏${prefix}unbanv3 
│ ❏${prefix}unbanv4 
│ ❏${prefix}unbanv5 
└────────────────────

┌─「 *OTHER MENU* 」
│ ❏${prefix}ping 
│ ❏${prefix}menu 
│ ❏${prefix}myip 
│ ❏${prefix}repo 
│ ❏${prefix}reportbug 
│ ❏${prefix}listprem 
│ ❏${prefix}listowner 
│ ❏${prefix}liststicker 
│ ❏${prefix}listimage 
│ ❏${prefix}listvideo 
│ ❏${prefix}listvn 
│ ❏${prefix}listapk 
│ ❏${prefix}listzip 
│ ❏${prefix}listpdf 
│ ❏${prefix}listbadword 
│ ❏${prefix}listpc 
│ ❏${prefix}listgc 
│ ❏${prefix}idgroup 
│ ❏${prefix}owner 
│ ❏${prefix}rentbot 
│ ❏${prefix}donate 
│ ❏${prefix}friend 
│ ❏${prefix}obfuscate 
│ ❏${prefix}styletext 
│ ❏${prefix}fliptext 
│ ❏${prefix}tts 
│ ❏${prefix}say 
│ ❏${prefix}togif 
│ ❏${prefix}toqr 
│ ❏${prefix}bass 
│ ❏${prefix}blown 
│ ❏${prefix}deep 
│ ❏${prefix}earrape 
│ ❏${prefix}fast 
│ ❏${prefix}fat 
│ ❏${prefix}nightcore 
│ ❏${prefix}reverse 
│ ❏${prefix}robot 
│ ❏${prefix}slow 
│ ❏${prefix}smooth 
│ ❏${prefix}squirrel 
│ ❏${prefix}tinyurl 
│ ❏${prefix}tovn 
│ ❏${prefix}toaudio 
│ ❏${prefix}tomp3 
│ ❏${prefix}tomp4
│ ❏${prefix}toimg 
│ ❏${prefix}toonce 
│ ❏${prefix}sticker 
│ ❏${prefix}take 
│ ❏${prefix}emoji 
│ ❏${prefix}volaudio 
│ ❏${prefix}volvideo 
│ ❏${prefix}ebinary 
│ ❏${prefix}dbinary 
│ ❏${prefix}ssweb 
│ ❏${prefix}quoted 
│ ❏${prefix}runtime 
│ ❏${prefix}checkaccount 
│ ❏${prefix}translate 
│ ❏${prefix}quran 
│ ❏${prefix}bible 
└────────────────────
`}

global.animemenu = (prefix) => {
return `
┌─「 *ANIME MENU* 」
│ ❏${prefix}akira 
│ ❏${prefix}akiyama 
│ ❏${prefix}ana 
│ ❏${prefix}asuna 
│ ❏${prefix}ayuzawa 
│ ❏${prefix}boruto 
│ ❏${prefix}chiho 
│ ❏${prefix}chitoge 
│ ❏${prefix}cosplayloli 
│ ❏${prefix}cosplaysagiri 
│ ❏${prefix}deidara 
│ ❏${prefix}doraemon 
│ ❏${prefix}elaina 
│ ❏${prefix}emilia 
│ ❏${prefix}erza 
│ ❏${prefix}gremory 
│ ❏${prefix}hestia 
│ ❏${prefix}husbu 
│ ❏${prefix}inori 
│ ❏${prefix}isuzu 
│ ❏${prefix}itachi 
│ ❏${prefix}itori 
│ ❏${prefix}kaga 
│ ❏${prefix}kagura 
│ ❏${prefix}kakasih 
│ ❏${prefix}kaori 
│ ❏${prefix}keneki 
│ ❏${prefix}kotori 
│ ❏${prefix}kurumi 
│ ❏${prefix}loli 
│ ❏${prefix}madara 
│ ❏${prefix}megumin 
│ ❏${prefix}mikasa 
│ ❏${prefix}mikey 
│ ❏${prefix}miku 
│ ❏${prefix}minato 
│ ❏${prefix}naruto 
│ ❏${prefix}neko 
│ ❏${prefix}neko2 
│ ❏${prefix}nekonime 
│ ❏${prefix}nezuko 
│ ❏${prefix}onepiece 
│ ❏${prefix}pokemon 
│ ❏${prefix}randomnime 
│ ❏${prefix}randomnime2 
│ ❏${prefix}rize 
│ ❏${prefix}sagiri 
│ ❏${prefix}sakura 
│ ❏${prefix}sasuke 
│ ❏${prefix}shina 
│ ❏${prefix}shinka 
│ ❏${prefix}shinomiya 
│ ❏${prefix}shizuka 
│ ❏${prefix}shota 
│ ❏${prefix}tejina 
│ ❏${prefix}toukachan 
│ ❏${prefix}tsunade 
│ ❏${prefix}waifu 
│ ❏${prefix}animewall 
│ ❏${prefix}yotsuba 
│ ❏${prefix}yuki 
│ ❏${prefix}yulibocil 
│ ❏${prefix}yumeko 
│ ❏${prefix}8ball 
│ ❏${prefix}tickle 
│ ❏${prefix}gecg 
│ ❏${prefix}feed 
│ ❏${prefix}animeawoo 
│ ❏${prefix}animemegumin 
│ ❏${prefix}animeshinobu 
│ ❏${prefix}animehandhold 
│ ❏${prefix}animehighfive 
│ ❏${prefix}animecringe 
│ ❏${prefix}animedance 
│ ❏${prefix}animehappy 
│ ❏${prefix}animeglomp 
│ ❏${prefix}animeblush 
│ ❏${prefix}animesmug 
│ ❏${prefix}animewave 
│ ❏${prefix}animesmille 
│ ❏${prefix}animepoke 
│ ❏${prefix}animewink 
│ ❏${prefix}animebonk 
│ ❏${prefix}animebully 
│ ❏${prefix}animeyeet 
│ ❏${prefix}animebite 
│ ❏${prefix}animelick 
│ ❏${prefix}animekill 
│ ❏${prefix}animecry 
│ ❏${prefix}animewlp 
│ ❏${prefix}animekiss 
│ ❏${prefix}animehug 
│ ❏${prefix}animeneko 
│ ❏${prefix}animepat 
│ ❏${prefix}animeslap 
│ ❏${prefix}animecuddle 
│ ❏${prefix}animewaifu 
│ ❏${prefix}animenom 
│ ❏${prefix}animefoxgirl 
│ ❏${prefix}animegecg 
│ ❏${prefix}animetickle 
│ ❏${prefix}animefeed 
│ ❏${prefix}animeavatar 
│ ❏${prefix}anime 
│ ❏${prefix}animequote 
│ ❏${prefix}random loli 
│ ❏${prefix}random waifu 
│ ❏${prefix}random neko 
│ ❏${prefix}random zerotwo 
└────────────────────
`}

global.ownermenu = (prefix) => {
return `
┌─「 *OWNER MENU* 」
│ ❏${prefix}autoread 
│ ❏${prefix}autobio 
│ ❏${prefix}autotype 
│ ❏${prefix}unavailable 
│ ❏${prefix}autorecord 
│ ❏${prefix}autorecordtype 
│ ❏${prefix}autoswview 
│ ❏${prefix}setautoblock 
│ ❏${prefix}setantiforeign 
│ ❏${prefix}autoblock 
│ ❏${prefix}onlygc 
│ ❏${prefix}onlypc 
│ ❏${prefix}onlyindia 
│ ❏${prefix}onlyindo 
│ ❏${prefix}anticall 
│ ❏${prefix}self 
│ ❏${prefix}public 
│ ❏${prefix}join 
│ ❏${prefix}poll 
│ ❏${prefix}bc 
│ ❏${prefix}bcgroup 
│ ❏${prefix}setmenu 
│ ❏${prefix}setimgmenu 
│ ❏${prefix}setvidmenu 
│ ❏${prefix}setgifmenu 
│ ❏${prefix}setreply 
│ ❏${prefix}setprefix 
│ ❏${prefix}addlimit 
│ ❏${prefix}dellimit 
│ ❏${prefix}resethit 
│ ❏${prefix}resetuser 
│ ❏${prefix}creategc 
│ ❏${prefix}userjid 
│ ❏${prefix}setexif 
│ ❏${prefix}setbotbio 
│ ❏${prefix}delppbot 
│ ❏${prefix}shutdown 
│ ❏${prefix}setppbot 
│ ❏${prefix}addprem 
│ ❏${prefix}delprem 
│ ❏${prefix}addowner 
│ ❏${prefix}delowner 
│ ❏${prefix}addvn 
│ ❏${prefix}addapk 
│ ❏${prefix}addzip 
│ ❏${prefix}addpdf 
│ ❏${prefix}delapk 
│ ❏${prefix}delzip 
│ ❏${prefix}delpdf 
│ ❏${prefix}delvn 
│ ❏${prefix}addsticker 
│ ❏${prefix}delsticker 
│ ❏${prefix}addimage 
│ ❏${prefix}delimage 
│ ❏${prefix}addvideo 
│ ❏${prefix}delvideo 
│ ❏${prefix}addtitle 
│ ❏${prefix}deltitle 
│ ❏${prefix}upswtext 
│ ❏${prefix}upswvideo 
│ ❏${prefix}upswimage 
│ ❏${prefix}upswaudio 
│ ❏${prefix}block 
│ ❏${prefix}unblock 
│ ❏${prefix}leavegc 
│ ❏${prefix}pushcontact 
│ ❏${prefix}pushcontactv2 
└────────────────────
`}

global.othermenu = (prefix) => {
return `
┌─「 *OTHER MENU* 」
│ ❏${prefix}ping 
│ ❏${prefix}menu 
│ ❏${prefix}myip 
│ ❏${prefix}repo 
│ ❏${prefix}reportbug 
│ ❏${prefix}listprem 
│ ❏${prefix}listowner 
│ ❏${prefix}liststicker 
│ ❏${prefix}listimage 
│ ❏${prefix}listvideo 
│ ❏${prefix}listvn 
│ ❏${prefix}listapk 
│ ❏${prefix}listzip 
│ ❏${prefix}listpdf 
│ ❏${prefix}listbadword 
│ ❏${prefix}listpc 
│ ❏${prefix}listgc 
│ ❏${prefix}isgroup 
│ ❏${prefix}owner 
│ ❏${prefix}rentbot 
│ ❏${prefix}donate 
│ ❏${prefix}friend 
│ ❏${prefix}obfuscate 
│ ❏${prefix}styletext 
│ ❏${prefix}fliptext 
│ ❏${prefix}tts 
│ ❏${prefix}say 
│ ❏${prefix}togif 
│ ❏${prefix}toqr 
│ ❏${prefix}bass 
│ ❏${prefix}blown 
│ ❏${prefix}deep 
│ ❏${prefix}earrape 
│ ❏${prefix}fast 
│ ❏${prefix}fat 
│ ❏${prefix}nightcore 
│ ❏${prefix}reverse 
│ ❏${prefix}robot 
│ ❏${prefix}slow 
│ ❏${prefix}smooth 
│ ❏${prefix}squirrel 
│ ❏${prefix}tinyurl 
│ ❏${prefix}tovn 
│ ❏${prefix}toaudio 
│ ❏${prefix}tomp3 
│ ❏${prefix}tomp4
│ ❏${prefix}toimg 
│ ❏${prefix}toonce 
│ ❏${prefix}sticker 
│ ❏${prefix}take 
│ ❏${prefix}emoji 
│ ❏${prefix}volaudio 
│ ❏${prefix}volvideo 
│ ❏${prefix}ebinary 
│ ❏${prefix}dbinary 
│ ❏${prefix}ssweb 
│ ❏${prefix}quoted 
│ ❏${prefix}checkaccount 
│ ❏${prefix}runtime 
│ ❏${prefix}translate 
│ ❏${prefix}quran 
│ ❏${prefix}bible 
└────────────────────
`}

global.downloadmenu = (prefix) => {
return `
┌─「 *DOWNLOAD MENU* 」
│ ❏${prefix}ytsearch 
│ ❏${prefix}play 
│ ❏${prefix}ytmp3 
│ ❏${prefix}ytmp4 
│ ❏${prefix}tiktokaudio 
│ ❏${prefix}tiktok 
│ ❏${prefix}igvideo 
│ ❏${prefix}igimage 
│ ❏${prefix}facebook 
│ ❏${prefix}mediafire 
│ ❏${prefix}apk 
│ ❏${prefix}google 
│ ❏${prefix}imdb 
│ ❏${prefix}weather 
│ ❏${prefix}wanumber 
│ ❏${prefix}spotify 
│ ❏${prefix}gitclone 
│ ❏${prefix}happymod 
│ ❏${prefix}gdrive 
│ ❏${prefix}pinterest 
│ ❏${prefix}ringtone 
└────────────────────
`}

global.groupmenu = (prefix) => {
return `
┌─「 *GROUP MENU* 」
│ ❏${prefix}antibot 
│ ❏${prefix}antiviewonce 
│ ❏${prefix}welcome 
│ ❏${prefix}adminevent 
│ ❏${prefix}groupevent 
│ ❏${prefix}antiforeign 
│ ❏${prefix}antimedia 
│ ❏${prefix}antiaudio 
│ ❏${prefix}antivideo 
│ ❏${prefix}antiimage 
│ ❏${prefix}antidocument 
│ ❏${prefix}antilocation 
│ ❏${prefix}anticontact 
│ ❏${prefix}antisticker 
│ ❏${prefix}antipoll 
│ ❏${prefix}antilink 
│ ❏${prefix}antilinkgc 
│ ❏${prefix}antivirtex 
│ ❏${prefix}grouplink 
│ ❏${prefix}listadmin 
│ ❏${prefix}invite 
│ ❏${prefix}ephemeral 
│ ❏${prefix}delete 
│ ❏${prefix}setppgroup 
│ ❏${prefix}delppgroup 
│ ❏${prefix}setnamegc 
│ ❏${prefix}setdesc 
│ ❏${prefix}add 
│ ❏${prefix}kick 
│ ❏${prefix}promote 
│ ❏${prefix}demote 
│ ❏${prefix}getcontact 
│ ❏${prefix}savecontact 
│ ❏${prefix}sendcontact 
│ ❏${prefix}contactag 
│ ❏${prefix}hidetag 
│ ❏${prefix}totag 
│ ❏${prefix}tagall 
│ ❏${prefix}editinfo 
│ ❏${prefix}opentime 
│ ❏${prefix}closetime 
│ ❏${prefix}resetlink 
│ ❏${prefix}getbio 
│ ❏${prefix}vote 
│ ❏${prefix}upvote 
│ ❏${prefix}downvote 
│ ❏${prefix}checkvote 
│ ❏${prefix}delvote 
│ ❏${prefix}autostickergc 
│ ❏${prefix}antivirus 
│ ❏${prefix}antitoxic 
│ ❏${prefix}nsfw 
│ ❏${prefix}react 
└────────────────────
`}

global.funmenu = (prefix) => {
return `
┌─「 *FUN MENU* 」
│ ❏${prefix}define 
│ ❏${prefix}lyrics 
│ ❏${prefix}tictactoe 
│ ❏${prefix}suit 
│ ❏${prefix}math 
│ ❏${prefix}fact 
│ ❏${prefix}truth 
│ ❏${prefix}dare 
│ ❏${prefix}couple 
│ ❏${prefix}soulmate 
│ ❏${prefix}stupidcheck 
│ ❏${prefix}handsomecheck 
│ ❏${prefix}uncleancheck 
│ ❏${prefix}hotcheck 
│ ❏${prefix}smartcheck 
│ ❏${prefix}greatcheck 
│ ❏${prefix}evilcheck 
│ ❏${prefix}dogcheck 
│ ❏${prefix}coolcheck 
│ ❏${prefix}waifucheck 
│ ❏${prefix}awesomecheck 
│ ❏${prefix}gaycheck 
│ ❏${prefix}cutecheck 
│ ❏${prefix}lesbiancheck 
│ ❏${prefix}hornycheck 
│ ❏${prefix}prettycheck 
│ ❏${prefix}lovelycheck 
│ ❏${prefix}uglycheck 
│ ❏${prefix}pick 
│ ❏${prefix}pickupline 
│ ❏${prefix}quotes 
│ ❏${prefix}bisakah
│ ❏${prefix}apakah
│ ❏${prefix}apankah 
│ ❏${prefix}dimana 
│ ❏${prefix}what 
│ ❏${prefix}how 
│ ❏${prefix}nilai 
│ ❏${prefix}cry 
│ ❏${prefix}kill 
│ ❏${prefix}hug 
│ ❏${prefix}pat 
│ ❏${prefix}lick  
│ ❏${prefix}kiss 
│ ❏${prefix}bite 
│ ❏${prefix}yeet 
│ ❏${prefix}bully 
│ ❏${prefix}bonk 
│ ❏${prefix}wink 
│ ❏${prefix}poke 
│ ❏${prefix}nom 
│ ❏${prefix}slap 
│ ❏${prefix}smile  
│ ❏${prefix}wave 
│ ❏${prefix}awoo 
│ ❏${prefix}blush 
│ ❏${prefix}smug 
│ ❏${prefix}glomp  
│ ❏${prefix}happy 
│ ❏${prefix}dance 
│ ❏${prefix}cringe 
│ ❏${prefix}cuddle 
│ ❏${prefix}highfive  
│ ❏${prefix}shinobu 
│ ❏${prefix}handhold 
│ ❏${prefix}spank 
│ ❏${prefix}tickle 
│ ❏${prefix}avatar 
│ ❏${prefix}feed 
│ ❏${prefix}fox_girl 
│ ❏${prefix}gecg 
│ ❏${prefix}checkme 
│ ❏${prefix}sound1 - sound161 
└────────────────────
`}

global.stalkermenu = (prefix) => {
return `
┌─「 *STALKER MENU* 」
│ ❏${prefix}igstalk 
│ ❏${prefix}tiktokstalk 
│ ❏${prefix}mlstalk 
│ ❏${prefix}npmstalk 
│ ❏${prefix}ghstalk 
└────────────────────
`}

global.stickermenu = (prefix) => {
return `
┌─「 *STICKER MENU* 」
│ ❏${prefix}goose 
│ ❏${prefix}woof 
│ ❏${prefix}8ball 
│ ❏${prefix}lizard 
│ ❏${prefix}meow 
│ ❏${prefix}gura 
│ ❏${prefix}doge 
│ ❏${prefix}patrick 
│ ❏${prefix}lovestick 
│ ❏${prefix}telestick 
└────────────────────
`}

global.databasemenu = (prefix) => {
return `
┌─「 *DATABASE MENU* 」
│ ❏${prefix}setcmd 
│ ❏${prefix}delcmd 
│ ❏${prefix}listcmd 
│ ❏${prefix}lockcmd 
│ ❏${prefix}addmsg 
│ ❏${prefix}delmsg 
│ ❏${prefix}getmsg 
│ ❏${prefix}listmsg 
└────────────────────
`}

global.aimenu = (prefix) => {
return `
┌─「 *AI MENU* 」
│ ❏${prefix}openai 
│ ❏${prefix}dalle 
│ ❏${prefix}cyhntia 
│ ❏${prefix}remini 
└────────────────────
`}

global.bugmenu = (prefix) => {
return `
┌─「 *BUG MENU* 」
│ ❏${prefix}amountbug 
│ ❏${prefix}pmbug 
│ ❏${prefix}delaybug 
│ ❏${prefix}docubug 
│ ❏${prefix}unlimitedbug 
│ ❏${prefix}bombug 
│ ❏${prefix}lagbug 
│ ❏${prefix}trollybug 
│ ❏${prefix}gcbug 
│ ❏${prefix}delaygcbug 
│ ❏${prefix}laggcbug 
│ ❏${prefix}bomgcbug 
│ ❏${prefix}unlimitedgcbug 
│ ❏${prefix}trollygcbug 
│ ❏${prefix}docugcbug 
│ ❏${prefix}verif 
│ ❏${prefix}banv1 
│ ❏${prefix}banv2 
│ ❏${prefix}banv3 
│ ❏${prefix}banv4 
│ ❏${prefix}banv5 
│ ❏${prefix}banv6 
│ ❏${prefix}unbanv1 
│ ❏${prefix}unbanv2 
│ ❏${prefix}unbanv3 
│ ❏${prefix}unbanv4 
│ ❏${prefix}unbanv5 
└────────────────────
`}

global.randphotomenu = (prefix) => {
return `
┌─「 *RANDOM PHOTO MENU* 」
│ ❏${prefix}aesthetic 
│ ❏${prefix}coffee 
│ ❏${prefix}wikimedia 
│ ❏${prefix}wallpaper 
│ ❏${prefix}art 
│ ❏${prefix}bts 
│ ❏${prefix}dogwoof 
│ ❏${prefix}catmeow 
│ ❏${prefix}lizardpic 
│ ❏${prefix}goosebird 
│ ❏${prefix}8ballpool 
│ ❏${prefix}cosplay 
│ ❏${prefix}hacker 
│ ❏${prefix}cyber 
│ ❏${prefix}gamewallpaper 
│ ❏${prefix}islamic 
│ ❏${prefix}jennie 
│ ❏${prefix}jiso 
│ ❏${prefix}satanic 
│ ❏${prefix}justina 
│ ❏${prefix}cartoon 
│ ❏${prefix}pentol 
│ ❏${prefix}cat 
│ ❏${prefix}kpop 
│ ❏${prefix}exo 
│ ❏${prefix}lisa 
│ ❏${prefix}space 
│ ❏${prefix}car 
│ ❏${prefix}technology 
│ ❏${prefix}bike 
│ ❏${prefix}shortquote 
│ ❏${prefix}antiwork 
│ ❏${prefix}hacking 
│ ❏${prefix}boneka 
│ ❏${prefix}rose 
│ ❏${prefix}ryujin 
│ ❏${prefix}ulzzangboy 
│ ❏${prefix}ulzzanggirl 
│ ❏${prefix}wallml 
│ ❏${prefix}wallphone 
│ ❏${prefix}mountain 
│ ❏${prefix}goose 
│ ❏${prefix}profilepic 
│ ❏${prefix}couplepp 
│ ❏${prefix}programming 
│ ❏${prefix}pubg 
│ ❏${prefix}blackpink 
│ ❏${prefix}randomboy   
│ ❏${prefix}randomgirl 
│ ❏${prefix}hijab   
│ ❏${prefix}chinese 
│ ❏${prefix}indo 
│ ❏${prefix}japanese 
│ ❏${prefix}korean 
│ ❏${prefix}malay 
│ ❏${prefix}thai 
│ ❏${prefix}vietnamese 
└────────────────────
`}

global.randvideomenu = (prefix) => {
return `
┌─「 *RANDOM VIDEO MENU* 」
│ ❏${prefix}tiktokgirl 
│ ❏${prefix}tiktoknukthy 
│ ❏${prefix}tiktokkayes 
│ ❏${prefix}tiktokpanrika 
│ ❏${prefix}tiktoknotnot 
│ ❏${prefix}tiktokghea 
│ ❏${prefix}tiktoksantuy 
│ ❏${prefix}tiktokbocil 
└────────────────────
`}

global.photooxymenu = (prefix) => {
return `
┌─「 *PHOTOOXY MENU* 」
│ ❏${prefix}shadow  
│ ❏${prefix}write  
│ ❏${prefix}romantic  
│ ❏${prefix}burnpaper 
│ ❏${prefix}smoke  
│ ❏${prefix}narutobanner  
│ ❏${prefix}love  
│ ❏${prefix}undergrass 
│ ❏${prefix}doublelove  
│ ❏${prefix}coffecup 
│ ❏${prefix}underwaterocean 
│ ❏${prefix}smokyneon 
│ ❏${prefix}starstext 
│ ❏${prefix}rainboweffect 
│ ❏${prefix}balloontext 
│ ❏${prefix}metalliceffect 
│ ❏${prefix}embroiderytext 
│ ❏${prefix}flamingtext 
│ ❏${prefix}stonetext 
│ ❏${prefix}writeart 
│ ❏${prefix}summertext 
│ ❏${prefix}wolfmetaltext 
│ ❏${prefix}nature3dtext 
│ ❏${prefix}rosestext 
│ ❏${prefix}naturetypography 
│ ❏${prefix}quotesunder 
│ ❏${prefix}shinetext 
└────────────────────
`}

global.ephoto360menu = (prefix) => {
return `
┌─「 *EPHOTO360 MENU* 」
│ ❏${prefix}glitchtext 
│ ❏${prefix}writetext 
│ ❏${prefix}advancedglow 
│ ❏${prefix}typographytext 
│ ❏${prefix}pixelglitch 
│ ❏${prefix}neonglitch 
│ ❏${prefix}flagtext 
│ ❏${prefix}flag3dtext 
│ ❏${prefix}deletingtext 
│ ❏${prefix}blackpinkstyle 
│ ❏${prefix}glowingtext 
│ ❏${prefix}underwatertext 
│ ❏${prefix}logomaker 
│ ❏${prefix}cartoonstyle 
│ ❏${prefix}papercutstyle 
│ ❏${prefix}watercolortext 
│ ❏${prefix}effectclouds 
│ ❏${prefix}blackpinklogo 
│ ❏${prefix}gradienttext 
│ ❏${prefix}summerbeach 
│ ❏${prefix}luxurygold 
│ ❏${prefix}multicoloredneon 
│ ❏${prefix}sandsummer 
│ ❏${prefix}galaxywallpaper 
│ ❏${prefix}1917style 
│ ❏${prefix}makingneon 
│ ❏${prefix}royaltext 
│ ❏${prefix}freecreate 
│ ❏${prefix}galaxystyle 
│ ❏${prefix}lighteffects 
└────────────────────
`}

global.nsfwmenu = (prefix) => {
return `
┌─「 *NSFW MENU* 」
│ ❏${prefix}hentai 
│ ❏${prefix}gifhentai 
│ ❏${prefix}gifblowjob 
│ ❏${prefix}hentaivid 
│ ❏${prefix}hneko 
│ ❏${prefix}nwaifu 
│ ❏${prefix}animespank 
│ ❏${prefix}trap 
│ ❏${prefix}gasm 
│ ❏${prefix}ahegao 
│ ❏${prefix}ass 
│ ❏${prefix}bdsm 
│ ❏${prefix}blowjob 
│ ❏${prefix}cuckold 
│ ❏${prefix}cum 
│ ❏${prefix}milf 
│ ❏${prefix}eba 
│ ❏${prefix}ero 
│ ❏${prefix}femdom 
│ ❏${prefix}foot 
│ ❏${prefix}gangbang 
│ ❏${prefix}glasses 
│ ❏${prefix}jahy 
│ ❏${prefix}masturbation 
│ ❏${prefix}manga 
│ ❏${prefix}neko-hentai 
│ ❏${prefix}neko-hentai2 
│ ❏${prefix}nsfwloli 
│ ❏${prefix}orgy 
│ ❏${prefix}panties  
│ ❏${prefix}pussy 
│ ❏${prefix}tentacles 
│ ❏${prefix}thighs 
│ ❏${prefix}yuri 
│ ❏${prefix}zettai 
└────────────────────
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})