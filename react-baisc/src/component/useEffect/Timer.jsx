import {useState, useEffect} from 'react';

function Timer(){
  const [seconds, setSeconds] =useState(0);

  useEffect(()=>{
    const intervel = setInterval(()=>{
        setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
        clearInterval(intervel);
        console.log("Timer Cleared.");
    }

}, [])

  return (
    <>
    <h2> Seconds : {seconds}</h2>
    </>
  );
}
export default Timer;