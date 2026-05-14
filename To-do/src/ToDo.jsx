import { useState } from "react"
import Item from "./Item"
import { v4 as uuidv4 } from "uuid";
function ToDo() {
    let [arr, setArr] = useState([{ task: "Sample-Task", id: uuidv4() }]);
    let [val, setVal] = useState("");
    let UpdateValue = (e) => {
        e.preventDefault();
        setVal(e.target.value);
    }
    let UpdateArr = (e) => {
        e.preventDefault();
        setArr((prevVal) => {
            return [...prevVal, { task: val, id: uuidv4() }]
        })
    }
    let DeleteArr = (id)=>{
        setArr(arr.filter((item)=> item.id !== id));
        
    }
    let UpdateArr2 = ()=>{
        setArr(
             arr.map((item)=>{
                return item.task.toUpperCase;
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
        <ul className="tasks">
            {arr.length > 0 && arr.map((item, index) => {
                return <Item deleteFunc={DeleteArr} key={item.id} task={item.task} id={item.id}/>
            })}
        </ul>
            <br />
            <br />
            <hr/>
            <button onClick={UpdateArr2} >Capital tasks</button>
    </div>
}
export default ToDo;