import {useState} from 'react'

function UserProfile() {
    const [name, SetName] = useState("Guest");
    const [age, SetAge] = useState(18);
   
   
       return (
           <div> 
            <h2> Name : {name}</h2>
            <h2> Age : {age}</h2>
               <button onClick={()=> SetName("Mukesh Khandve")}>
                  Change Name
               </button>
                <button onClick={()=> SetAge(age + 1)}> 
                  Change Age
               </button>
                
           </div>
       )
}

export default UserProfile
