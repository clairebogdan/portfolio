import React from 'react';
import './styles/Button.css';
import { Link } from 'react-router-dom';

export function ContactButton() {
    return (
        <Link to='/contact'>
            <button className='btn1'>Contact</button>
        </Link>
    );
}