const PeliculaController = require("../controllers/pelicula.controllers")
const ReviewController = require("../controllers/reviews.controllers")

module.exports = app => {
    //Pelicula
    app.get("/api/peliculas",PeliculaController.findAll);
    app.post("/api/pelicula/new",PeliculaController.create);
     app.get("/api/pelicula/:id",PeliculaController.findOne);
     app.put("/api/pelicula/:id",PeliculaController.update);
     app.delete("/api/pelicula/:id",PeliculaController.delete);
     app.put("/api/pelicula/review/:id",ReviewController.deleteReview);

      //REVIEWS
     app.post("/api/reviews/new",ReviewController.createReview);
     app.get("/api/reviews/:idPelicula",ReviewController.getReviewsFromPelicula);
     
     


}