import React from 'react';

export default function ContactPreview({ contact }) {
    return (
        <section className="contact-preview">
            <img src={contact.img} alt={contact.name}/>
            <h3>{contact.name}</h3>
        </section>
    )
}