const fetch = require("node-fetch");

async function bing(s) {
    const response = await fetch(`https://api.siputzx.my.id/api/s/bimg?query=${s}`);
    const anu = await response.json();

    let result = [];

    for (let i = 0; i < anu.data.length; i++) {
        result.push(anu.data[i]);
        };
        return {
            status: true || false,
            creator: 'Rizki',
            result: result
        }
}

(async () => {
    const result = await bing('Kucing');
    console.log(result);
})();