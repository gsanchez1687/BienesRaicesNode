//crear servidor con express
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/nosotros', (req, res) => {
    res.send('Nosotros');
});

app.get('/contacto', (req, res) => {
    res.json({msj: 'contacto'});
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);



