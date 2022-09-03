const { ChatInputCommandInteraction, SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Return current ping"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({content: "Pong", ephemeral: true});
    }
};