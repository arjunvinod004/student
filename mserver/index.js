const express= require('express')
const cors= require('cors')
const app= express()
const collection=require("./mongoose")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.use(cors({origin:'http://localhost:3000'}))

app.post("/",async(req,res)=>{
    const {msg,birth,school,div,gender,id}=req.body
    const data={
        msg:msg,
        birth:birth,
        school:school,
        div:div,
        gender:gender,
       id:id
        
    }
    
   
    await collection.insertMany([data])
    //await collection.insertMany([dat])
})
// app.post('/',async(req,res)=>{
//     const {birth}=req.body
//     const data={
//         birth:birth
//     }
//     await collection.insertMany([data])
// })
app.listen(8000,()=>{
    console.log('connect');
})