// require('dotenv').config()
import dotenv from "dotenv"


import connectDB from "./db/index.js"

dotenv.config({
  path:"./env"
})

connectDB()















// import express from 'express'
// const app=express()

// (async ()=>{
//     try{
//       await  mongoose.connect(`${process.env.MONGOBG_URI}/${DB_NAME}`)
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