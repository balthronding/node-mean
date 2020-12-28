const mongoose = require('mongoose');



mongoose.connect('mongodb://dsm/mean-employees', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

.then( db =>{
    console.log('Conectado a la BBDD');
}).catch(err => {
    console.log(err)
})