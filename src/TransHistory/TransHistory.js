import React, { useContext } from 'react';
import TransContext from '../TransContext';
import style from './TransHistory.module.css'



function TransHistory() {
  let { transactions } = useContext(TransContext)
  return (
    <div className={style.main}>
      <h2>Transaction History</h2>
      <br />
      <hr />
      <br />
      {
        transactions.map((trans, ind) => {
          return (
            <div key={ind} className={style.data}>
              <h3>{trans.desc}</h3>
              <h3>{trans.amount} $</h3>
            </div>
          )
        })
      }

    </div>
  );
}

export default TransHistory;
