import React, { useState } from 'react';
import style from './NewTrans.module.css'


function NewTrans() {
  let [desc, setDesc] = useState("")
  let [amount, setAmount] = useState()

  return (
    <div className={style.main}>
    <h2>Add New Transaction</h2>
    <hr />
    <div className={style.form}>
    <h3>Description</h3>
    <input  />
    <h3>Transaction Amount</h3>
    <input />
    <button>Add Transaction</button>
    </div>
    </div>
  );
}

export default NewTrans;
