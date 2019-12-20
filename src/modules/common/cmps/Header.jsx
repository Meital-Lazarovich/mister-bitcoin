import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <section className="header flex space-between align-center">
            <h1>Mister ₿itcoin</h1>
            <nav className="flex-center">
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}>Contacts</Link>
            </nav>
        </section>
    )
}