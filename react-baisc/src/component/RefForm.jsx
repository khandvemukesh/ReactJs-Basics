import {useRef} from 'react'

function RefForm() {
    const nameRef = useRef()
    const emailRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        console.log("Name:", name, "Email:", email)
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" ref={nameRef} />
            <br/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" ref={emailRef} />
            <br/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default RefForm
