const {Schema, model} = require ('mongoose');

const employeeSchema = new Schema({
    nombre: {type: String, required: true},
    posicion: {type: String, required: true},
    oficina: {type: String, required: true},
    salario: {type: Number, required: true}   
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model("employee", employeeSchema);