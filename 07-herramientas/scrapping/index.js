const puppeteer = require('puppeteer');

(async () => {
    console.log('Lanzamos navegador');
    // const browser = puppeteer.launch();
    const browser = puppeteer.launch({headless:false});

    const page = await (await browser).newPage()
    await page.goto('https://es.wikipedia.org/wiki/Node.js')

    const titulo1 = await page.evaluate(()=>{
        const h1= document.querySelector('h1')
        console.log(h1.innerText)
        return h1.innerText
    })

    console.log('Cerrando navegador...');
    // (await browser).close();
    console.log('Navegador cerrado');

})();