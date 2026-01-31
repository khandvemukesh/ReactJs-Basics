import {useState} from 'react'

function ObjectUseState() {
   const [student, SetStudent] = useState({
    name:'mukesh khandve',
    age:35,
    package:100000
   });

   const nameChange = ()=>{
    SetStudent({...student, package:200000});
   }
     
      
          return (
              <div> 
               <h2> Name : {student.name}</h2>
               <h2> Age : {student.age}</h2>
               <h2> Package : {student.package}</h2>
                  <button onClick={()=> nameChange()}>
                     Change Package
                  </button>
                  
                   
              </div>
          )
}

export default ObjectUseState
