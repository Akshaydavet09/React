import { useState } from "react"
function App() {
  let [inpVal, setInpVal] = useState({
    inp1: "Akshay",
    inp2: "sumit",
    inp3: "geet",
    inp4: "sneha"
  });

  let changeVal = (event)=>{
    event.preventDefault();
    setInpVal((prevVal)=>{
      return {...prevVal,  [event.target.name]: event.target.value}
    })
  }

let handleSubmit = (event)=>{
    event.preventDefault();
    console.log(inpVal);
}
  return <>
  <form action="" onSubmit={handleSubmit}>
    <input type="text" onChange={changeVal} name="inp1"/>
    <input type="text" onChange={changeVal} name="inp2"/>
    <input type="text" onChange={changeVal} name="inp3"/>
    <input type="text" onChange={changeVal} name="inp4"/>
    <button>Submit</button>
  </form>
  </>
}

export default App
