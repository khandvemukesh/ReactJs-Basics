import {useState, useEffect} from 'react'
import ExpencesItem from './ExpencesItem'

function ExpencesList({expances, onDelete}) {
     if(expances.length === 0){
          return  <p className="no-expense">No expenses added yet.</p>
        }
    return (
       <div className="expense-list">
         {expances.map((item) => (
                 <ExpencesItem key={item.id} item={item} onDelete={onDelete}/>
         ))}
           
        </div>
    )
}

export default ExpencesList
