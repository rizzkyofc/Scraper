const axios = require("axios");
const cheerio = require("cheerio");

async function tirbunNews() {
    const url = `https://www.tribunnews.com`;
    const { data } = await axios({
        method: "GET",
        url: url,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        },
    });
    const $ = cheerio.load(data);

    let result = [];

    $('.topil_right.ptb15.plr20').each((_, el) => {
        let title = $(el).find('a').text();
        title = title.replace(/\t|\n/g, '');
        const image = $(el).find('img').attr('src');
        const link = $(el).find('a').attr('href');
        const description = $(el).find('span').text().trim();

        result.push({
            title,
            image,
            link,
            description
        });
    });
    console.log(result);
}

tirbunNews();