const fetch = require("node-fetch");

async function jkt48() {
    const anu = await fetch(`https://api.siputzx.my.id/api/berita/jkt48`);
    const b = await anu.json();

    for(let i = 0; i < b.data.length; i++) {
        return {
            status: true || false,
            creator: global.creator,
            result: b.data
        };
    };
};

(async () => {
    const res = await jkt48();
    console.log(res.result)
})();