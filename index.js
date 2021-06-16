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

const commandHandler = require("./commands");

bot.on('message', commandHandler);

