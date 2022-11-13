const {Review} = require("../models/review.models")
const Movie = require("../models/pelicula.models")

module.exports.createReview = async(req,res)=>{
    try{
        const {rating,content,creatorName,idPelicula} = req.body;
        const review = await Review.create({rating,content,creatorName});
        const pelicula = await Movie.findById(idPelicula).exec();
        pelicula.reviews.push(review);
        await pelicula.save();
        res.json(review);
    }
    catch(err){
        res.json(err)
    }
}

module.exports.getReviewsFromPelicula = async(req,res)=>{
    try{
        const {idPelicula} = req.params;
        const pelicula = await Movie.findById(idPelicula).populate("reviews").exec();
        console.log("REVIEWS DEL PRODUCT",pelicula.reviews);
        res.json({message:"",reviews:pelicula.reviews})
    }catch(err){
        res.json({message:"Algo salio mal",errors:err.errors})
    }
}


module.exports.getRating = async(req,res)=>{
    try{
        const {idPelicula} = req.params;
        const pelicula = await Movie.findById(idPelicula).populate("reviews").exec();
        indice = pelicula
        console.log("REVIEWS DEL PRODUCT",pelicula.reviews);
        res.json({message:"",reviews:pelicula.reviews})
    }catch(err){
        res.json({message:"Algo salio mal",errors:err.errors})
    }
}



module.exports.deleteReview = async(req,res) => {
    Review.findOneAndDelete({_id: req.params.id})
        .then((review)=>res.json({review:review}))
        .catch((err)=>res.json({message:"No hemos podido eliminar Review",error:err}))
}



