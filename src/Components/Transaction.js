import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import delIcon from '../delete-icon.png';
export const Transaction = ({ transaction }) => {
    const { deleteTransaction } =  useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                <img src={delIcon} alt='X' className='delIcon' onClick={() => deleteTransaction(transaction.id)} /> {transaction.text} <span>{sign}$ {Math.abs(transaction.amount)}</span>
            </li>
        </>
        
    )
}
