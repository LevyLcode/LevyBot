const { CommandClient } = require('eris')

// LevyBot bot creation
async function init(token) {
    const LevyBot = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // Register the stupid ass command
    LevyBot.on('ready', async () => {
        await LevyBot.bulkEditCommands([{
            name: 'Levy#7537',
            description: 'Discord Bot',
            type: 1,
        }])
        console.log(`Paste the URL below into your browser to invite your bot!\nhttps://discord.com/oauth2/authorize?client_id=${LevyBot.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // LevyBot interaction creation event
    LevyBot.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'Youtube') {
            await interaction.createMessage({
                content: 'https://www.youtube.com/levy'
            })
            console.log('Self destructing...')
            process.exit(0)
        }
    })
    LevyBot.connect();
}

const tokenFromStupidCommand = process.argv[2]
init(tokenFromStupidCommand);
