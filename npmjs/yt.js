const { youtube } = require('btch-downloader');

async function yt(url) {
    try {
        const response = await youtube(url);
        const i = response;
        return {
            developer: 'Rizki',
            title: i.title,
            thumbnail: i.thumbnail,
            author: i.author,
            mp3: i.mp3,
            mp4: i.mp4
        }
    } catch (e) {
        consolr.log(e);
        return [];
    }
}

//Memanggil Fungsi
(async () => {
    const url = `https://youtube.com/watch?v=C8mJ8943X80`;
    const result = await yt(url);
    console.log(result);
})();