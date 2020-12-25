const express = require('express');

const app = express();  


app.get('/', (req, res) => {
    res.send(`
        <h1>Hello world</h1>
    `);
});

app.listen(3000, (err) => {
    if (err)
        console.log(`ERROR: ${err}`);
    else
        console.log('Application is starting on port 3000');
});