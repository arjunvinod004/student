const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/student')
.then(()=>{
    console.log('connected');
})
.catch(()=>{
    console.log('no connected');
})
const newSchema=new mongoose.Schema({
    msg:{
        type:String,
        required:true
    },
    birth:{
        type:String
    },school:{
        type:String
    },div:{
        type:String
    }, gender:{
        type:String
    },id:{
        type:String
    }
})
// const newbirth=new mongoose.Schema({
//  birth:{
//     type:Number
//  }

// })
const collection=mongoose.model('student',newSchema)

module.exports=collection