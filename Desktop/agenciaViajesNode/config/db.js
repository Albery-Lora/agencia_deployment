/* 

¿Qué es un ORM?
Un ORM (Object Relational Mapping o Mapeo Objeto-Relacional en castellano) es una herramienta 
que nos permite mapear, o lo que es lo mismo, convertir los objetos de tu aplicación a un 
formato adecuado para ser almacenados en cualquier base de datos, creándo para ello una base 
de datos virtual donde los datos disponibles en nuestra aplicación quedan vinculados con la 
base de datos final. 

Lo que podemos obtener de la definición anterior, es que además de convertir, los ORM nos 
ayudan a eliminar todo el lenguaje tedioso de sentencias SQL necesario para realizar las 
acciones CRUD (Create, Read, Update, Delete) en nuestro código, ya que es el propio ORM 
quien se encarga de ello. 


¿Qué es Sequelize?

Sequelize es un ORM para Nodejs que te permitirá agilizar bastante tus desarrollos que 
incluyan bases de datos relacionales como MySQL o Postgress.

Cuando hacemos algún desarrollo del lado del backend una de las tareas más comunes que 
podemos realizar es manipular bases de datos(Insertar, buscar, actualizar, borrar), 
para esto generalmente se escribe directamente la consulta SQL en el lenguaje de 
programación y asi conseguir los datos, un ORM (Object-Relational mapping) nos permite 
convertir tablas de una base de datos en entidades en un lenguaje de programación orientado 
a objetos, lo cual agiliza bastante el acceso a estos datos.

Sequelize es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una 
manera bastante sencilla, entre estas bases de datos podemos encontrar: 
mysql, sqlite, postgres, mssql.


*/


import dotenv from 'dotenv/config';



console.log(process.env.BD_NOMBRE);
console.log(process.env.BD_USER);
console.log(process.env.BD_PASS);
console.log(process.env.BD_HOST);
console.log(process.env.BD_PORT);

import Sequelize from 'sequelize';


// console.log(process.env.BD_PORT) ; PARA COMPROBAR QUE NUESTRA CONEXION FUNCIONA CORRECTAMENTE

//parametros: 1-nombre de la BD, 2-usuario,3-contraseña(si tiene),4-configuracion
const BD = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER,process.env.BD_PASS, {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false //para que no almacene cuando fue creado o borrado un registro
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default BD;