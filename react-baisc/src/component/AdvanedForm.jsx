import {useState} from 'react'

function AdvanedForm() {
       const [formData, SetFormData] = useState({
           country: "india",
           agree: false,
           gender: ""
       });
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("UserData:", formData)
    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        SetFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2> Advanced React Form Example</h2>
            <label>Country:</label>
            <select
                name="country"
                value={formData.country} 
                onChange={handleChange}>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
            </select> 
            <label>Gender</label>  
            <input
                type="radio"    
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
            />
            <label htmlFor="male">Male</label>
            <input
                type="radio"    
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
            <br/>
            <label>
                <input 
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                />
                I agree to the terms and conditions
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
        
        </>
        
    )
}

export default AdvanedForm
