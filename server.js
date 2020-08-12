const express = require("express");
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
const serverStatic = require('serve-static')

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/',serverStatic(path.join(__dirname, '/dist')))

app.get(/.*/,function(req,res){
    res.sendFile(path.join(__dirname,'/dist/index.html'))
})


const PORT = process.env.PORT || 5000;

app.listen(PORT,function(){
    console.log(`server running on port ${PORT}`)
});