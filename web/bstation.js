const axios = require("axios");
const cheerio = require('cheerio');

async function bsTattion(s) {
    const url = `https://www.bilibili.tv/id/search-result?q=${s}`;
    const { data } = await axios({
        method: "GET",
        url: url,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36" //Bisa Juga "Mozilla/5.0"
        },
    });
    const $ = cheerio.load(data);

    let result = [];

    $('.ogv__content').each((_, el) => {
        const anime = $(el).find('i.highlights__text.highlights__text--active').text().trim();
        const title = $(el).find('i.highlights__text').text().trim();
        const views = $('span.meta__tips-text').text().trim();
        const description = $('p.ogv__content-desc').text().trim();
        const type = $(el).find('.section-title').text().trim() || "Not Found";
        const play = 'https://www.bilibili.tv' + $(el).find('a').attr('href');
        const image = $('.ogv__cover > a > img').attr('src');

        result.push({
            anime,
            title,
            views,
            description,
            play,
            type,
            image
        });
    });
    console.log(result);
}

bsTattion('Boruto');