const express = require('express')
const mongoose = require('mongoose');


const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'));
});
app.post('/data', (req, res) => {
    console.log('Got Data:', req.body)
    res.end()
})
app.listen(port, () => console.log(`Runnning on ${port}!`))