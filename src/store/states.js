import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
let balance=0;
const initialState = {
    transactions: []
}
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
        function delTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }
        function addTransaction(transaction) {
          if(balance + transaction.transactionAmount >=0){
            balance  +=transaction.transactionAmount;
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }else{
            alert("your balance is 0 please recharge your account")
        }
        }
     return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}