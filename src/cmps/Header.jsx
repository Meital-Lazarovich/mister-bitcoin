import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <section className="header">
            <Link to={'/'}>Home</Link>
            <Link to={'/contact'}>Contacts</Link>
        </section>
    )
}