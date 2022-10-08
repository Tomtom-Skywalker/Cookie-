const Discord = require("discord.js");
const { MessageActionRow, MessageButton} = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('INVITE ME 🍪!'),
	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setURL('https://discord.com/api/oauth2/authorize?client_id=953986568195022878&permissions=8&scope=bot%20applications.commands')
					.setLabel('INVITE ME')
					.setStyle('LINK')
                    .setEmoji('<:Cookie_Bot_cookie:953996142989959168>')
                   .setDisabled(false),
          )
          .addComponents(
            new MessageButton()
                .setCustomId('COOKIE')
                .setLabel('SHARE COOKIES')
                .setStyle('DANGER')
                .setEmoji('<:Cookie_Bot_cookie:953996142989959168>')
               .setDisabled(true),
      )
      let invite = new Discord.EmbedBuilder().setTitle("<:Cookie_Bot_cookie:953996142989959168> Invite Me To Your Server For Cookies! <:Cookie_Bot_cookie:953996142989959168>").setColor("#2F3136").setAuthor({ name: " Cookie- Be Blessed By A New Server ", iconURL: interaction.member.displayAvatarURL({dynamic: true }) })
      .setDescription("**WOAH I HAVE BEEN INVITED TO A NEW SERVER COOL!**\n** ```diff\n+Thanks For Using This Command Its Supporting Me And My Developer\n```**").addField("**COOKIES FOR DAYS GUYS COOKIES FOR DAYS**", "**Once I Have Been Added You Can Spread The Love Of Cookies! To Make Everyone's Days!**")
      .setFooter({text:`Command Request By: ${interaction.member.user.username} | #GetBlessedByCookie- `}).setTimestamp()
		return interaction.reply({embeds:[invite],  components: [row]});
	},
};


