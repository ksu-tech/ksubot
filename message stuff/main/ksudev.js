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

 // VC CODE
 client.on('message', async message => {
  if (!message.guild) return;
    if (message.content === '!join vc') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('go in vc nerd');
    }
  }
});
client.on('message', async message =>  {
  if (!message.guild) return;
    if (message.content === '!leave vc') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.leave();
    } else {
      message.reply('am not in vc');
    }
  }
});
// ban
client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
         
        member
          .ban({
            reason: 'not gamer',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply(' ```err: no one was mentioned``` ');
            console.error(err);
          });
      } else {
        message.reply(" ```user does not exist here``` ");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
});
// token
client.login('NzQwNjE3OTk5OTQ1MzAyMDk5.XyroQw.1wRpH5-W3ts0mj9RSqiV5xbrF7M');