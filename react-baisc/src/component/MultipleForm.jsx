import { useState } from 'react'

function MultipleForm() {
    const [formData, SetFormData] = useState({
        name: "",
        email: "",
        city: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("UserData:", formData)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        SetFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <h2> React Form Example</h2>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>

                </form>
            </>
        )
    }
export default MultipleForm
