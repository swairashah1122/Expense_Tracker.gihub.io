
import React from 'react';
import './App.css';
import { Balance } from './components/headerBalance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './store/states';

function App() {
  return (
      <GlobalProvider>
        <div className="container">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </GlobalProvider>
  );
}
export default App;