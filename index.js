const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const config = require('./config.json');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  // Command to show store
  if (message.content.toLowerCase() === '!store') {
    const embed = new EmbedBuilder()
      .setColor('#9C27B0')
      .setTitle('💎 Haunted Blaze MC ┃ Rank & Key Store')
      .setDescription(
        `🛡️ **Ranks (Lifetime Access)**\n` +
        `⚔️ Knight ━ 39k OwO / 8 invites\n` +
        `👑 Lord ━ 79k OwO / 16 invites\n` +
        `🛡️ Paladin ━ 149k OwO / 30 invites\n` +
        `🎩 Duke ━ 249k OwO / 50 invites\n` +
        `🔱 King ━ 349k OwO / 70 invites\n\n` +
        `✨ **Custom Rank System**\n` +
        `🎨 Custom Rank (solid) ━ 599k OwO / 120 invites\n` +
        `🌈 Custom Rank (gradient) ━ 899k OwO / 180 invites\n` +
        `🧰 Add-on: Custom Kit ━ +299k OwO / +60 invites *(optional)*\n\n` +
        `🎁 **Crate Keys (3x per purchase)**\n` +
        `📦 Common ━ 25k OwO / 5 invites\n` +
        `🎁 Rare ━ 49k OwO / 10 invites\n` +
        `💠 Epic ━ 89k OwO / 18 invites\n` +
        `🔮 Superior ━ 149k OwO / 30 invites\n` +
        `🗳️ Vote Key — Free via /vote\n\n` +
        `💬 Ask staff for help or to redeem!`
      )
      .setFooter({ text: 'From Haunted Blaze MC — Official Item Store' });

    message.channel.send({ embeds: [embed] });
  }
});

client.login(config.token);
