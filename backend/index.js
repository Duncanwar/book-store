import express from 'express';
import cors from 'cors'
import mongoose  from 'mongoose';
import {PORT, mongoDBURL} from './config.js'
import booksRoute from './routes/booksRoute.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/books", booksRoute)
app.get("/",(req,res)=>{
    return res.status(234).send("Welcome to Express")
})

mongoose.connect(mongoDBURL).then(()=>{
    console.log('App connected to database')
    app.listen(PORT,()=>{
        console.log(`App is listening on ${PORT}`)
    }); 
})
.catch((error)=>{
    console.log(error)
})

