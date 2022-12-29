require('dotenv').config()


const prefix = '!'
const {Client,GatewayIntentBits, Collection, EmbedBuilder, PermissionsBitField} = require('discord.js')

const client = new Client({intents:[GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]})
const { token } = process.env
client.on('ready', ()=> {
    console.log(`Logged in as ${client.user.tag}!`);

})
client.on("messageCreate", (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot)
        return


    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();


    // message array

    const messageArray = message.content.split(" ")
    const argument = messageArray.slice(1)
    const cmd = messageArray[0];

    if(command === 'play')
    {
        message.channel.send("Hello")        

    }
})

client.login(process.env.token)
