const axios = require("axios");
const cheerio = require("cheerio");

async function jktNews() {
    const url = `https://jkt48.com/news/list?lang=id`;
    const { data } = await axios({
        method: "GET",
        url: url,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
            "Referer": "https::/jkt48.com/news/list?lang=id",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"
        }
    });
    const $ = cheerio.load(data);

    let result = [];

    $('.entry-news__list').each((_, el) => {
        const title = $(el).find('h3').text().trim();
        const date = $(el).find('entry-news__list--item > time').text().trim();
        const src = 'https://jkt48.com' + $(el).find('a').attr('href');

        result.push({
            title,
            date,
            src,
        });
    });
    console.log(result);
}

jktNews();