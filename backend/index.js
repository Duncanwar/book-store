import express from 'express';
import {PORT} from './config.js'
import booksRoute from './routes/booksRoute.js'

const app = express();
app.use(express.json());
app.use(cors());
app.use("/books", booksRoute)
app.get("/",(req,res)=>{
    return res.status(234).send("Welcome to Express")
})

app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`)
}); 
