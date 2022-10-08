const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cookie')
        .setDescription('Give Someone A Cookie And Make Their Day!')
        .addUserOption(option => option.setName('user').setDescription('The Selected User To Give A Cookie').setRequired(true)),
    async execute(interaction) {
        const file = new MessageAttachment('../Logo.png');
        const user = interaction.options.getUser('user');
        let cookiebed = new Discord.EmbedBuilder().setColor("#2F3136").setTitle(`${interaction.member.user.username} Has Gifted ${user.username} A Cookie!`).setImage('attachment://Logo.png')
        await interaction.reply({embeds:[cookiebed], files: [file]});
        await interaction.followUp({content: `<@${user.id}> If You Would Like To Return A Cookie Do \`/cookie user:${interaction.member.user.username}\``});
        return;
    },
};