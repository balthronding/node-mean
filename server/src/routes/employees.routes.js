
const { Router } = require('express');
const router = Router();

const employeesCtrol = require('../controllers/employees.js');

router.get('/empleados', employeesCtrol.getEmpleados);
router.post('/empleados', employeesCtrol.crearEmpleado);
router.get('/empleados/:id', employeesCtrol.getEmpleado);
router.put('/empleados/:id', employeesCtrol.editarEmpleado);
router.delete('/empleados/:id', employeesCtrol.eliminarEmpleado);

module.exports = router;




