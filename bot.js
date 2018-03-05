const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

// Vars Here \\

client.on('ready', () => {
  client.user.setPresence({game: {name: "<>help for commands!", type: 0}});
  console.log('I am ready!');
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 
  
  // if (command === "help") {
  // 	message.channel.sendMessage("```md\n[Help](HollowedBOT)\n[1]: help - Displays this help menu\n[2]: setpresence - Sets the <>help to something else\n[3]: info - Shows info on the bot\n[4]: author - Shows who created the bot\n- More will be added in the future.```");
  // }
  // 
  // if (command === "setpresence") {
  // 	var ownerRole = message.guild.roles.find("name", "Owner");
  // 	if (message.member.roles.has(ownerRole.id)) {
  // 	  	const setPresence = args.join(" ");
  // 	  	message.delete().catch(O_o=>{});
  // 	  	client.user.setPresence({game: {name: setPresence, type: 0}});
  // 		  message.channel.sendMessage(message.author.toString() + " Successfully changed presence to `" + setPresence + "`!")
  // 	} else {
  //     message.channel.sendMessage(message.author.toString() + " Oh! You beautiful person! You do not have the `Owner` role!");
  //   }
  // }
  // 
  // if (command === "info") {
  // 	var embed = new Discord.RichEmbed()
  // 	.setThumbnail(message.author.avatarURL)
  // 	.addField("Bot for","Hollowed Discord Server", true)
  // 	.addField("Made By:","@Zandercross12#7714", true)
  // 	.setColor(0x00FFFF)
  // 	message.channel.sendEmbed(embed);
  // }
  // 
  // if (command === "author") {
  // 	message.channel.sendMessage("<@257337698338078721> is the creator of this bot!");
  // }

  switch (command.toLowerCase()) {
    case tacos:
      message.channel.sendMessage("TACOZ");
      break;
    default:
      message.channel.sendMessage("I don't know that command!");
  }

});

setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);
