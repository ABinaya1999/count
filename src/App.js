import React, {useState} from"react";
const App= () =>{
    const [number, setNumber]= useState(0)
    return <div>

        <h1>{number}</h1>
        <button className="button" onClick={()=> setNumber(number+1)}>Add</button>
        <button className="button" onClick={()=> setNumber(number-1)}>Sub</button>
        </div>
 }
 export default App;