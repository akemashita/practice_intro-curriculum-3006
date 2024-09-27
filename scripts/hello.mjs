'use strict';

// module.exports = (robot) => {
//   robot.hear(/hello>/i, (msg) => {
//     const username = msg.message.user.name;
//     msg.send('Hello, ' + username);
//   });
// };

export default async function (robot) {
  robot.hear(/hello>/i, async res => {
    const username = res.message.user.real_name;
    res.send('Hello, ' + username);
  });

  robot.hear(/誰かいますか/i, async res => {
    res.send('私がいます');
  });

  robot.respond(/こんにちは/i, async res => {
    res.reply('hello!!');
  });

  robot.hear(/さようなら/i, async res => {
    res.emote('またね');
  });

  robot.hear(/lot>/i, async res => {
    // console.log(res);
    const USERNAME = res.message.user.real_name || '不明';
    const LOTS = ['大吉', '吉', '中吉', '末吉', '凶'];
    const RESULT = LOTS[Math.floor(Math.random() * LOTS.length)];
    res.send(`${RESULT}, ${USERNAME}`);
  });
}