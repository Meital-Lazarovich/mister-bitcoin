import React from 'react'

export default function MoveList({ moves }) {
    if (moves && moves.length) return (
        <section className="move-list">
            {moves.map((move, idx) => {
                return <h1 key={idx}>{move.amount}</h1>
            })}
        </section>
    )
    else return (
        <section className="no-moves">
            No transfers yet...
        </section>
    )
}