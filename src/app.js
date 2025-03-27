const express = require("express");
const app = express();

//This will only handle GET call to user
app.get("/user", (req,res)=>{
    res.send({firstName:"munees", lastName:"ganesan"})
})

app.post("/user", (req,res)=>{
    res.send("post call");
})

app.delete("/user", (req,res)=>{
    res.send("deleted successfully")
})

//This will match all the http method API calls to test

app.use("/test", (req,res)=>{
    res.send("this is from test server")
})




app.listen(3000, ()=> {
    console.log("server is listening to 3000");
})