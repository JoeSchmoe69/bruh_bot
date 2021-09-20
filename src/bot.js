require('dotenv').config();

const { Client, DiscordAPIError } = require('discord.js');
const client = new Client();
const fetch = require("node-fetch");
const randomPuppy = require('random-puppy');
const { MessageEmbed } = require("discord.js")
const PREFIX = '$';
const got = require('got');
const userID = "780659988057030676"
const Discord = require('discord.js');


client.on('ready', () => {
  console.log('I am ready!');
client.user.setActivity("Awaiting brh!help")  
});

client.on('message', (message) => {
  console.log(`[${message.author.tag}]: ${message.content}`);
  if (message.content === 'brh!urmom') {
    message.channel.send('```YAML\n yer mim gae```');

  }
});    

client.on('message', (message) => {
  console.log(`[${message.author.tag}]: ${message.content}`);
  if (message.content === 'brh!assad') {
    message.channel.send("``You use brh!assad. Assad grants you the Anti-horny effect for the next 24 hours. Remember to come back once it expires cuz you dont really wanna mess with those cr1gne simps amirite?``")
        
  }
});   

client.on('message', (message) => {
  console.log(`[${message.author.tag}]: ${message.content}`);
  if (message.content === 'brh!bruhmoment') {
    const messages = ["``Thats cool but why are you lifting my balls?\n -Rose 2021``", "``Imagine imagining in 2021 cr1gne\n Joe 2021``","``his birthday is set to the day he was born\n -Joe 2021``","``I do not want Pokemans I want Pokewomans\n Shaun 2021``", "``Is there a job where I stalk females?\n Afraz 2021``"]

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    console.log(randomMessage);
    message.channel.send(randomMessage)    
  }
});    

client.on('message', (message) => {
  console.log(`[${message.author.tag}]: ${message.content}`);
  if (message.content === 'brh!im12andthisissex') {
    const messages = ["https://i.redd.it/8vr0zmihhc671.png", "https://i.redd.it/pu2s0xpqgc671.png", "https://i.redd.it/jmkhu24dgc671.jpg", "https://cdn.discordapp.com/attachments/854764615049150534/855148961136771082/unknown.png", "https://cdn.discordapp.com/attachments/854764615049150534/854766987364007946/unknown.png"]

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    console.log(randomMessage);
    message.channel.send(randomMessage)    
  }
});

client.on('message', (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith.PREFIX) {
    const CMD_NAME = message.content.substring(PREFIX.length);
    console.log(CMD_NAME);
    }
});    

client.on('message', (message) => {
  console.log(`[${message.author.tag}]: ${message.content}`);
  if (message.content ==='brh!typetest') {
    const messages = ['Type the following with 100% accuracy\n``Shoot all the bluejays you want, if you can hit them, but remember its a sin to kill a mockingbird``', 'Type the following with 100% accuracy\n``So we beat on, boats against the current, borne back ceaselessly into the past.``', 'Type the following with 100% accuracy\n``Whatever our struggles and triumphs, however we may suffer them, all too soon they bleed into a wash, just like watery ink on paper.``']

    const randomQuote = messages[Math.floor(Math.random() * messages.length)];

    message.channel.send(randomQuote)
  }
});

client.on('message', (message) => {
  console.log(`[${client.author}]: ${message.content}`);

  const messages = ['Shoot all the bluejays you want, if you can hit them, but remember its a sin to kill a mockingbird', 'So we beat on, boats against the current, borne back ceaselessly into the past.', 'Whatever our struggles and triumphs, however we may suffer them, all too soon they bleed into a wash, just like watery ink on paper.']

  const randomQuote = messages[Math.floor(Math.random() * messages.length)];

   if (message.content === randomQuote) 
    message.channel.send('You responded with 100% accuracy 🥳')
});



client.on("message", function(message){
  if(!message.sender === userID)
  {
  
  if(message.content === 'brh!gayrate')
  {
      message.channel.send('You are 100% gay!🥶');
  }
}});

client.on('message', (message) => {
  console.log(`[${message.author.tag}]: ${message.content}`);
  if (message.content === 'brh!help') {
    const help = new Discord.MessageEmbed()
     .setColor('#f9d423')
     .setTitle('Help with commands')
     .setDescription('Just some help!')
     .addFields(
         { name: 'brh!urmom', value: 'basically just says your mom', inline: true },
         { name: 'brh!bruhmoment', value: '😐', inline: true },
         { name: 'brh!im12andthisissex', value: 'r/im12andthisissex', inline: true },
         { name: 'brh!assad', value: 'Assad 🙏🥺', inline: true },
         { name: 'brh!gayrate', value: 'shows how gay you are', inline: true },
         { name: 'brh!typetest', value: 'see how accurate you are at typing', inline: true },
     )
     .setTimestamp()
     .setFooter('Just a friendly discord bot!');

    message.channel.send(help);
    
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
