//Server Express
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

//CORS
app.use(cors());

//Directorio publco
app.use(express.static('public'));

//Body parser
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/clientes', require('./routes/clientes'))
app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/equipos', require('./routes/equipos'))
app.use('/api/ordenes', require('./routes/ordenes'))
app.use('/api/tipo', require('./routes/tipo'))
app.use('/api/marcas', require('./routes/marcas'))
app.use('/api/items', require('./routes/items'))
app.use('/api/stock', require('./routes/stock'))


//Server listening on port 4000
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
