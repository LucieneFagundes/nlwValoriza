const express = require("express");

const app = express();

app.get('/test', (request, response) => {
    return response.send('Olá NLW!');
});

app.post('/test-post', (request, response) => {
    return response.send('olá nlw - rota post')
});




//http://localhost:8090
app.listen(8090, () => console.log('Server is running'));