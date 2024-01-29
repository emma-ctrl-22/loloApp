const express = require("express");
const { OpenAI } = require("openai");
const router = express.Router();

const openai = new OpenAI({
    apiKey: "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",
});

router.post('/codebuddy', async (req, res) => {
    const { prompt } = req.body;
    consolo.log("posted")
    try {
        const response = await openai.createChatCompletion({
            messages: [{ role: "assistant", content: prompt }],
            model: "gpt-3.5-turbo",
        });

        res.send(response.data.choices[0].message.content);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
