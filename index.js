const fs = require('fs');
const { Client, GatewayIntentBits, Partials, Collection, ActivityType} = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel], ws: { properties: {$browser: "Discord Android" }} });
//
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
//


client.on("ready", () =>{
    console.log(`Logged Into The Discord Client In ${client.ws.ping}ms!`);
    console.log(`Ready! Logged Into Discord Under The Name Of ${client.user.tag}, In ${client.guilds.cache.size} Servers`);
    
    setInterval(() => {
      const statuses = [
        `Do You Want A Cookie? 😊🍪`,
        `Sharing Cookies! 🍪`,
        `🍪🍪🍪`,
        `In ${client.guilds.cache.size} Servers`
            ];
      const Activity = [
        0,
        1,
        2,
        3,
		    5,
      ];
      const s = statuses[Math.floor(Math.random() * statuses.length)];
      const act = Activity[Math.floor(Math.random() * Activity.length)];
	  client.user.setPresence({ activities:  [{ name: `${s}`, type: act }], status: 'online' });
    }, 20000);
 })
//
client.commands = new Collection();
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);}
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) { client.once(event.name, (...args) => event.execute(...args));
    } else {client.on(event.name, (...args) => event.execute(...args));}
}

client.on('interactionCreate', async interaction => {
	console.log(`${interaction.user.tag} in #${interaction.channel.name} from ${interaction.guild.name} triggered an interaction (Slash Command: ${interaction.commandName}) .`);
	if (!interaction.isCommand()) return;
	const command = client.commands.get(interaction.commandName);
	if (!command) return; try { await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: '**```diff\n-UH OH\n-A Error Has Occurred, If This Continues Please Contact Support (https://discord.gg/INVITECODESOON)! \n+Have A Nice Day 🙂 \n```**', ephemeral: true });
	}
});

client.login(token);
