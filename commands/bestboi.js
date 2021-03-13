module.exports = {
    name: 'bestboi',
    description: "this is a stupid command",
    execute(message, args){
        message.channel.send(`${message.author} is best boi`);
    }
}