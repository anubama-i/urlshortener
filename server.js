require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require('./models/shortUrls');
const app = express();

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/urlshortener';

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find();
    res.render('index', {shortUrls: shortUrls});
})

app.post('/shortUrls', async (req,res) => {
    await ShortUrl.create({ full: req.body.fullUrl })
    res.redirect('/');
})

app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl})
    if( shortUrl == null) return res.sendStatus(404);

    shortUrl.clicks++;
    await shortUrl.save();

    res.redirect(shortUrl.full)
})

mongoose.connect(mongoURI).then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});