const venom = require('venom-bot');

venom
    .create()
    .then((client) => start(client));

function start(client) {
    client.onMessage((message) => {
            var msg = message.body.toLowerCase();
    
            if (msg.indexOf('codigo fonte do bot') >= 0) {
                client
                    .sendText(message.from, 'Opa, aqui está \n https://github.com/Apenasgabs/Bot_ADS')
            }
            if (msg.indexOf('👄') >= 0) {
                client
                    .sendText(message.from, '👁️👄👁️')
            }
        console.log(message.isGroupMsg);
        console.log(msg);
    });
}