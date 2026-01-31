import { useState } from 'react'

function InputComponent() {
    const [name, SetName] = useState("");

    return (
        <div>  
            <input value={name} type="text" onChange={(e)=>SetName(e.target.value)} />
            <h2> Name : {name  || 'Guest'}</h2>
        </div>
    )
}

export default InputComponent
