var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/db");

var product = require("./schema.js");
app.post("/insert", async (req, res) => {
 
 
  const food = new product({ name: req.body.foodname, day: req.body.day });
  const result = await food.save();
  res.send({
    msg: "ok",
  });
  console.log("one");
});
app.get("/read", async (req, res) => {

  const data = await product.find();

  res.send(data);
  console.log("get");

  
});
app.put("/update/:id", async (req, res) => {
  console.log(req.body.foodname);
  product.findByIdAndUpdate(
    req.params.id,
    { name: req.body.foodname },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Updated User : ", docs);
      }
    }
  );
  res.send({
    msg: "ok",
  });
});
app.delete("/delete/:id", async (req, res) => {
  console.log(req.body.foodname);
  product.findByIdAndDelete(req.params.id, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted : ", docs);
    }
  });
});
app.listen(3001, () => {
  console.log("server stsrted 3001");
});
