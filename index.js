require("dotenv").config()
const { Client, Events, GatewayIntentBits } = require("discord.js")

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`)
})

client.login(process.env.DISCORD_TOKEN)
