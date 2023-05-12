import axios from 'axios';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const response = await axios.post('http://localhost:3000/api/auth/login', {
            email,
            password
        })

        console.log('response', response);

        window.localStorage.setItem('token', response.data.token);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    )
}