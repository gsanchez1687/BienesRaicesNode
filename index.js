//crear servidor con express
import express from 'express';
//importar las rutas
import usuarioRoutes from './routes/usuario.routes.js';
//crear la app de express
const app = express();

//habilitar pug
app.set('view engine', 'pug');
//definir la carpeta de las vistas
app.set('views', './views');


//rutas de la app
app.use('/auth', usuarioRoutes);



//obtener el puerto
const port = 3000;
//arrancar la app
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);



