import { useState, useEffect } from 'react';
import './Expense.css';
import ExpencesForm from './ExpencesForm';
import ExpencesList from './ExpencesList';

function ExpenseTracker() {
     const [expances, setExpense] =useState(()=>{
      const saved = localStorage.getItem("expenses")
      return saved ? JSON.parse(saved) : [];
     })
     useEffect(()=>{
      localStorage.setItem("expenses",JSON.stringify(expances))
     },[expances])

     const addExpense = (expances) => {
      setExpense((prev)=> [...prev, expances])
     }
     
     const deleteExpense =(id) =>{
        setExpense((prev)=> prev.filter((item)=>item.id != id))
     }

     const totalExpenses = expances.reduce((sum, item)=>sum + item.amount, 0)
  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
          <ExpencesForm onAddExpense={addExpense}/>
          <h3 className="total">Total Expense: ₹{totalExpenses.toFixed(2)}</h3>
          <ExpencesList expances ={expances} onDelete={deleteExpense}/>
      </div>
        );
}

        export default ExpenseTracker;