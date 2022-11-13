 const Pelicula = require("../models/pelicula.models");
 const { Review } = require("../models/review.models")

module.exports.create = (req,res) => {
    Pelicula.create(req.body)
        .then((newPelicula)=>res.json({message:"Ingreso de Pelicula Satisfactorio",pelicula:newPelicula}))
        .catch((err)=>res.json({message:"No hemos podido crear la Pelicula",errors:err.errors}))
}

module.exports.createPelicua = async(req,res)=>{
    try{
        const {titulo,rating,content} = req.body;
        const review = new Review({rating,content,creatorName:"Nombre usuario"});
        const pelicula = new Pelicula({titulo});
        pelicula.reviews.push(review);
        await pelicula.save();
        await review.save();
        res.json({message:"",pelicula:pelicula,review:review})
    }
    catch(err){
        res.json({message:"Algo salio mal",errors:err.errors})
    }
}

module.exports.findAll = (req,res) => {
    Pelicula.find()
        .then((all)=>res.json({peliculas:all}))
        .catch((err)=>res.json({message:"No hemos podido encontrar la Pelicula:",error:err}))
}

module.exports.update = (req,res) => {
    Pelicula.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        .then((pelicula)=>res.json({pelicula:pelicula}))
        .catch((err)=>res.json({message:"No hemos podido actualizar la Pelicula",error:err}))
}

module.exports.delete = (req,res) => {
    Pelicula.findOneAndDelete({_id: req.params.id})
        .then((pelicula)=>res.json({pelicula:pelicula}))
        .catch((err)=>res.json({message:"No hemos podido eliminar la Pelicula",error:err}))
}


module.exports.findOne = (req,res) => {
    Pelicula.findOne({_id: req.params.id})
        .then((pelicula)=>res.json({pelicula:pelicula}))
        .catch((err)=>res.json({message:"No hemos podido encontar la Pelicula",error:err}))
}

// module.exports.deleteReview = async(req,res)=>{

//     const {idReview} = req.body;
//     Pelicula.findOne({_id: req.params.id})
//     .then((pelicula) = res.json({})) 
//     Pelicula.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    
//     const index = pelicula.reviews.indexof({_id: req.params.id});
//     pelicula.reviews.splice(index, 1);
//     await pelicula.save();
            

// }