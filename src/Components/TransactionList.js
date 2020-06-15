import React, { useContext, useState } from 'react';

import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { deleteTransaction } =  useContext(GlobalContext);
    const { transactions } = useContext(GlobalContext);
    const [delID, setDelID] = useState('');

    function _delete(delID){
        deleteTransaction(delID);
    }

    return (
        <>
            <h3 className="newTransac">Transaction History</h3>
            <div className = "listContainer">
                <ul className="list">
                    {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                </ul>
            </div>
        </>
    )
}
