const Discord = require('discord.js');

exports.run = (bot, CSDsCodeServer, args) => {
    
    let user;
    
    if (CSDsCodeServer.mentions.users.first()) {
      user = CSDsCodeServer.mentions.users.first();
    } else {
        user = CSDsCodeServer.author;
    }
    
    const ppavatar = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Discord Avatarınız İşte Budur,")
        .setImage(user.avatarURL)
        .addField(`Sunucumuza Gelmek İçin`, `[Bana Tıkla!](https://discord.gg/p6ngUdY)`,true)
    CSDsCodeServer.channel.sendEmbed(ppavatar)    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  Çalmaaaaaaaaaa: '',
  Çalmaaaaaaaaaa: ''
};
