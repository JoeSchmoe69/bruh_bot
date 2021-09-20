client.on('message', message => {
  console.log(`[${message.author.tag}]: ${message.content}`);
   if (message.content === `brh!gayrate `) {
     var rating = Math.floor(Math.random() * 100) + 1;
     message.reply(`You are ${rating}% gay!🥶`);
   }
  });