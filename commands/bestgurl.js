module.exports = {
    name: 'bestgurl',
    description: "this is a stupid command",
    execute(message, args){
        message.channel.send(`${message.author} is best gurl`);
    }
}