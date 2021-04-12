import React, {useContext, useState} from 'react';
import style from './NewTrans.module.css'
import TransContext from '../TransContext'

function NewTrans() {
  let [desc, setDesc] = useState("")
  let [amount, setAmount] = useState()

  let { addTrans } = useContext(TransContext) 

  const handleChange = () => {
    addTrans({
      desc: desc,
      amount: amount
    })
  
  }


  return (
    <div className={style.main}>
    <h2>Add New Transaction</h2>
    <hr />
    <div className={style.form}>
    <h3>Description</h3>
    <input value={desc} placeholder="Enter Discription" onChange={(ev)=>{setDesc(ev.target.value)}} required />
    <h3>Transaction Amount</h3>
    <input type='number' placeholder="Enter Amonut"  value={amount} onChange={(ev)=>{setAmount(ev.target.value)}} required />
    <h4 style={{textAlign:'center', margin:'5px'}}>(Add Income As +ve and Expense As -ve)</h4>
    <button className={style.button}
    onClick={()=>{handleChange()}}>Add Transaction</button>
    </div>
    </div>
  );
}

export default NewTrans;
