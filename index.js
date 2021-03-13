require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

const keepAlive = require("./server");

client.commands = new Discord.Collection();

const swearwords = ["shit","fuk","ex0","ex1","ex2"];


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Nighyt is mighty');

    client.user.setActivity('swimming', { type: 'WATCHING' });

});

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    switch (args[0]) {
        case 'kickcc2':
            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('you got yeeted').then(() => {
                        message.reply(`Sucessfully kicked ${user.tag}`);
                    }).catch(err => {
                        message.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else {
                    message.reply("that user isn\'t in this guild")
                }

            } else {
                message.reply('you need to specify a person')
            }

            break;
    }

    switch (args[0]) {
        case 'bancc2':
            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.ban({ression: 'you were bad and!'}).then(() => {
                        message.reply(`WE BANNED THE PLAYER! ${user.tag}`);
                    })
                     
                } else {
                    message.reply("that user isn\'t in this guild");

                }
            } else {
                message.reply('you need to specify a person')
            }

            break;
    }

    switch (args[0]) {
        case 'best':
            if (args[1] === 'boi') {
                client.commands.get('bestboi').execute(message, args);
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
            message.channel.send('https://www.youtube.com')
            break;


        case 'info':
            if (args[1] === 'version') {
                message.channel.send('Version 4.3');

            } else {
                message.channel.send('Invalid Args')
            }

        case `whos`:
            if (args[1] === 'thicc') {
                client.commands.get('whosthicc').execute(message, args);
            } else {
                message.channel.send('Who?') 
            }

            break;
        case 'bestladdis':
            if (args[1] === 'bob') {
                message.channel.send('ding ding big brain detected');
            } else {
                message.channel.send('Wroooong')
            }
    }
});

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

    } else if (command == 'help') {
        client.commands.get('help').execute(message, args);

    } else if (command == 'bestboi') {
        client.commands.get('bestboi').execute(message, args);

    } else if (command == 'pingme') {
        client.commands.get('pingme').execute(message, args);

    } else if (command == 'holup') {
        client.commands.get('holup').execute(message, args);

    } else if (command == 'magnus_lutum_ex_owo') {
        client.commands.get('magnus_lutum_ex_owo').execute(message,  args);
    }

    if (command === 'gping'){
       client.channels.cache.get('765642595485220898').send('hi');
       client.channels.cache.get('778359016278851634').send('am a epic gae mr');
       client.channels.cache.get('789762689307377676').send('anime is kewl but drip is kewler');
      //  client.channels.cache.get('').send('hi');
      //  client.channels.cache.get('').send('');
      //  client.channels.cache.get('').send('');
      //  client.channels.cache.get('').send('');
      //  client.channels.cache.get('').send('');
      //  client.channels.cache.get('').send('');
    }

    if (command == 'dmme'){
  message.author.send('by the time you are reading this you are here by prenounced gae https://cdn.discordapp.com/attachments/755557527537713192/820016889170231346/unknown.png');
  
}});

client.on('message', message => {

    if (message.content === '!what is my avatar') {
        message.reply(message.author.displayAvatarURL());
    }
})

client.on('message', message => {

    if (message.content === '!test1') {
        message.channel.send(`test`);
    }
})



client.on('message', message => {
    if (swearwords.some(word =>
        message.content.includes(`E0`)))
        {
           message.delete()
           message.channel.send('crap')
        }
    
})

client.on('message', message => {
    if (swearwords.some(word =>
        message.content.includes(`E1`)))
        {
           message.delete()
           message.channel.send('bad!')
        }
    
})

client.on('message', message => {
    if (swearwords.some(word =>
        message.content.includes(`E2`)))
        {
           message.delete()
           message.channel.send('a secret has been released')
        }
    
})

client.on('message', message => {
    if (swearwords.some(word =>
        message.content.includes(`E3`)))
        {
           message.delete()
           message.channel.send('frick')
        }
    
})

client.on('message', message => {
    if (swearwords.some(word =>
        message.content.includes(`sad`)))
        {
          //  message.delete()
           message.channel.send('good')
        }
    
})

client.on('message', message => {
    if (swearwords.some(word =>
        message.content.includes(`angery`)))
        {
          //  message.delete()
           message.channel.send('even better')
        }
    
})
client.on('message', message => {
    if (swearwords.some(word =>
        message.content.includes(`depression`)))
        {
          //  message.delete()
           message.channel.send('LMAOO you are a joke')
        }
    
})




keepAlive();
client.login(process.env.TOKEN);