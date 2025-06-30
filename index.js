import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const API_URL="https://rickandmortyapi.com/api/character"
const app=express();
app.use(express.static("public"));
const port=3000;

app.get("/",async (req,res)=>{
    try{
        const numb=Math.floor(Math.random()*826)+1;
        const b =await axios.get(API_URL+`/${numb}`);
        res.render("index.ejs",{content:b.data});
    }catch(error){
        res.status(404).send(error.message);
    }
});

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});