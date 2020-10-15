const venom = require('venom-bot');

venom
    .create()
    .then((client) => start(client));

function start(client) {
    client.onMessage((message) => {
        if (message.body === 'codigo fonte do bot' || message.body === 'Codigo fonte do bot') {
            client
                .sendText(message.from, 'Opa, aqui esta')
                .sendFile('/index.js')
        }
        if (message.body === '👄' || message.body === '👁️👄👁️' || message.body === '👁️👁️👁️') {
            client
                .sendText(message.from, '👁️👄👁️')
        }
        if (message.body === 'Link da aula?' || message.body === 'link da aula?' || message.body === 'Alguém tem o link do zoom?' || message.body === 'link do zoom' || message.body === 'Link do trelo?' || message.body === 'Link do trelo' || message.body === 'passa o link do zoom') {
            client
                .sendText(message.from, 'Quer o trelo? tem todos links la \n https://trello.com/b/PTvmLKAP/metrocampianos')
        }
        if (message.body === '@bot feio' || message.body === 'bot feio' || message.body === 'bot feio') {
            client
                .sendText(message.from, 'Não sou feio, minha beleza é rústica 🥴')
        }
        if (message.body === 'bot e corno' || message.body === 'bot chifrudo' || message.body === 'Bot é corno' || message.body === 'o bot é corno' || message.body === '@bot é corno' || message.body === 'Corno' && message.isGroupMsg === false) {
            client
                .sendText(message.from, 'Nunca fui corno. Mas como o corno é sempre o último a saber, talvez seja só uma questão de informação.')
        }
        if (message.body === 'nao' || message.body === '@bot Olá' || message.body === '@bot oi') {
            client
                .sendText(message.from, 'Falai ')
        }
        if (message.body === '@bot Oi' || message.body === '@bot Olá' || message.body === '@bot oi') {
            client
                .sendText(message.from, 'Falai ')
        }
        if (message.body === '👀' || message.body === '👁️' || message.body === '👁️👁️') {
            client
                .sendText(message.from, '👀')
        }
        if (message.body === 'Documentacao do bot' || message.body === 'Repositorio do bot' || message.body === 'git do bot' || message.body === 'Git do bot') {
            client
                .sendText(message.from, 'o link do repositorio: https://github.com/Apenasgabs/Bot_ADS e esse se quiser modificar fique a vontade \n e aqui esta a documentação do projeto original https://www.npmjs.com/package/venom-bot  ')
        }
    });
}