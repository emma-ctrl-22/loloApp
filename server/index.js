const express = require('express');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const UserModel = require("./models/UserModel");
const bodyParser = require("body-parser");
const codeBuddy = require("./routes/CodeBuddy");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());

mongoose
  .connect(
    "mongodb+srv://tickle:tickle123@lolo.1hrndiy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use('/', codeBuddy);

const verifyUser = (req, res, next) => {
  const token = req.cookie.token;
  if (!token) {
    return res.json("Token is missing");
  } else {
    jwt.verify(token, "thespecialsecretkey", (err, decoded) => {
      if (err) {
        return res.json("Error with token");
      } else {
        if (decoded.role === "admin") {
          next();
        } else {
          return res.json("not admin");
        }
      }
    });
  }
};

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      UserModel.create({ name, email, password: hash })
        .then((user) => res.json("Success"))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});



app.post("/login", (req, res) => {
  const { email, password,name } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            { email: user.email, name: user.name },
            "thespecialsecretkey",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          res.json({ Status: "Success" });
        } else {
          return res.json("The password is incorrect");
        }
      });
    } else {
      return res.json("No record found");
    }
  });
});

app.listen(5000,()=>{
  console.log(`Server running on port 5000`)
})



