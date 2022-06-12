import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req,res) =>{

    //validar
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    //'.trim()' remueve los espacios al principio y al final de un string
    if(nombre.trim() == ''){
        errores.push({mensaje : 'El nombre está vacío'});
    }

    if(correo.trim() == ''){
        errores.push({mensaje : 'El correo está vacío'});
    }

    if(mensaje.trim() == ''){
        errores.push({mensaje : 'El mensaje está vacío'});
    }


    if(errores.length > 0){

        //consultar Testimoniales Existentes
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        //Almacenar testimonio en la base de datos

        try {
           await  Testimonial.create({
            nombre,
            correo,
            mensaje
           });

           //redirige al usuario a Testimoniales otra vez, asi la pagina no se queda cargando y da error despues de mandar los datos a la DB
           res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }


    }

}
    // console.log(req.body)
// }


export {
    guardarTestimonial
}