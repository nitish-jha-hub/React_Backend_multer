const express = require('express');
const app =express();
const cors = require('cors');

app.use(cors({
    origin:'*'   //access control * for all
}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/react_backend');

const app1 = require('./route/postroute');
app.use('/api',app1);


app.listen(8000,function(){
   console.log('Server is Running'); 
})