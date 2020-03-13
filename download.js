const puppeteer = require('puppeteer');
const fs = require('fs');
const yaml = require('js-yaml');
const fileContents = fs.readFileSync('./gen.yaml', 'utf8');
const data = yaml.safeLoad(fileContents);
const count = data.count;

(async () => {


  var i;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for(i=0; i<count; i++){
    await page.goto('https://thispersondoesnotexist.com');
    var new_image = 'example' + i.toString() + '.jpeg';
    await page.screenshot({path: new_image});
  }


  await browser.close();
})();
