const express= require("express")

const app=express()


app.get("/",(req,res)=>{
    res.send("hello")
})



app.get("/home",(req,res)=>{
    res.send("home")
})
app.get("/users", (req, res) => {
    const user = req.ip;
    res.send(`User IP is: ${user}`);
});

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})