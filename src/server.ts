import express, { json } from 'express'
import authroute from './Routes/authRoutes'
// import cors from 'cors'
const app= express()

//Register some Middlewares
// app.use(cors())
app.use(json()) //adds a body to the Request

app.use('/users',authroute)


app.listen(4000,()=>{
console.log("Running ...");

})

