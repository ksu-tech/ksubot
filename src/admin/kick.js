const Discord = require('discord.js');
const client = new Discord.Client();

// on sequence
client.on('ready', () => {
  console.log(`robot: on`);
});
// kick
client.on('message', message => {
    if (!message.guild) return;
 
   if (message.content.startsWith('!kick')) {
     const user = message.mentions.users.first();
     if (user) {
       const member = message.guild.member(user);
       if (member) {
         member
           .kick('not gamer')
           .then(() => {
             message.reply( ```succes```);
           })
           .catch(err => {
             message.reply(' ```missing perms/error``` ');
             console.error(err);
           });
       } else {
         // The mentioned user isn't in this guild
         message.reply(" ```user does not exist here``` ");
       }
      } else {
       message.reply(" ```err: no one was mentioned``` ");
     }
   }
 });
 client.login('NzQwNjE3OTk5OTQ1MzAyMDk5.XyroQw.p-hxadM_-70h_C5cmFV25I-U-P0');