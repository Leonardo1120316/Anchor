const express = require("express");
const app = express();

const port = process.env.PORT || 5000

const bodyParser = require("body-parser");
const cors = require('cors')
const jsonwebtoken = require('jsonwebtoken')

const users = require("./router/api/user");
const classes = require("./router/api/class");
const messages = require("./router/api/message");
const plans = require("./router/api/plan");
const questions = require("./router/api/question");
const records = require("./router/api/record");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors());
app.use("/api/user",users);
app.use("/api/class",classes);
app.use("/api/message",messages);
app.use("/api/plan",plans);
app.use("/api/question",questions);
app.use("/api/record",records);

app.listen(port,()=>{
    console.log(`Server is runing ${port}`);
})