import express from 'express';
import { Book } from '../models/bookModel';

const router = express.Router();

router.post('/', async (req,res)=>{
try{
    const { title,author,publishYear } = req.body;
    if(!title || ! author || ! publishYear){
        return res.status(400).send({
            message: 'Send all required fields: title, author, publishYear',
          });
    }
    const newBook = await Book.create({
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
    })
    return res.status(201).send(newBook)
}
catch(err){
    console.log(err);
    res.status(500).send({message:err.message});
}
})