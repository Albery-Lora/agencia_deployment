import express from "express";


//En este documento vamos a hacer un router para enviar desde aqui los diferentes "router.get" que contengan los diferentes HTML de nuestro webpage



//importar pagina de Inicio desde el Controller
import {    
            paginaInicio, 
            paginaNosotros, 
            paginaViajes, 
            paginaTestimoniales, 
            paginaDetalleViaje 
        } from "../controllers/paginasController.js";

import {guardarTestimonial} from '../controllers/testimonialController.js'

//Crear el Router
const router = express.Router();



//pedido de prueba. Express usa metodos de CRUD(get,put,put,etc). Toma los parametros request: para el pedido y response: para la respuesta que se va a mostrar en pantalla
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes',  paginaViajes);

router.get('/viajes/:slug',  paginaDetalleViaje);


router.get('/testimoniales', paginaTestimoniales);

//post del formulario de testimoniales
router.post('/testimoniales', guardarTestimonial);


router.get('/contacto', (req, res)=>{
   
    //"send" imprime en pantalla lo que esta dentro del parentesis.
   res.send('Contacto');

});




export default router