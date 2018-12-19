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
  const args2 = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 
  const command2 = args2.shift().toLowerCase();


  if (command === "help") {
    var ownerRole = message.guild.roles.find("name", "Owner");
    if (message.member.roles.has(ownerRole.id)) {
    	message.channel.sendMessage("```md\n[Help](HollowedBOT)\n[1]: help - Displays this help menu\n[2]: setpresence - Sets the <>help to something else\n[3]: info - Shows info on the bot\n[4]: author - Shows who created the bot\n[5]: say - Says what the person wants it to say.\n- More will be added in the future.```");
    }
  }

  if (command === "setpresence") {
  	var ownerRole = message.guild.roles.find("name", "Owner");
  	if (message.member.roles.has(ownerRole.id)) {
  	  	const setPresence = args.join(" ");
  	  	message.delete().catch(O_o=>{});
  	  	client.user.setPresence({game: {name: setPresence, type: 0}});
  		  message.channel.sendMessage(message.author.toString() + " Successfully changed presence to `" + setPresence + "`!")
  	} else {
      message.channel.sendMessage(message.author.toString() + " Oh! You beautiful person! You do not have the `Owner` role!");
    }
  }

  if (command === "info") {
  	var embed = new Discord.RichEmbed()
  	.setThumbnail(message.author.avatarURL)
  	.addField("Bot for","Hollowed Discord Server", true)
  	.addField("Made By:","<@257337698338078721>", true)
  	.setColor(0x00FFFF)
  	message.channel.sendEmbed(embed);
  }

  if (command === "author") {
    	message.channel.sendMessage("<@257337698338078721> is the creator of this bot!");
  }

  if(command === "say") {
    var ownerRole = message.guild.roles.find("name", "Owner");
    if (message.member.roles.has(ownerRole.id)) {
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{});
      message.channel.send(sayMessage);
    } else {
      message.channel.sendMessage(message.author.toString() + " Oh! You beautiful person! You do not have the `Owner` role!");
 	}
 }
  
 if (command2 === "im" || command2 === "i'm") {
 	const sayMessage = args.join(" ");
 	message.channel.sendMessage("Hi " + sayMessage + "! I'm HollowedBOT.");
 }

});

setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);
