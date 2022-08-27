var mongoose =require("mongoose");
  const productschema = new mongoose.Schema({
    
    name:String,
     day:Number
    
})
module.exports=mongoose.model("products",productschema);