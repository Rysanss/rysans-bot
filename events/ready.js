let discord = require('discord.js');

module.exports = client => {
  console.log('Tersambung.');
  client.user.setStatus('idle');

  function randomStatus() {
    let userTotal = client.guilds.cache.get("575510475396087818").memberCount;
    let status = [
      "We Are Ace Gangs",
      "type r.help",
      "Kirisaki Chitoge (o゜▽゜)o☆",
      `Members : ${userTotal}`,
      'Mabar ? Loginkan'
    ];
    let rstatus = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[rstatus], { type: 'PLAYING' });

  }; setInterval(randomStatus, 15000);

  function pengingat() {
    require('../plugin/pengingat.js')(client);
  } setInterval(pengingat, 60000)
}