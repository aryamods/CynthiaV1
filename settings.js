//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "Aryamods22@gmail.com" //ur yt chanel name
global.socialm = "https://s.id/GHCFA" //ur github or insta name
global.location = "RR4F+589 Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta" //ur location

//new
global.botname = 'Cynthia' //ur bot name
global.ownernumber = '6288212733727' //ur owner number
global.ownername = 'Aryamods' //ur owner name
global.websitex = "https://chasefate22.blogspot.com"
global.wagc = "https://whatsapp.com/channel/0029VaF9hzp8aKvQTudJnd0S"
global.themeemoji = '🪀'
global.wm = "Kreatifitas Tanpa Batas"
global.botscript = 'https://s.id/WHCFA' //script link
global.packname = "Sticker By"
global.author = "Cynthia AI\n\nBlogger: https://s.id/BGCFA\nYouTube: https://s.id/YTCFA\nInstagram: https://s.id/IGCFA"
global.creator = "6288212733727@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6288212733727"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Limit Anda Sudah Habis',
	nsfw: 'Nsfw dinonaktifkan di grup ini, Tolong beritahu admin untuk mengaktifkannya',
    done: 'Berhasil',
    error: 'Gagal',
    success: 'Sukses'
}
//thumbnail
global.thumb = fs.readFileSync('./AImedia/theme/CynthiaB.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
