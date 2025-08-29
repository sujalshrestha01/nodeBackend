// require('dotenv').config()
import dotenv from "dotenv"


import connectDB from "./db/index.js"

dotenv.config({
  path:"./env"
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`serer running at ${process.env.PORT||8000}`)
  })
})
.catch((err)=>{
  console.log("mongo db connection failed !!! ",err);
})















// import express from 'express'
// const app=express()

// (async ()=>{
//     try{
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("error",(error)=>{
//         console.log("error")
//         throw error
//       })

//       app.listen(process.env.PORT,()=>{
//         console.log(`app listening on port ${process.env.PORT} `)
//       })

//     }catch(err){
//         console.error("error: ",err)
//         throw err
//     }
// })()