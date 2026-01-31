import Hello from "./component/Hello";
import CountIndex from "./component/CountIndex";
import ToggleText from "./component/ToggleText";
// import LikeButton from "./component/LikeButton";
//  import UserProfile from "./component/UserProfile";
// import ObjectUseState from "./component/ObjectUseState";
import InputComponent from "./component/InputComponent";
function App() {
  const getName = (name)=>{
    return name;
  }

  const handleClick = ()=>{
    alert('Button Clicked');
  }
  const handleChange = (event)=>{
    console.clear();
    console.log(event.target.value);
  }
 const handleMouseOver = ()=>{
    console.log('Mouse Over Event'); 
  }
  const handleDoubleClick = ()=>{
    console.log('Double Click Event');
  }

const name = 'Mukesh Kumar';
const name1 = 'Rjat Singh';
  return (
     <div className="">
      <h1>Hello {getName(name)}</h1>
      <h1>Hello {getName(name1)}</h1>

      {/* example Of multiple function with one attribute */}
      <p onMouseOver={handleMouseOver}  onDoubleClick={handleDoubleClick}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur quo quasi enim placeat alias nesciunt fugit repellat. 
        Aut dolores, reprehenderit beatae voluptatem debitis consequatur unde incidunt odit reiciendis ipsam.</p>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>{alert('Button Clicked from Arrow Function')}}>Arrow Me</button>
      <input type="text" onChange={handleChange} placeholder="Type Something"/>
     
      {/* example Of props */}
     <Hello name="Mukesh"/>

     {/* example Of useState with counter */}
     <CountIndex/>

     {/* example Of useState with Hide and Show */}
     <ToggleText/>
    <br/>
     {/* example Of useState with Like and Unlike */}
     {/* <LikeButton/>
     <br/>
     <UserProfile/>
     <br/>
     <ObjectUseState/> */}

     <br/>
     <InputComponent/>
     
     </div>

     

  );

}
export default App;
