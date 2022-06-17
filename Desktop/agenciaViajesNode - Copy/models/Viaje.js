/* 

QUE ES MVC(MODEL-VIEW-CONTROLLER)

https://www.ma-no.org/es/programacion/el-concepto-de-modelo-vista-controlador-mvc-explicado

*/


import Sequelize from 'sequelize';
import db from '../config/db.js';

//como parametros en define() ponemos el nombre de la tabla('viajes' en este caso)
export const Viaje = db.define('viajes',{
    titulo:{
        type: Sequelize.STRING
    },
    precio:{
        type: Sequelize.STRING
    },
    fecha_ida:{
        type: Sequelize.DATE
    },
    fecha_vuelta:{
        type: Sequelize.DATE
    },
    imagen:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    },
    disponibles:{
        type: Sequelize.STRING
    },
    slug:{
        type: Sequelize.STRING
    }
})
