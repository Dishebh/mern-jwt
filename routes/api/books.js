import express from "express";
import jwt from 'jsonwebtoken'
const router = express.Router();

import { Book } from '../../models/Books.js'

const secretkey = 'nskncksnvdknskfx'

router.get('/', async (req, res) => {
    const books = await Book.find({})
    res.end('books');
    // res.status(200).send(books);
})  

router.post('/', async (req, res) => {
    console.log(req.body);

    if (!req.headers.authorization || !req.headers.authorization.split(' ')[1]) {
        return res.status(401).send('Unauthorized');
    }

    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, secretkey, (err, user) => {
        if (err) {
            console.log(err);
            return res.status(401).send('Unauthorized');
        }
        console.log(user);
    })

    // const book = await Book.create({
    //     title: req.body.title,
    //     description: req.body.description,
    // });
    res.status(201).send('book created!');
})

router.options('/:id', async (req, res) => {
    const book = await Book.findOne({ _id: req.params.id });

    console.log({book});

    if (!book) return;

    if (req.body.title) {
        book.title = req.body.title;
    }

    if (req.body.description) {
        book.description = req.body.description;
    }

    await book.save();
    return res.status(200).send(book);
})

export default router;