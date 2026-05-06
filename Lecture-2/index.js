const express=require("express");//server instance create -object create karta hai req handle karne ke liye 

const app=express();

app.get("/hello",(req,res)=>{
    res.send("hello")
})
app.get("/home",(req,res)=>{
    res.send("home")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})