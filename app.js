const express = require("express");

const app = express();

const mongoose = require("mongoose");

const Article = require("./models/Article");

//mongodb+srv://belkardaothmane05:<password>@cluster0.1l2p35k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;

mongoose.connect("mongodb+srv://Cpucine:capucine123@capucine.jyn4g.mongodb.net/?retryWrites=true&w=majority&appName=Capucine")
.then(()=>{
console.log("connected succesfully");

}).catch((error)=>{
    console.log("error with connecting with data base");
});


app.listen(3000, ()=>{
    console.log("I'm listening in port 3000")
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.use(express.json());

app.post("/article", async(req,res)=>{
    const newArticle = new Article();
    const StudentLastName = req.body.StudentLastName;
    const StudentFirstName = req.body.StudentFirstName;
    const Niveau = req.body.Niveau;
    const Email = req.body.Email;
    const Numero = req.body.Numero;
 
    newArticle.StudentLastName=StudentLastName;
    newArticle.StudentFirstName=StudentFirstName;
    newArticle.Niveau=Niveau;
    newArticle.Email=Email;
    newArticle.Numero=Numero;
    await newArticle.save()
    res.json(newArticle)
});
app.get("/article",async(req,res)=>{
  try{ 
   //   const article = await Article.findById(id);
   const article = await Article.find();
    res.json(article);
    console.log("the article is",article);
    } 
  catch(error){
        console.log("error");
        return res.send("error")
    }
})


app.delete("/articles/:articleId",async(req,res)=>{
   const id = req.params.articleId;
    try{
        const article = await Article.findByIdAndDelete(id);
        res.json(article);
    }
    catch(error){
        console.log("error");
        return res.send("error")
    }
})