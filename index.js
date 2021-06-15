"use strict";

console.log('Beep, boop! Baka! 👅');

require('dotenv').config();

const fetch = require('node-fetch');

const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN);

bot.on('ready', readyDiscord);

function readyDiscord() {
    console.log('💖');
}

bot.on('message', gotMessage);

async function gotMessage(msg) {
    
    if (msg.content === 'hi') {
        msg.channel.send('おはよう Ohayo! ^-^ 💕');
    } else if (msg.content == '!gif') {
      
        let url = `https://g.tenor.com/v1/search?q=kotori&key=${process.env.TENORKEY}&limit=8`;

        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        const index = Math.floor(Math.random() * json.results.length);

        msg.channel.send(json.results[index].url);
    }
}