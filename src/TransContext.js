import React, { createContext, useReducer } from 'react';
import TransReducer from './TransReducer'

const initialTransections = []

export const TransContext = createContext(initialTransections);

export function TransactionProvider({children}) {
    let [state, dispatch] = useReducer(TransReducer, initialTransections)
    let addTrans = (transObj) => {
        dispatch(
            {
            type: "ADD TRANS",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc  
            },
            
        }
        )

    }

    {
        return(
        <TransContext.Provider value={
            {
                addTrans,
                transactions:state
            }
        }>
            {children}
        </TransContext.Provider>    
        )
    }
}





export default TransContext;