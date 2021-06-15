"use strict";

console.log('Beep, boop!');

require('dotenv').config();

const fetch = require('node-fetch');

const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN);

bot.on('ready', readyDiscord);

function readyDiscord() {
    console.log('Kotori-bot ready to go master. 💖');
}

bot.on('message', gotMessage);

async function gotMessage(msg) {

        let tokens = msg.content.split(" ");
    
    if (tokens[0] === 'hi') {
        msg.channel.send('おはよう Ohayo! ^-^ 💕');
    } else if (tokens[0] == '!gif') {

        let keywords = 'anime girl';
        if (tokens.length > 1) {
            keywords = tokens.slice(1, tokens.length).join(" ");
        }
      
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=low`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);

        msg.channel.send(json.results[index].url);
    }
}