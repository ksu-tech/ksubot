const Discord = require('discord.js');
const client = new Discord.Client();

// on sequence
client.on('ready', () => {
  console.log(`robot: on`);
});

// MESSAGE CODE
client.on('message', msg=> {
    if (msg.content === '!play lofi hiphop'){
        msg.reply('https://www.youtube.com/watch?v=5qap5aO4i9A')
    }
}
);
client.on('message', msg=> {
    if (msg.content === '!dankmeme'){
        msg.reply('https://www.reddit.com/r/dankmemes/')
    }
}
);

// token
client.login('NzQwNjE3OTk5OTQ1MzAyMDk5.XyroQw.p-hxadM_-70h_C5cmFV25I-U-P0');