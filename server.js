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


app.post('/resume',function(req,res){
	res.sendFile(__dirname+'/layResume.pdf')
})


app.post('/project',function(req,res){
    var project = [  
            {
                id: 1,
                title: 'Temperature Monitoring System',
                tat: 'Ardiuno,Nodemcu,Php,html,css,js',
                description:'In this project we use Arduino , LM35 temperature sensor, nodemcu to detect thetemperature and for showing that temperature we make one website using html ,css , js ,php and mysql.'
            },
            {   
                id: 2,
                title: 'Student Report card',
                tat: 'C++',
                description:'This project is simple CLI based project.in this project using student data wegenerate the report card of students.This project is implemented in c++'
            },
            {       
                id: 3,
                title: 'Extra Curricular Events Management System',
                 tat: 'Node.js,Express.js,Mongodb,React,js',
                 description:'The task to create a portal for management of student led activities at university/schools.My role is backend developer and database manager.'
            }
    ]
    console.log(project)
    res.send(project)
})




app.post('/addMessege',function(req,res){

    console.log(req.body)
    res.send(true)
})




const PORT = process.env.PORT || 5000;

app.listen(PORT,function(){
    console.log(`server running on port ${PORT}`)
});