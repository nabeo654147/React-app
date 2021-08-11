const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/save', (req, res) => {
    let { body } = req.query;
    fs.writeFileSync('./db.txt', body, 'utf-8');
    res.send(`保存しました。<blockquote>${body}</blokquote>`)
});

app.get('/show', (req, res) => {
    let data = fs.readFileSync('./db.txt');
    res.send(`${data}`)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

