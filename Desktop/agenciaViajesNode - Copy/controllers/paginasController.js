import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";


const paginaInicio = async (req, res)=>{
    //"send" imprime en pantalla lo que esta dentro del parentesis.
    //"render" busca un archivo PUG con el nombre que pongamos en el parentesis e imprime en pantalla lo que esté dentro de ese archivo

    //consultar 3 viajes del modelo Viaje y 3 testimoniales

    //como la DB de viajes y la DB de Testimoniales son diferentes y estos no son dependientes uno del otro, usaremos el sigte metodo para que ambas sean consultadas al mismo tiempo y cada una se resuelva independiente de la otra.
    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit : 3}));
    promiseDB.push(Testimonial.findAll({limit : 3}));
    
    try {
        const resultado = await Promise.all(promiseDB);

        res.render("inicio",{
            pagina : 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
    
        });

    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res)=>{
    
    
    //"render" busca un archivo PUG con el nombre que pongamos en el parentesis e imprime en pantalla lo que esté dentro de ese archivo
    res.render("nosotros",{
        pagina: 'Nosotros'
    });

}


const paginaViajes = async (req, res)=>{

    //consultar la DB. Usaremos el metoo "findAll" para traer todos los viajes de la db
    const viajes = await Viaje.findAll();

    // console.log(viajes);

    res.render("viajes",{
        pagina: 'Próximos Viajes',
        viajes,
    });

}

const paginaTestimoniales = async (req, res)=>{
    
    try {
        const testimoniales = await Testimonial.findAll();
        res.render("testimoniales",{
            pagina: 'Testimoniales',
            testimoniales
        });
        
    } catch (error) {
        console.log(error);
    }

}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req,res) =>{
    const {slug} = req.params;

    try {
        const viaje = await Viaje.findOne({ where : { slug }});

        res.render('viaje',{
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {

        console.log(error);

    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}