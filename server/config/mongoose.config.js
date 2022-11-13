const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/movie_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Bse de datos Peliculas Lista!!!!!"))
	.catch(err => console.log("No se conecto a la Base de Datos", err));