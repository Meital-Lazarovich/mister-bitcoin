import React from 'react'

export default function MovePreview({ move }) {
    const getTime = () => {
        const time = new Date(move.at)
        const date = time.toLocaleDateString('en-GB')
        const hour = time.toLocaleTimeString('en-GB')
        return `${date}, ${hour}`
    }
    return (
        <section className="move-preview flex align-center">
            <p><span>At: </span>{getTime()}</p>
            <p><span>Amount: </span>{move.amount} coins</p>
        </section>
    )
}