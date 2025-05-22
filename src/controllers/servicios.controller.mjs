//controller : controlar el flujo de peticiones y respuestas del cliente


const crearServicio = (req, res) =>{
    const inputData = req.body;
    console.log(inputData);
    res.send( inputData );
}

const borrarServicio = (req,res) => {
    res.send( 'elimina un servicio' );
}

const actualizarServicio = (req, res) =>{
    res.send('actualizacion parcial de un servicio');
}

const obtenerServicio = (req, res) => {
    res.send( ' se obtiene todos los servicios' );
} 

const actualizacionServicio = (req, res) => {
    res.send( ' se obtiene todos los servicios' );
} 

export { 
    crearServicio, 
    borrarServicio, 
    actualizarServicio, 
    obtenerServicio, actualizacionServicio
}
