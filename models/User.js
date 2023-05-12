import mongoose from 'mongoose';
import { Book } from './Books';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Book
        }
    ]
})

export const User = mongoose.model('User', UserSchema)