import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } =  useContext(GlobalContext);

    var trAmount = amount;
    var trText = text;
    const recordTransaction = (type,e) => {
        e.preventDefault();

        var trAmount = amount;
        var trText = text;
        if(type === '-'){
            trAmount = -amount;
        }

        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text: trText,
          amount: parseInt(trAmount)
        }

        setAmount('');
        setText('');

        addTransaction(newTransaction);
        
    }

    return (
        <>
            <form>
            <h3 className='newTransac'>Add new transaction</h3>
                <div className="form-control formDiv">
                    <input type="text" value={trText} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <br />
                    {/* <label htmlFor="amount">Amount
                    
                    (negative - expense, positive - income)</label> */}
                    <input type="number" value={trAmount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="incomeBtn" onClick={(e) => recordTransaction('+',e)}>Add income</button>
                <span><button className="expenseBtn" onClick={(e) => recordTransaction('-',e)}>Add Expense</button></span>
                <div className='copyRight'><small><em>Made by Abdullah Hahsmi</em></small></div>
            </form>
        </>
    )
}
