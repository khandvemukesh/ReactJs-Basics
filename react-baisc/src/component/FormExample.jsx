import {useState} from 'react'

function FormExample() {
    const [name, SetName] = useState("");
    const [email, SetEmail] =useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Name:", name)
        console.log("Email: ",email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2> React Form Example</h2>
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={(e)=>SetName(e.target.value)}  
                />
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={(e)=>SetEmail(e.target.value)}  
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormExample
