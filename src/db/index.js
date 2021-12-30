const mongoose =require('mongoose');

const MONGO = `mongodb+srv://root:admin@cluster0.u4gnr.mongodb.net/desafios?retryWrites=true&w=majority` || '';
mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Conectado a la base de datos');
    }
})

module.exports = mongoose;