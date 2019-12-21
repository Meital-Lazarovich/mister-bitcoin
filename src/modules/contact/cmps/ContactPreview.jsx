import React from 'react';

export default function ContactPreview({ contact }) {
    return (
        <section className="contact-preview flex align-center space-between">
            <img className="contact-img" src={contact.img} alt={contact.name} />
            <div>
                <h3>{contact.name}</h3>
                <h4>{contact.phone}</h4>
            </div>
        </section>
    )
}