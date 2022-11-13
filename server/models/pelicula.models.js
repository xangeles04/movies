const mongoose = require("mongoose");

const PeliculaSchema = new mongoose.Schema({
    titulo:{
        type:String,
        required:[true,"El Titulo de la Pelicula es Obligatorio"],
        min:[3,"Debe colocar minimo 3 caracteres"]        
    },
    director:{
        type:String,
        required:[true,"El Director de la Pelicula es Obligatorio"],
        min:[3,"Debe colocar minimo 3 caracteres"]        
    },
   
    reviews:[{type:mongoose.Schema.Types.ObjectId,ref:"Review"}]
    
},
{timestamps:true});

const Pelicula = mongoose.model("Pelicula",PeliculaSchema);

module.exports = Pelicula;