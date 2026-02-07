import { useState } from "react";
import './TodoForm.css';

function TodoForm() {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo) {
            setTodos([...todos, { text: newTodo, completed: false }])
            setNewTodo('')
        }
    }
    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos)
    }
    return (

        <>
            <form onSubmit={handleSubmit}>
                <input
                    name='todo'
                    type='text'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
            <div>
                <ul>
                   
                        {todos.map((todo, index) => (

                            <li key={index}>
                                <span className={todo.completed ? "completed" : ""}>
                                    {todo.text} 
                                </span>
                                <button onClick={() => handleDelete(index)}> Delete </button>
                            </li>
                        )
                        )}
                    
                </ul>
            </div>
        </>
    )
}

export default TodoForm
