const express = require('express')
const path = require('path')
const routes = require('./routes/index.js')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.static('client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

app.listen(PORT, () => {
    console.log('Server running on PORT ' + PORT)
});