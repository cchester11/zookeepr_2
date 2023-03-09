const express = require('express')
const path = require('path')
// require routes folder

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// declare url extentions for routes

app.listen(PORT, () => {
    console.log('Server running on PORT ' + PORT)
});