import { useState } from "react"
import Item from "./Item"
function ToDo() {
    let [arr, setArr] = useState(["Eat"]);
    let [val, setVal] = useState([""]);
    let UpdateValue = (e) => {
        e.preventDefault();
        setVal(e.target.value);
    }
    let UpdateArr = (e) => {
        e.preventDefault();
        setArr((prevVal) => {
            return [...prevVal, val]
        })
    }
    // let AddTask = (e)=>{
    //     e.preventDefault();
    //     setArr((prevVal)=>{
    //         return [...prevVal, e.target[0].value]
    //     })
    // }  
    return <div className="ToDo">
        <h1>To Do List</h1>
            <input onChange={UpdateValue} type="text" placeholder="Enter your task here" />
            <button onClick={UpdateArr} type="submit">Submit</button>
        {arr.length > 0 && arr.map((item, index) => {
            return <Item task={item} />
        })}
    </div>
}
export default ToDo;