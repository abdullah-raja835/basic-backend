let mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/Last-Project',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('connection successful')
})
.catch((err)=>{
    console.log(err)
})
