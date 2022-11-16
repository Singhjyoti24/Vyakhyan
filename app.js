const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/facsDB", { useNewUrlParser: true });

const facSchema = {
  name: String,
  email: String,
  password: String,
};

const Faculty = mongoose.model("Faculty", facSchema);

const ragini = new Faculty({
  name: "Ragini Pancholi",
  email: "raginipancholi@smvdu.ac.in",
  password: ")()()ragini2022",
});

ragini.save();

const simran = new Faculty({
  name: "Simran",
  email: "simran@smvdu.ac.in",
  password: "&&**simran**2022",
});

simran.save();

const harshita = new Faculty({
  name: "Harshita Agarwal",
  email: "harshitaagarwal@smvdu.ac.in",
  password: "<<><harshita<><>2022",
});

harshita.save();

const jay = new Faculty({
  name: "Jay Bhatt",
  email: "jaybhatt@smvdu.ac.in",
  password: "jay&&^^^2022",
});

jay.save();

const karan = new Faculty({
  name: "Karan Chandel",
  email: "karanchandel@smvdu.ac.in",
  password: "karan$$##@@2022",
});

karan.save();

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/availability", (req, res) => {
  res.render("availability");
});

app.get("/book", (req, res) => {
  res.render("book");
});

app.post("/book", (req, res) => {
  let name = req.body.pname;
  let email = req.body.email;
  let password = req.body.pass;
  let purpose = req.body.purpose;
  let time = req.body.time;
  let hall = req.body.hall;

  // Faculty.findOne(
  //   { name: name, email: email, password: password },
  //   function (err, found) {
  //     if (err) {
  //       console.log("Credentials not found!");
  //     } else {
  //     }
  //   }
  // );
});

app.listen(3000, function (req, res) {
  console.log("Server started on port 3000!");
});
