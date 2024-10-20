const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3500;
app.listen(PORT);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');

// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PATCH", "DELETE"]
// }
// ));

app.use(cors());
const whitelist = ['http://localhost:3000', 'http://127.0.0.1:5500','https://www.google.com'];
const corsOptions = {
  origin:(origin, callback)=> {
    if(whitelist.indexOf(origin) !== -1 || !origin){
      callback(null, true)
    }else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PATCH", "DELETE"]
}

const path = require('path');
const rootDir = require('./utils/path.js')
// app.use(express.static(path.join(__dirname,'public')))  
//Make public folder as static 



const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://muthu:22021998@easwaran-etm.v9w8p.mongodb.net/EaswaranDB?retryWrites=true&w=majority&appName=Easwaran-ETM').then(()=>console.log("db connected")).catch((err)=>console.log(err));


 

const adminRoutes = require('./routes/admin');  //Router Models
const contactRoutes = require('./routes/contact');

app.use(adminRoutes);
app.use(contactRoutes);


// app.use((req,res,next)=>{
// //    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
//     res.status(404).send("404 error");
// })
