//crear servidor con express
import express from 'express';
import usuarioRoutes from './routes/usuario.routes.js';
const app = express();


app.get('/', usuarioRoutes);
app.get('/nosotros', usuarioRoutes);
app.get('/contacto', usuarioRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);



