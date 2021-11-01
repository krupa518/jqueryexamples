let mongodb=require("mongodb");
let nareshit=mongodb.MongoClient;
let insert=require("express").Router().post("/",(req,res)=>{
    nareshit.connect("mongodb://localhost:27017",(err,client)=>{
        if(err) throw err;
        else{
            let db=client.db('placement');
            db.collection("employee").insertOne(
                {"empName":req.body.empName,
                "empAge":req.body.empAge,
                "empLocation":req.body.empLocation
                },(err,array)=>{
                if(err) throw err;
                else{
                    res.send({insert:"sucess"});
                }
            });
        }
    });
});
module.exports = insert;