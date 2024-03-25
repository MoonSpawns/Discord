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
    .setState('𝐈 𝐝𝐨𝐧’𝐭 𝐤𝐧𝐨𝐰 𝐲𝐨𝐮.')
    .setName('Moonilius')
    .setDetails(`𝖮𝗁, 𝗍𝗁𝖾 𝗍𝗂𝗆𝖾? 𝖨𝗍'𝗌 [${formatTime()}]`)
  
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1087950091303788565/1221904374733734039/Tumblr_l_1083612698496518-1.gif?ex=66144620&is=6601d120&hm=3ac4569e2a0faa02c9b8806247ed0bd087fa8b613133d56b0f03551837bd0ff1&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝐂𝐨𝐧𝐬𝐢𝐝𝐞𝐫 𝐭𝐡𝐚𝐭 𝐚 𝐠𝐨𝐨𝐝 𝐭𝐡𝐢𝐧𝐠.') //Text when you hover the Large image
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
