import { handler } from './build/handler.js';
import express from 'express';

const app = express()
app.all('/hey', (req, res) => {
    // console.log("Just got a request!")
    res.send('Yo!')
})

// SvelteKit handle everything else
app.use(handler);

app.listen(process.env.PORT || 3000)