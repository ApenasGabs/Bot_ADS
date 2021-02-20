const venom = require('venom-bot');

function foradogrupo = {
    var msg = message.body.toLowerCase();
            if (msg.indexOf('batata') >= 0) {
                client
                    .sendText(message.from, 'amo')
                    .sendFile('/index.js')
            }
    
            if (msg.indexOf('codigo fonte do bot') >= 0) {
                client
                    .sendText(message.from, 'Opa, aqui está \n https://github.com/lia18317/Bot_ADS')
    
            }
    
            if (msg.indexOf('👄') >= 0) {
                client
                    .sendText(message.from, '👁️👄👁️')
            }
    
            if (msg.indexOf('link aula') >= 0) {
                client
                    .sendText(message.from, 'Quer o trello? tem todos links la \n https://trello.com/b/PTvmLKAP/metrocampianos')
            }
    
            if (msg.indexOf('feio') >= 0) {
                client
                    .sendText(message.from, 'Não sou feio, minha beleza é rústica 🥴')
            }
    
            if (msg.indexOf('corno') >= 0) {
                client
                    .sendText(message.from, 'Nunca fui corno. Mas como o corno é sempre o último a saber, talvez seja só uma questão de informação.')
            }
    
            if (msg.indexOf('oi bot') >= 0) {
                client
                    .sendText(message.from, 'eai quebrada, suave?')
            }
    
            if ((msg.indexOf('👀') >= 0) || msg.indexOf('👁️👁') >= 0) {
                client
                    .sendText(message.from, '👀')
            }
            if (message.body === '👀' || message.body === '👁️' || message.body === '👁️👁️') {
                client
                    .sendText(message.from, '👀')
            }
    
        }
}