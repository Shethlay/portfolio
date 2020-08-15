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
                title: 'Extra Curricular Events Management System',
                tat: 'Node.js,Express.js,Mongodb,React,js',
                description:'Extra curricular events management system is a portal that manages student-led activities at universitiesand schools. My role is backend developer and database manager. This is my internship project. '
            },
	    {
                id: 2,
                title: 'Temperature Monitoring System',
                tat: 'Ardiuno,Nodemcu,Php,html,css,js',
                description:'The temperature monitoring system is a website that shows the real-time temperature of any Industry ormechanical company. It also sends the notification if the temperature goes beyond a certain limit.'
            },
            {   
                id: 3,
                title: 'Student Report Card',
                tat: 'C++',
                description:'Student report card system is CLI program that takes the input from user/teacher (input like: studentname,  roll-no,  mark  etc).  Based  on  input  it  will  generate  the  report  card  in  good  format.'
            }
            
    ]
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
