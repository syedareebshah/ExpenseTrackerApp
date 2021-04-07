import style from './App.module.css'
import React from 'react';
import Header from './Header/Header';
import Balance from './Balance/Balance';
import TransHistory from './TransHistory/TransHistory';
import NewTrans from './NewTrans/NewTrans';


function App() {
  return (
    <div className={style.main}>
    <Header />
    <Balance />
    <TransHistory />
    <NewTrans />
    </div>
  );
}

export default App;
