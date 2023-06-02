const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ Intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
	]
})

const moment = require('moment')
require('dotenv').config({debug:true})

const prefix = '!';

client.on('ready', async () =>{
	console.log(`[ ${moment().format('YYYY/MM/DD (ddd) HH:mm:ss')} ]Logged in as ${client.user.tag}`)
})

client.on('messageCreate', async message => {
	if (message.author.bot || !message.content.startsWith(prefix)) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/g)
	const c = args.shift().toLowerCase()
	if (c === 'test') {
		message.reply('test message!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\\(^o^)/')
	}
})

client.login(process.env.token)
