import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/home">About</Link></li>
                <li><Link to="/home">Service</Link></li>
                <li><Link to="/home">Contact</Link></li>
                <li><Link to="/home">Blog</Link></li>
            </ul>
        </div>
    )
}
