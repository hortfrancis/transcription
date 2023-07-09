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
        "whisper-1"
    );

    console.log(resp.data);
}

transcribe();

