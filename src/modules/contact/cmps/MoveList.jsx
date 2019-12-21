import React from 'react'
import MovePreview from './MovePreview';

export default function MoveList({ title, moves }) {
    if (moves && moves.length) return (
        <section className="move-list">
            <h1 className="bold">{title}</h1>
            {moves.map((move, idx) => {
                return <MovePreview key={idx} move={move}></MovePreview>
            })}
        </section>
    )
    else return (
        <section className="no-moves">
            No transfers yet...
        </section>
    )
}