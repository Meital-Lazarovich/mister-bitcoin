import React from 'react'

export default function ContactFilter({handleFilter}) {
    return (
        <input type="text" onChange={(ev) => handleFilter(ev.target.value)} placeholder="Search"/>
    )
}