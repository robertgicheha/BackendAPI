import { Router } from "express";
import { Homepage, loginUser, RegisterUser, getallusers, } from "../Controllers/authControllers";
// import { VerifyToken } from "../Middlewares/verify";



const authroute =Router()

authroute.post('/register',RegisterUser)
authroute.post('/login', loginUser)
authroute.get('/allusers', getallusers)
authroute.get('/home', Homepage)//protected Route

export default authroute