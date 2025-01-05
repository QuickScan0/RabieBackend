const mongoose = require("mongoose");
const Schema = mongoose.Schema

const articleSchema = new Schema( 
   { 
   StudentLastName: { type: String, required: true },
   StudentFirstName: { type: String, required: true },
   Numero: { type: Number, required: true },
   Ville:{ type: String, required: true },
   Email: { type: String, required: true },   
   Niveau: { type: String, required: true },}

 );
const Article = mongoose.model("Article",articleSchema);
module.exports = Article;