const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {

    //verif dulu
    if (!message.member.voice.channel) return message.channel.send({
        embed: {
            color: client.warna.error,
            description: `${client.warna.error} | Kamu harus memasuki *Voice Channel* terlebih dahulu!`
        }
    })

    if (!client.player.isPlaying(message.guild.id)) return message.channel.send({
        embed: {
            color: client.warna.error,
            description: `${client.warna.error} | Tidak ada musik yang diputar!`
        }
    })

    //mainkan tombolnya sterrr
    const bb = client.player.getQueue(message.guild.id).filters.subboost;
    if (!bb) {
        client.player.setFilters(message.guild.id, {
            subboost: true
        });
        message.channel.send("Efek Subboost telah diaktifkan!");
    } else {
        client.player.setFilters(message.guild.id, {
            subboost: false
        });
        message.channel.send("Efek Subboost telah dinonaktifkan!");
    };
}

exports.conf = {
    aliases: [],
    cooldown: 5
}

exports.help = {
    name: 'subboost',
    description: 'menberikan efek subboost pada musik',
    usage: 'subboost',
    example: 'subboost'
}
