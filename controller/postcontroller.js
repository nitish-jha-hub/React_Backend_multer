const post = require('../modals/postmodal');
const createpost = async(req,res)=> {
try {
   const newpost =  new post({
    tittle:req.body.tittle,
    image:req.file.filename
   });
   
const postData = await newpost.save();

res.status(200).send({success:true,msg:'data posted', data:postData})
    
}catch (error) {
    res.status(400).send(error.message)
}

};

module.exports= {createpost};