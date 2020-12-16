const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (client.config.discord.channels.includes(message.channel.id)) return;
  try {
    let bicon = client.user.displayAvatarURL();
    let botembed = new Discord.MessageEmbed()
      .setColor(client.warna.kato)
      .setThumbnail(bicon)
      .addField("Nama", "Rysans")
      .addField("Tanggal Lahir", "30 Oktober")
      .addField("Pemilik", "Rysans#4321")
      .addField("Bahasa", "Discord.JS dengan NodeJS")
      .addField("Motto", "Uang bukan segalanya, tapi hidup butuh uang")
      .addField("Terima Kasih Kepada", "M. Naufal Faqih")
      .addField("Tim Pengembang", "The OwO Family dan Bot Commander Kato Megumi Fanbase")
      .setFooter("Stable Release | ManLord#3143")
      .setAuthor(message.guild.name, message.guild.iconURL())
    return message.channel.send(botembed);
  } catch (error) {
    return message.channel.send(`Something went wrong: ${error.message}`);
    // Restart the bot as usual.
  }
}

exports.conf = {
  aliases: ["kato"],
  cooldown: 5
}

exports.help = {
  name: 'about',
  description: 'melihat tentang Kato-Bot',
  usage: 'k!about',
  example: 'k!about'
}