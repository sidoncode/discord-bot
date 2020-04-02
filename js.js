const Discord = require('discord.js');
/**
const BLUE_ROLE = '613177155953754123';
const RED_ROLE = '613177260173950976';
const GREEN_ROLE = '613177224673099881';
 */
const bot = new Discord.Client();

bot.on('message', (message) => {
   /**  const parts = message.content.split(' ');

    if (parts[0] == '!role') {

        if(parts[1] == 'red') {
            message.member.addRole(RED_ROLE);
        }
        else if(parts[1] == 'green') {
            message.member.addRole(GREEN_ROLE);
        }
        else if(parts[1] == 'blue') {
            message.member.addRole(BLUE_ROLE);
        }

    }
    */
   if(message.content == '!hello'){
       message.reply('world');
   }

});

bot.login('Njk1MzQ0NTAxNjQzOTM1ODA1.XoY0Gg.NlgjiEpRfCPy_mCjZEwvjN9r6Zg'); // the token has been updated // 



// https://discordapp.com/api/oauth2/authorize?client_id=695344501643935805&permissions=2113924342&scope=bot