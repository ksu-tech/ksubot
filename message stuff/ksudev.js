const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`robot: on`);
});
client.on('message', msg=> {
    if (msg.content === '*play lofi hiphop'){
        msg.reply('https://www.youtube.com/watch?v=5qap5aO4i9A')
    }
}
);
client.on('message', msg=> {
    if (msg.content === '*dankmeme'){
        msg.reply('https://www.reddit.com/r/dankmemes/')
    }
}
);
client.on('message', message => {
    if (!message.guild) return;
 
   if (message.content.startsWith('!kick')) {
     const user = message.mentions.users.first();
     if (user) {
       const member = message.guild.member(user);
       if (member) {
         member
           .kick('Optional reason that will display in the audit logs')
           .then(() => {
             message.reply(`kicked ${user.tag}`);
           })
           .catch(err => {
             message.reply('missing perms/error');
             console.error(err);
           });
       } else {
         // The mentioned user isn't in this guild
         message.reply("user does not exist here");
       }
      } else {
       message.reply("err: no one was mentioned");
     }
   }
 });
client.login('NzQwNjE3OTk5OTQ1MzAyMDk5.XyroQw.1wRpH5-W3ts0mj9RSqiV5xbrF7M');