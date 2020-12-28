/*

const hola = (req, res) => {
    res.send('Hooooola');
};

module.exports = hola;

*/



const employeddCtrol = {};

const empleado = require('../models/employee');

employeddCtrol.getEmpleados = async (req, res) => {
    const empleados = await empleado.find();
    res.json(empleados);    
};
employeddCtrol.crearEmpleado = async (req, res) => {
    const newEmpleado = empleado(req.body);

    console.log(newEmpleado);
    await newEmpleado.save();

    res.send({message : 'Empleado creado'});
};
employeddCtrol.getEmpleado = async (req, res) => {
    
    const trabajador = await empleado.findById(req.params.id);
    console.log(trabajador);
    res.send(trabajador);   
};
employeddCtrol.editarEmpleado = async (req, res) => {
    const trabajador = await empleado.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Empleado actualizado'});
};
employeddCtrol.eliminarEmpleado = async (req, res) => {
    const trabajador = await empleado.findByIdAndDelete(req.params.id);
    res.json({status: 'Eliminado el trabajador: '});
};


module.exports = employeddCtrol;