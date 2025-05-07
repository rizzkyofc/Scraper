const { ChatGPTAPI } = require("chatgpt");

const api = new ChatGPTAPI({
    apiKey: "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"
});
async function example() {
    const res = await api.sendMessage('Hello');
    console.log(res);
}

example()