const express = require('express');
const app = express();
const PORT = 8080;

app.use(
    express.json()
);

app.get('/tshirt', (request, response) => {
    response.status(200).send({
        tshirt: '👕',
        size : 'large'
    });
});

app.post('/tshirt/:id', (request, response) => {
    const { id } = request.params;
    const { logo } = request.body;
    if (!logo) {
        response.status(418).send({
            message: 'We need a logo',
        });
    } else {
        response.status(200).send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
    }
});

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`),
);
