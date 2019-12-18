import React from 'react';
import { Link } from 'react-router-dom'

import ContactPreview from './ContactPreview'

export default function ({ contacts }) {
    return (
        <section className="contact-list flex-center column">
            {contacts.map(contact => {
                return (
                    <Link to={`/contact/${contact._id}`} key={contact._id}>
                        <ContactPreview contact={contact}></ContactPreview>
                    </Link>
                )
            })}
        </section>
    )
}