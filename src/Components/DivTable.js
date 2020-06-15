import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const DivTable = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    return (
        <div className="inc-exp-container"> 
            <div className="divTable">
                <div className="divTableBody">
                    <div className="divTableRow">
                        <div className="divTableCell money">Income</div>
                        <div className="divTableCell money plus">+${ income }</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell money">Expense</div>
                        <div className="divTableCell  money minus">-${ expense }</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><div className="brdr"></div></div>
                        <div className="divTableCell"><div className="brdr"></div></div>

                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell balance ">Balance</div>
                        <div className="divTableCell balanceMoney">${total}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DivTable;