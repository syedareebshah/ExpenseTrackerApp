import React from 'react';
import style from './TransHistory.module.css'



function TransHistory() {
  return (
    <div className={style.main}>
    <h2>Transaction History</h2>
    <br />
    <hr />
    <br />

    <div className={style.data}>
      <h3>disc</h3>
      <h3>amount</h3>   
    </div>
    <div className={style.data}>
      <h3>disc</h3>
      <h3>amount</h3>   
    </div><div className={style.data}>
      <h3>disc</h3>
      <h3>amount</h3>   
    </div>

    </div>
  );
}

export default TransHistory;
