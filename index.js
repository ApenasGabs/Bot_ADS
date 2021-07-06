const venom = require("venom-bot");
const puppeteer = require("puppeteer");

async function robo() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const moedaBase = "dolar",
    moedaFinal = "real";
  const myPage = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}`;
  await page.goto(myPage);
  const resultado = await page.evaluate(() => {
    return document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value;
  });
  console.log(foi);
  const tudo = `O valor de 1 ${moedaBase} para ${moedaFinal} é ${resultado}`;
  return console.log(tudo);
}

venom
  .create({
    headless: false,
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

async function start(client) {
  client.onMessage((message) => {
    var msg = message.body.toLowerCase();

    if (msg.indexOf("codigo fonte do bot") >= 0) {
      client.sendText(
        message.from,
        "Opa, aqui está \n https://github.com/Apenasgabs/Bot_ADS"
      );
    }
    if (msg.indexOf("👀") >= 0) {
      client.sendText(message.from, "👁️👄👁️");
    }
    if (msg.indexOf("dolar") >= 0) {
      robo();
      client.sendText(message.from, robo());
    }
    console.log(message.isGroupMsg);
    console.log(msg);
  });
}
