import { useState } from 'react'


function CountIndex() {
    const [index, setIndex] = useState(0);
    function handleClick() {
        setIndex(index + 1);
    }
    function handleBack() {
        setIndex(index - 1);
    }

    return (
        <>
            <button onClick={handleClick}>Plus</button>
            <button onClick={handleBack} >Minus</button>
            <h2>Increment Value : {index}</h2>
        </>
    )

}

export default CountIndex
