const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/Denver', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1137237814547861596')
    .setType('STREAMING')
    .setURL('https://twitch.tv/developer') //Must be a youtube video link 
    .setState('☸')
    .setName('Moonilius')
    .setDetails(`𝖮𝗁, 𝗍𝗁𝖾 𝗍𝗂𝗆𝖾? 𝖨𝗍'𝗌 [${formatTime()}]`)
  
 .setAssetsLargeImage('https://media.discordapp.net/attachments/804261323914346536/1224215035484573788/IMG_4711.gif?ex=661cae19&is=660a3919&hm=a6596f8ed7c968450843b8ffb4b0ed88f56a7a36f0be0a5395b9b90c03b51505&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('“𝐂𝐥𝐞𝐚𝐯𝐞.”') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/804261323914346536/1196983831274737754/Tumblr_l_1083609293705998.gif?ex=65b99d10&is=65a72810&hm=409a6086f917fe6a8f7b1cc1aeed1681b9cdb134d75910b391dc7823b8d19577&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Tsuki') //Text when you hover the Small image
    .addButton('🜼', 'https://open.spotify.com/track/59MY06cY0nvWUApyWcTYGB?si=eUzdB43MTRuPDHJ5YsaFKw')


  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline
  
  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `»»-—　㌐　—-««`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
