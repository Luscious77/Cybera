require('dotenv').config();

const Discord = require('discord.js');

const inlinereply = require('discord-reply');

const client = new Discord.Client();

const prefix = '!';

const figlet = require('figlet');

const fs = require('fs');

var color = require('chalk');

const keepAlive = require("./server");

client.commands = new Discord.Collection();

const triggerwords = ["somewords"];

var randomUni = require('./functions/randomUni.js')

var randomUgh = require('./functions/randomUgh.js')

var randomCheer = require('./functions/randomCheer.js')

var randomstfu = require('./functions/randomstfu.js')

var randomNice = require('./functions/randomNice.js')

var randomPhy = require('./functions/randomPhy.js')

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log(color.green('Cybera is Gonna bully some one'));

  client.user.setActivity('OMORI', { type: 'PLAYING' });

});

client.on('message', message => {
  let args = message.content.substring(prefix.length).split(" ");
  switch (args[0]) {
    case 'say2me':
    let saymsg = message.content
    message.author.send(saymsg.replace("!say2me",""))
    message.delete()
  }
})

client.on('message', message => {
  let args = message.content.substring(prefix.length).split(" ");
  switch (args[0]) {
    case 'say':
    let saymsg = message.content
     message.channel.send(saymsg.replace("!say",""))
     message.delete()
    break;
    
    //  let saymsg = message.content
    //    if (message.author.id == process.env.Angel || process.env.Moustafa){
    //       message.channel.send(saymsg.replace("!say",""))
    //       message.delete()
    //       } else {
    //         message.channel.send(`what are you doing ${message.author}?`)
    //       }
          
    //       break;

  //   case 'kickcc2':
  //     const user = message.mentions.users.first();

  //     if (user) {
  //       const member = message.guild.member(user);

  //       if (member) {
  //         member.kick('you got yeeted').then(() => {
  //           message.reply(`Sucessfully kicked ${user.tag}`);
  //         }).catch(err => {
  //           message.reply('I was unable to kick the member');
  //           console.log(err);
  //         });
  //       } else {
  //         message.reply("that user isn\'t in this guild")
  //       }

  //     } else {
  //       message.reply('you need to specify a person')
  //     }

  //     break;
  // }

  // switch (args[0]) {
  //   case 'bancc2':
  //     const user = message.mentions.users.first();

  //     if (user) {
  //       const member = message.guild.member(user);

  //       if (member) {
  //         member.ban({ ression: 'you were bad and!' }).then(() => {
  //           message.reply(`WE BANNED THE PLAYER! ${user.tag}`);
  //         })

  //       } else {
  //         message.reply("that user isn\'t in this guild");

  //       }
  //     } else {
  //       message.reply('you need to specify a person')
  //     }

  //     break;
  // }

  switch (args[0]) {
    case 'best':
      if (args[1] === 'boi') {
        client.commands.get('bestboi').execute(message, args);
      }
  };

  switch (args[0]) {
    case 'send':
      if (args[1] === 'death') {
        message.channel.send(`https://cdn.discordapp.com/attachments/755557527537713192/839810930627837963/death.mp4`);

      } else if (args[1] === 'war'){
        message.channel.send('they are loose for now');

      } else if (args[1] === 'famine'){
        message.channel.send('they remain uncaptured');

      } else if (args[1] === 'pestilence'){
        message.channel.send('they have not been spotted');
      } else {
        message.channel.send('choose; death, war, famine, pestilence')
      }
  };

  switch (args[0]) {
    case 'best':
      if (args[1] === 'gurl') {
        client.commands.get('bestgurl').execute(message, args);
      }
  };
  
  switch (args[0]) {

    case 'kickoo':
      message.channel.send('a secret has been found !')
      break;


    case 'website':
      message.channel.send('https://replit.com/@NightWalker2K/Cybera')
      break;


    case 'info':
      if (args[1] === 'version') {
        message.channel.send('Version 1.3 replit hosted');

      } else {
        message.channel.send('Invalid Args');
      }

    case `whos`:
      if (args[1] === 'thicc') {
        client.commands.get('whosthicc').execute(message, args);
      } //else {
      //     message.channel.send('Who?') 
      // }

      break;
    case 'who_da_best_lad?':
      if (args[1] === 'ted') {
        message.channel.send('ding ding big brain detected');
      } else {
        message.channel.send('not the correct answer')
      }
  }
}});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'sans') {
    client.commands.get('sans').execute(message, args);

  } else if (command == 'nou') {
    client.commands.get('nou').execute(message, args);

  } else if (command == 'bridge') {
    client.commands.get('bridge').execute(message, args);

  } else if (command == 'nadd') {
    client.commands.get('nadd').execute(message, args);

  } else if (command == 'never') {
    client.commands.get('never').execute(message, args);

  } else if (command == 'red1') {
    client.commands.get('red1').execute(message, args);

  } else if (command == 'oghelp') {
    client.commands.get('original-help').execute(message, args);

  } else if (command == 'help') {
    client.commands.get('newhelp').execute(message, args);

  } else if (command == 'bestboi') {
    client.commands.get('bestboi').execute(message, args);

  } else if (command == 'pingme') {
    client.commands.get('pingme').execute(message, args);

  } else if (command == 'holup') {
    client.commands.get('holup').execute(message, args);

  } else if (command == 'pog') {
    client.commands.get('pog').execute(message, args);

  } else if (command == 'rpog') {
    client.commands.get('rpog').execute(message, args);

  } else if (command == 'shreddit') {
    client.commands.get('clear').execute(message, args);

  } else if (command == 'uni') {
    message.channel.send(`https://cdn.discordapp.com/attachments/755557527537713192/857191451510177802/unknown.png`);
    // message.channel.send(randomUni());

  } else if (command == 'dmme') {
    client.commands.get('dmme').execute(message, args);

  } else if (command == 'whatismyavatar') {
    client.commands.get('wima').execute(message, args);

  } else if (command == 'fkthis') {
    client.commands.get('fkthis').execute(message, args);

  } else if (command == 'die') {
    client.commands.get('die').execute(message, args);

  } else if (command == 'again') {
    client.commands.get('again').execute(message, args);

  } else if (command == 'phy') {
    message.channel.send(randomPhy());

  } else if (command == 'jawad') {
    client.commands.get('jawad').execute(message, args);

  } else if (command == 'stfu') {
    message.channel.send(randomstfu());

  } else if (command == 'e') {
    client.commands.get('Ememe').execute(message, args);

  } else if (command == 'beat') {
    client.commands.get('beat').execute(message, args);

  } else if (command == 'embedcom') {
    client.commands.get('embedcom').execute(message, args);

  } else if (command == 'b') {
    client.commands.get('Bmeme').execute(message, args);

  } else if (command == 'ugh') {
    message.channel.send(randomUgh());

  } else if (command == 'cheerme') {
    message.channel.send(randomCheer());
  
  } else if (command == 'abccedd') {
    client.commands.get('never').execute(message, args);

  } else if (command == 'testcommand') {
    message.channel.send('receved');

  } else if (command == 'go') {
    client.commands.get('go').execute(message, args);

  } else if (command == 't') {
    client.commands.get('TTT').execute(message, args);

  } else if (command == 'heh') {
    client.commands.get('heh').execute(message, args);

  } else if (command == 'eidk') {
    client.commands.get('eidk').execute(message, args);

  } else if (command == 'ohh') {
    client.commands.get('ohh').execute(message, args);

  } else if (command == 'die2') {
    client.commands.get('die2').execute(message, args);

  } else if (command == 'angsip') {
    client.commands.get('angsip').execute(message, args);

  } else if (command == 'erpepe') {
    client.commands.get('erpepe').execute(message, args);
    
  } else if (command == 'winky') {
    client.commands.get('winky').execute(message, args);

  } else if (command == 'ksip') {
    client.commands.get('ksip').execute(message, args);

  } else if (command == 'etoyey') {
    client.commands.get('etoyey').execute(message, args);

  } else if (command == 'die3') {
    client.commands.get('die3').execute(message, args);

  } else if (command == 'ohno') {
    client.commands.get('ohno').execute(message, args);

  } else if (command == 'case') {
    client.commands.get('case').execute(message, args);

  } else if (command == 'g') {
    client.commands.get('g').execute(message, args);

  } else if (command == 'hahprof') {
    client.commands.get('hahprof').execute(message, args);

  } else if (command == 'cmp') {
    client.commands.get('cmp').execute(message, args);

  } else if (command == 'nice') {
    message.channel.send(randomNice());

  } else if (command == 'meme') {
    client.commands.get('meme').execute(message, args, Discord);

  } else if (command == 'scp') {
    client.commands.get('scp').execute(message, args, Discord);

  } else if (command == 'emoji') {
    client.commands.get('emojiList').execute(message, args, Discord);

  } else if (command == 'triggers') {
    client.commands.get('triggerList').execute(message, args, Discord);

  } else if (command == 'images') {
    client.commands.get('imageList').execute(message, args, Discord);

  }
});


client.on('message', message => {
  if (triggerwords.some(word =>
  message.content.includes(`Cystatus`))) {
    message.channel.send('online')
  }
})
client.on('message', message => {
  if (message.author.id == process.env.Cosmic47 || message.author.bot) return;
  if (triggerwords.some(word =>
    message.content.includes(`ST7`))) {
    message.delete()
    message.channel.send('a secret has been released')
  }
//   if (triggerwords.some(word =>
//     message.content.includes(`wtf`))) {
//     message.lineReplyNoMention('not even i can tell you the answer to that')
//   }
//   if (triggerwords.some(word =>
//    message.content.includes(`sus`))) {
//    message.delete()
//    message.channel.send(`not on my watch ${message.author.username} you nasty mf`)
//    //${message.author}
//    message.author.send('https://cdn.discordapp.com/attachments/755557527537713192/835280969577136159/unknown.png')
//    message.author.send('https://cdn.discordapp.com/attachments/755557527537713192/835280969577136159/unknown.png')
//    console.log(color.red(message.author.username));
//    fs.writeFile('newfile.txt', message.author, (err) => {
//    if(err) console.log(err);
//    });
//   }
//   if (triggerwords.some(word =>
//     message.content.includes('sadnt'))) {  
//      //  message.delete()
//     message.lineReply('good `:emoji:`')
//   }
  else if (triggerwords.some(word =>
    message.content.includes('depressing'))) {
    message.lineReply('you dont have a depressed ass you worthless pos')
  }
  else if (triggerwords.some(word =>
    message.content.includes('suicide'))) {
    message.lineReply('do it bitch and while at it do a backflip mf')
  }
//   else if (message.content.includes('quizz')) {
//     message.lineReply('<:emoji:817828653378830407>')
//   }
//   else if (triggerwords.some(word =>
//     message.content.includes('angry'))) {
//     message.lineReply('even better')
//   }
  else if (triggerwords.some(word =>
    message.content.includes('depression'))) {
    message.lineReply('na fam dont say that look at the bright side your drip is fresh as fuck')
  }
//   else if (triggerwords.some(word =>
//     message.content.includes('sad'))) {
//     message.lineReply('<:StressedDepressed:818860049279615056>')
//   }
//   else if (triggerwords.some(word =>
//     message.content.includes('oof'))) {
//     message.lineReply(`https://cdn.discordapp.com/attachments/755557527537713192/826903079714422881/FWg904.gif`)
//   }
//   else if (triggerwords.some(word =>
//     message.content.includes('frayos'))) {
//     message.react('😈')
//   }
//   else if (triggerwords.some(word =>
//     message.content.includes('angel of vanity'))) {
//     message.react('😇')
//   }
//   else if (triggerwords.some(word =>
//     message.content.includes('say it'))) {
//     message.lineReply('na uh')
//   }
  // else if (triggerwords.some(word =>
  //   message.content.includes('!nice'))) {
  //   message.channel.send(randomNice())
  // }
//   else if (triggerwords.some(word =>
//     message.content.includes('afternoon'))) {
//     message.channel.send(`https://cdn.discordapp.com/attachments/755557527537713192/840952360436105246/ezgif-7-ac6ece79150c.gif`)
//   }
//   else if (triggerwords.some(word =>
//     message.content.includes('noice'))) {
//     message.channel.send(randomNice())
//   }
//   else if (triggerwords.some(word =>
//     message.content.includes('هلا'))) {
//     message.lineReply(`https://tenor.com/view/hello-welcome-bab-alhara-syrian-drama-abu-shehab-gif-11846307`)
//   }
//   else if (triggerwords.some(word =>
//     message.content.includes('horny'))) {
//     message.channel.send(`${message.author}`)
//     message.lineReply(`https://cdn.discordapp.com/attachments/755557527537713192/842022682174292028/horne_people.mp4`)
//     message.delete()
//   }
//   else if (triggerwords.some(word =>
//     message.content.includes('bruh'))) {
//     message.channel.send(`https://cdn.discordapp.com/attachments/755557527537713192/839064908448530473/ezgif-3-7e1ad0c194b8.gif`)
//   }
//   else if (triggerwords.some(word =>
//     message.content.includes('abc_123'))) {
//     message.channel.send(color.red('yo yo'))
//     message.channel.send(console.log)
//   }
//   else if (triggerwords.some(word =>
//     message.content.includes('hentai'))) {
//     message.lineReply(`https://media1.tenor.com/images/2e701b8caba59d3aa0f1c3675c22f331/tenor.gif?itemid=21581245`)
//     //https://cdn.discordapp.com/attachments/755557527537713192/843479455594971146/cover10.png
//   }
//   else if (triggerwords.some(word =>
//     message.content.includes('test'))) {
//     if (message.author.id == process.env.Dripalicous){
//       message.react('🤐')
//     }
//     else message.channel.send("alright")
//   }
//    else if (triggerwords.some(word =>
//      message.content.includes('hope')))
//      if (message.author.bot){
//        message.react('😑')
//      } else if
//        (message.author.id == process.env.Dripalicous){
//        message.react('🤐')
//      }
//      else message.lineReply(`https://cdn.discordapp.com/attachments/755557527537713192/840946402452045844/ezgif-4-67674432d02c.gif`)

//      else if (triggerwords.some(word =>
//      message.content.includes('morning'))) {
//      message.channel.send(`https://cdn.discordapp.com/attachments/755557527537713192/840945847034314772/ezgif-4-b51db6851915.gif`)
    
// }
})


client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  //|| message.author.bot

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'bios') {
    if (message.author.id == process.env.Dripalicous){
        client.commands.get('embed-Dripalicous').execute(message, args);
       }
        else if (message.author.id == process.env.Bisher){
        client.commands.get('embed-Bisher').execute(message, args);
       }
       else if (message.author.id == process.env.ItsDemetri){
         client.commands.get('embed-ItsDemetri').execute(message, args);
       }
       else if (message.author.id == process.env.Andy){
         client.commands.get('embed-Andy').execute(message, args);
       }
       else if (message.author.id == process.env.Bob){
         client.commands.get('embed-Bob').execute(message, args);
       }
       else if (message.author.id == process.env.Dizzy){
         client.commands.get('embed-Dizzy').execute(message, args);
       }
       else if (message.author.id == process.env.Mbgamer){
         client.commands.get('embed-Mbgamer').execute(message, args);
       }
       else if (message.author.id == process.env.Moustafa){
         client.commands.get('embed-Moustafa').execute(message, args);
       }
       else if (message.author.id == process.env.Salem){
         client.commands.get('embed-Salem').execute(message, args);
       }
       else if (message.author.id == process.env.Sam){
         client.commands.get('embed-Sam').execute(message, args);
       }
       else if (message.author.id == process.env.Shoyo){
         client.commands.get('embed-Shoyo').execute(message, args);
       }
       else if (message.author.id == process.env.Tan){
         client.commands.get('embed-Tan').execute(message, args);
       }
       else if (message.author.id == process.env.Tuti){
         client.commands.get('embed-Tuti').execute(message, args);
       }
       else if (message.author.id == process.env.Malloc){
         client.commands.get('embed-malloc').execute(message, args);
       }
       else if (message.author.id == process.env.Kuriba){
         client.commands.get('embed-Kuriba').execute(message, args);
       }
       else if (message.author.id == process.env.Angel){
         client.commands.get('embed-angel').execute(message, args);
       }
       else if (message.author.id == process.env.Khaled){
         client.commands.get('embed-Khaled').execute(message, args);
       }
       else if (message.author.id == process.env.Cybera){
         client.commands.get('embed-Cybera').execute(message, args, Discord);
       }
       else message.reply("sorry but... who are you again ?")
  }
})

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ascii') {
    if(!args[0]) return message.channel.send('Please provide some text');

      msg = args.join(" ");

      figlet.text(msg, function (err, data){
          if(err){
              console.log('Something went wrong');
              console.dir(err);
          }
          if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters')

          message.delete()
          message.channel.send('```' + data + '```')
      })
  }
})

keepAlive();
client.login(process.env.TOKEN);