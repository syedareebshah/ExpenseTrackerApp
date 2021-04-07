import style from './balance.module.css'
import React from 'react';



function Balance() {
  return (
    <div className={style.main}>
    <h2>Current Balance</h2>
    <hr />
    <h1>$ 0.00</h1>
    <div className={style.box}>
        <div>
        <h4>Income </h4>
        <h2>$ 0.00</h2>
        </div>
        <div>
        <h4>Ecpense</h4>
        <h2>$ 0.00</h2>
        </div>

    </div>
    </div>
  );
}

export default Balance;
