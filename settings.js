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

//session
global.sessionid ='session'

//owmner v card
global.ytname = "Kagak Punya :v" //ur yt chanel name
global.socialm = "Private" //ur github or insta name
global.location = "Indonesian" //ur location

//new
global.botname = 'Casz' //ur bot name
global.ownernumber = '6283877453743' //ur owner number
global.ownername = 'Fan' //ur owner name
global.websitex = "wa.me/6283877453743"
global.wagc = "https://chat.whatsapp.com/Dg278DnCtj87zikSxx5IwC"
global.themeemoji = '🗿'
global.wm = "Casz"
global.botscript = 'https://chat.whatsapp.com/Dg278DnCtj87zikSxx5IwC' //script link
global.packname = "Sticker By"
global.author = "Fan\n+6283877453743"
global.creator = "6283877453743@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6283877453743"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go🗿'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
