import style from './balance.module.css'
import React, { useContext } from 'react';
import TransContext from '../TransContext'



function Balance() {
  let { transactions } = useContext(TransContext)

  var arr = []

  transactions.forEach((trans) => arr.push(+trans.amount))

  var income = 0;
  var expence = 0;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
    if(arr[i]<0){
      expence += arr[i]
    }
    else if(arr[i]>0)
    {
      income += arr[i];
    }
    
  }

  return (
    <div className={style.main}>
      <h2>Current Balance</h2>
      <hr />
      <h1>$ {sum}</h1>
      <div className={style.box}>
        <div>
          <h4>Income </h4>
          <h2>$ {income}</h2>
        </div>
        <div>
          <h4>Ecpense</h4>
          <h2>$ {expence}</h2>
        </div>

      </div>
    </div>
  );
}

export default Balance;
