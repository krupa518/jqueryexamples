let mongodb=require("mongodb");
let nareshit=mongodb.MongoClient;
let fetch=require("express").Router().get("/",(req,res)=>{
    nareshit.connect("mongodb://localhost:27017",(err,client)=>{
        if(err) throw err;
        else{
            let db=client.db('placement');
            db.collection("employee").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});
module.exports = fetch;