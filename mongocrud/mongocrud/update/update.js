let mongodb=require("mongodb");
let nareshit=mongodb.MongoClient;
let update=require("express").Router().put("/",(req,res)=>{
    nareshit.connect("mongodb://localhost:27017",(err,client)=>{
        if(err) throw err;
        else{
            let db=client.db('placement');
            db.collection("employee").updateOne(
                {"p_id":req.body.p_id},
                {$set:{"p_name":req.body.p_name,
                "p_price":req.body.p_price}
                },(err,array)=>{
                if(err) throw err;
                else{
                    res.send({update:"sucess"});
                }
            });
        }
    });
});
module.exports = update;