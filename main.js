// const axios = require('axios');
const fs = require('fs');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function transcribe() {
    const resp = await openai.createTranscription(
        fs.createReadStream("audio/test-audio02.webm"),
        "whisper-1",
        "Erm, you know, haha.",
        // "Words",
        // You can add other parameters here. For example:
        // response_format: 'text',
        // temperature: 0.5,
        // language: 'en',
    );

    console.log(resp.data);
}

transcribe();

