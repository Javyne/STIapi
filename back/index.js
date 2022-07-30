//Server Express
const express = require('express');
const app = express();
require('dotenv').config();

//Directorio publco
app.use(express.static('public'));

//Body parser
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/clientes', require('./routes/clientes'))


//Server listening on port 4000
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
