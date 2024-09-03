const express = require('express');
const { NlpManager } = require('node-nlp');

const app = express();
const PORT = 5000;

// Load the trained model
const manager = new NlpManager({ languages: ['en'] });
manager.load();

app.use(express.json());

// Endpoint for chatting with the bot
app.post('/chat', async (req, res) => {
    const { message } = req.body;
    const response = await manager.process('en', message);
    res.json({ response: response.answer });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
