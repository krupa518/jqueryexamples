let mongodb=require("mongodb");
let nareshit=mongodb.MongoClient;
let remove=require("express").Router().delete("/",(req,res)=>{
    nareshit.connect("mongodb://localhost:27017",(err,client)=>{
        if(err) throw err;
        else{
            let db=client.db('placement');
            db.collection("employee").deleteOne(
                {"p_id":req.body.p_id},
                (err,array)=>{
                if(err) throw err;
                else{
                    res.send({delete:"sucess"});
                }
            });
        }
    });
});
module.exports = remove;