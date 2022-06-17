//importar variables de entorno. Estas son variables cuyos valores son diferentes en el entorno de Desarrollo y el entorno de Produccion
import dotenv from 'dotenv';
('dotenv').config();


//importar la base de datos
import BD from "./config/db.js";


//importar express y asignarlo a una variable. VERSION COMMONJS(FORMA ANTIGUA)
// const express = require('express');

//importar express y asignarlo a una variable. VERSION MODULOS(FORMA MODERNA). para usarlo debo agregar   "type" : "module", en el Package-json
import express from "express";

//importar routers
import router from "./routes/index.js";





//conectar con la base de datos
BD.authenticate()
    .then(()=>console.log('Base de datos conectada'))
    .catch(error => console.log(error));

//funcion para ejecutar express y asignarlo a una variable
const app = express();



//Habilitar PUG. Antes de hacer esta linea, debes correr "npm install pug" en consola
app.set('view engine','pug');

//Middleware son funciones o controladores que usas en una app. Todas las lineas en este doc que empiezan con "app." son middlewares de Express. Ahora vamos a usar uno para poner un año de forma dinamica en el footer de todas las paginas
app.use((req,res, next)=>{
   
    //con res.locals podemos crear una variable que luego podemos pasar a un view(ejm: res.locals.unaVariable = 'Una Nueva Variable';)
    const year = new Date();
    //vamos a crear la siguiente variable "actualYear" y la vamos a pasar al view footer.pug
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    //este esl el 3er parametro de un middleware. Debo especificarlo/correrlo para que Express avance al proximo middleware/proxima linea de codigo y  asi en este caso muestre la pagina.
    //a veces solo poner "next()" no funciona. Para forzarlo, mejor usamos "return next()"

    return next();
});

//Agregar body al formulario para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica. 
app.use(express.static('public'));

//Agregar Router. El metodo 'use'  envuelve los metodos (post,delete,get,etc)
app.use('/', router);


//definir el host para la app
const host = process.env.BD_HOST || '0.0.0.0';

//Definir puerto
const port = 3000;

//arranca el servidor. Si sale bien ejecuta callback que nos dice el puerto en el que corre el servidor
app.listen( port, host, () =>{
    console.log(`El Servidor está funcionando en el puerto ${port} con el host ${host}`)
})