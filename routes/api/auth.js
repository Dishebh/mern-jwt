import express from "express";
import jwt from 'jsonwebtoken';
const router = express.Router();

const secretkey = 'nskncksnvdknskfx'

import { User } from '../../models/User.js'

router.post('/login', async (req, res) => {
    const {
        email,
        password,
    } = req.body;

    const payload = {
        email,
        password
    }

    jwt.sign(payload, secretkey, {
        expiresIn: '20d'
    }, (err, token) => {
        if (err) throw err;
        console.log({token});
        res.json({ token })
    })
})

router.post('/logout', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    // jwt.sign(token, secretkey, {
    //     expiresIn: '1'
    // })
    res.status(200).send('logged out!')
})

export default router;