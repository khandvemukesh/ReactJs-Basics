import { useState, useEffect, useRef } from 'react'

function ExpencesForm({ onAddExpense }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
   const titleRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || ! amount) return alert("please fill all fields")
        const newExpense ={
            id:Date.now(),
            title,
            amount:parseFloat(amount)
        }
        onAddExpense(newExpense)
        setTitle("")
        setAmount("")
        titleRef.current.focus();
    }

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <input
                placeholder="Expense Title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title} 
                ref={titleRef}/>
            <input
                placeholder="Amount ₹"
                type="number"
                onChange={(e) => setAmount(e.target.value)}
                value={amount} />
            <button type="submit">Add Expense</button>
        </form>
    )
}

export default ExpencesForm
