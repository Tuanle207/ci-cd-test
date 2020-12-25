const express = require('express');

const app = express();  
const homeMarkup = require('./home');


app.get('/', (req, res) => {
    res.send(homeMarkup);
});

app.listen(3000, (err) => {
    if (err)
        console.log(`ERROR: ${err}`);
    else
        console.log('Application is starting on port 3000');
});