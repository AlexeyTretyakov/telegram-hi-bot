const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.1363612577:AAFPhQ8w_FQODVqtwRjOD_DYnXRKqOFVoTU)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()