const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const readData = path => {
  try {
    return fs.readFileSync(path, 'utf8');
  } catch (error) {
    console.error('❌ Reading file error', error.stack);
  }
};

const writeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('❌ Writing file error', error.stack);
  }
};

const scrape = async () => {
  console.log('💻 Reading items to scrape...');
  const wishlistItems = readData(path.join(__dirname, 'wishlistItems.json'));

  const data = [];
  const browser = await puppeteer.launch();

  try {
    const page = await browser.newPage();

    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4298.0 Safari/537.36',
    );

    for (const { id, url, tags } of JSON.parse(wishlistItems)) {
      console.log(`💻 Scraping ${url}...`);

      await page.goto(url);

      const item = await page.evaluate(() => {
        const title =
          document.querySelector('#productTitle')?.innerText.trim() || '';
        const imageSrc =
          document.querySelector('#imgBlkFront')?.src ||
          document.querySelector('#ebooksImgBlkFront')?.src ||
          '';
        const priceEl =
          document.querySelector('.header-price')?.innerText ||
          document.querySelector('#kindle-price')?.innerText ||
          null;
        const price = parseFloat(priceEl?.replace(/\$/g, ''));

        return { title, imageSrc, price };
      });

      data.push({ id, url, tags, ...item });
    }
  } catch (error) {
    console.error('❌ Scrape error', error.stack);
  } finally {
    await browser.close();
  }

  console.log('💻 Sorting items...');
  data.sort((a, b) => a.price - b.price);

  console.log('💻 Writing to file...');
  writeData(data, path.join(__dirname, '../data/wishlist.json'));

  console.log('💻 Done!');
};

scrape();
