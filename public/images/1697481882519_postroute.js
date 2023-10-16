const express = require('express');
const app1 =express();

const bodyparser = require('body-parser');
app1.use(bodyparser.json());
app1.use(bodyparser.urlencoded({extended:true}));   //need to review this

const multer = require('multer');
const path =require('path');

app1.use(express.static('public'));

const storeimages = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/images'),function(error,success){
            if(error){
                console.log(error)
            }
        })
    },
    filename:function(req,file,cb){
        namefile = Date.now()+'_'+file.originalname;
        cb(null,namefile,function(error,success){
            if (error){
                console.log(error)
            }
        })
    }
});

const uploadimg = multer({storage:storeimages});
const postcontroller = require('../controller/postcontroller');
app1.post('/createpost', 
// function(req,res){res.send('hi')},
uploadimg.single('image'),
postcontroller.createpost
);

module.exports = app1;