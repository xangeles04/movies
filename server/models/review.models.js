const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: [true, "El rating es obligatorio"],
    max:[5, "No puede tener más de 5 estrellas"],
    min:[0, "No puede tener menos de 0 estrellas"]
  },
  content: {
    type: String,
    required: [true, "El contenido de la reseña es obligatorio"],
    min:[3, "Escriba un contenido"]
  },
  creatorName: {
    type: String,
    required: [true, "El nombre del creador de la reseña es obligatorio"],
    min:[3, "Escrina un nombre co nmas de tres digitos"]
  },
});

const Review = mongoose.model("Review",ReviewSchema);

module.exports = {ReviewSchema,Review};
