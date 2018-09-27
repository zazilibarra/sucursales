'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db, (err, res) => {
    if (err) throw err;

    console.log("Conexion lista");

    app.get('/', (req, res) => {
        res.send(`SUCURSALES VERSION: ${process.env.npm_package_version}`);
    });

    app.listen(config.port, () => {
        console.log(`SUCURSALES JALANDO EN: ${config.port}`);
    });
})
