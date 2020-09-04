const express = require("express");
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
const serverStatic = require('serve-static')
const compression = require('compression')
var fs = require('fs')
var nodemailer = require('nodemailer'); 

app.use(compression());
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

	
const ecms= fs.readFileSync('ECMS.jpg','base64');
	const tms= fs.readFileSync('TMS.jpg','base64');
	const report= fs.readFileSync('report.png','base64');

var project = [  
            {       
                id: 1,
                title: 'Extra Curricular Events Management System',
                tat: 'Node.js,Express.js,Mongodb,React,js',
                description:"Extra curricular events management system” is a web app specially created for universities/schools.The web app is developed for both the student and the Management. The system will have a secure loginprocedure to prevent any unauthorized access. Every type of user (student, Event organizer, Admin) will havedifferent privileges according to their need to know. The system will have an event booking facility. The studentwill be able to book an event online. The event organizer will add(upload) all the upcoming events and thetudents will be able to book those events from the web app by login using their name and password. The eventorganizer will also be able to book for events for the students. They will be able to add events, update events,and delete events. Add client information, update client information. Add new staff to the system. The systemwill send a notification to all the students and the event organizer.The system will have a secure login procedure to prevent unauthorized access.",
            	glink:"https://github.com/Shethlay/ECEMS",
            	image: ecms
            },
	    {
                id: 2,
                title: 'Temperature Monitoring System',
                tat: 'Ardiuno,Nodemcu,Php,html,css,js',
                description:'The temperature monitoring system is a website that shows the real-time temperature of any Industry ormechanical company. It also sends the notification if the temperature goes beyond a certain limit.',
            	glink:"#",
            	image: tms
            },
            {   
                id: 3,
                title: 'Student Report Card',
                tat: 'C++',
                description:'Student report card system is CLI program that takes the input from user/teacher (input like: studentname,  roll-no,  mark  etc).  Based  on  input  it  will  generate  the  report  card  in  good  format.',
            	glink:"https://github.com/Shethlay/Student-report-card-system",
            	image: report
            }
            
    ];

app.post('/project',function(req,res){
	
	
    
    res.send(project)
})







app.post('/addMessege',function(req,res){
	
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mynameissheth@gmail.com',
    pass: 'laysheth@1234'
  }
});

var mailOptions = {
  from: 'mynameissheth@gmail.com',
  to: 'laysheth58@gmail.com',
  subject: 'Portfolio notification',
  text: JSON.stringify(req.body,null,4)
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 

    res.send(true)
})




const PORT = process.env.PORT || 5000;

app.listen(PORT,function(){
    console.log(`server running on port ${PORT}`)
});
