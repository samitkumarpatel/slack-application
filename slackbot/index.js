var SlackBot = require('slackbots');
 
// inspired from https://www.npmjs.com/package/slackbots
// Add a bot https://my.slack.com/services/new/bot and put the token 
// https://www.youtube.com/watch?v=nyyXTIL3Hkw&t=578s

var bot = new SlackBot({
    token: 'XXXXXXXXXXX', // select the bot -than select  OAuth & Permission - than copy the Bot User OAuth Access Token
    name: 'demobot'
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':cat:'
    };
    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('general', 'meow!', params);
    bot.postMessageToUser('samitkumarpatel', 'meow!', params);

});