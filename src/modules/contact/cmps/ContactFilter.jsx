import React from 'react'

export default function ContactFilter({handleFilter}) {
    return (
        <input className="contact-filter" type="text" onChange={ev => handleFilter(ev.target.value)} placeholder="Search"/>
    )
}