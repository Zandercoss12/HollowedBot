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

  if (command === "help") {
  	message.author.sendMessage("```md\n[Help](HollowedBOT)\n[1]: help - Displays this help menu\n[2]: setpresence - Sets the <>help to something else\n- More will be added in the future.```");
  	message.channel.sendMessage("**I just messaged you the commands! Go check them out!** " + message.author.toString());
  }

  if (command === "setpresence") {
  	let ownerRole = message.guild.roles.find("name", "Owner");
  	if (message.member.roles.has(ownerRole.id)) {
  		const setPresence = args.join(" ");
  		message.delete().catch(O_o=>{});
  		client.user.setPresence({game: {name: setPresence, type: 0}});
  	} else {
      message.channel.sendMessage(message.author.toString() + " You pleb, you do not have permission to use this command!");
    }
  }

  if (command === "info") {
  	var embed = new Discord.RichEmbed()
  	.setThumbnail(message.author.avatarURL)
  	.addField("Bot for","Hollowed Discord Server", true)
  	.addField("Made By:","@Zandercross12#7714", true)
  	.setColor(0x00FFFF)
  	message.channel.sendEmbed(embed);
  }

  if (command === "author") {
  	message.channel.sendMessage("<@257337698338078721> is the creator of this bot!");
  }

});

setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);
