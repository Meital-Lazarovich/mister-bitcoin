import React from 'react';

export default function TransferFund({ contact, updateAmount, addMove }) {
    return (
        <section className="transfer-fund">
            <h2 className="text-center">Transfer coins to {contact.name}:</h2>
            <form onSubmit={addMove} className="flex-center">
                <div>Amount: <input type="number" min="1" onChange={updateAmount}/></div>
                <button type="submit">Transfer</button>
            </form>
        </section>
    )
}