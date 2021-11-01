let express=require("express");
let app=express();
let bodyparser=require("body-parser");
let cors=require("cors");
app.use(cors());
 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({extended:false}));
 app.use("/employee/fetch",require("../fetch/fetch"));
 app.use("/employee/insert",require("../insert/insert"))
 app.use("/employee/delete",require("../delete/delete"));
 app.use("/employee/update",require("../update/update"))
 app.listen(8085);
 console.log("server listening the port number 8085");
