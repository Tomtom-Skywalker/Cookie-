const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('💓 Lifeline 💓'),
	async execute(interaction, client) {
		
		let embed = new Discord.EmbedBuilder()
		.setDescription(`Im Alive ${interaction.createdTimestamp.toLocaleString()}ms`)
		.setColor("#2F3136")

        return interaction.reply({ embeds: [embed] }).catch((e) => console.log(e));
	},
};