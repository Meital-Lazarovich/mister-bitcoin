import React from 'react';

export default function TransferFund({ contact, updateAmount, addMove }) {
    return (
        <section className="transfer-fund">
            <h3>Transfer coins to {contact.name}:</h3>
            <form onSubmit={addMove}>
                <div>Amount: <input type="number" min="1" onChange={updateAmount}/></div>
                <button type="submit">Transfer</button>
            </form>
        </section>
    )
}