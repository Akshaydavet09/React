import { useState } from "react"
import Item from "./Item"
import { v4 as uuidv4 } from "uuid";
function ToDo() {
    let [arr, setArr] = useState([{ task: "Sample-Task", id: uuidv4(), state: false }]);
    let [val, setVal] = useState("");
    let UpdateValue = (e) => {
        e.preventDefault();
        setVal(e.target.value);
    }
    let UpdateArr = (e) => {
        e.preventDefault();
        console.log(arr);
        setArr((prevVal) => {
            return [...prevVal, { task: val, id: uuidv4() }]
        })
    }
    let DeleteArr = (id) => {
        setArr(arr.filter((item) => item.id !== id));

    }
    let UpdateArr2 = () => {
        setArr((prevVal) => {
            let arr2 = prevVal.map((item) => {
                return { ...item, task: item.task.toUpperCase() }
            });
            console.log(arr2);
            return arr2;
        })
    }

    let UpdateOne = (id) => {
        setArr((prevVal) => {
            return prevVal.map((item) => {
                if (item.id == id) {
                    return { ...item, task: item.task.toUpperCase() }
                }
                else {
                    return { ...item }
                }
            })
        })
    }


    let MarkDone = (id) => {
        setArr((prevVal) => {
            return prevVal.map((item) => {
                if (item.id == id) {
                    return { ...item, state: true }
                }
                else {
                    return { ...item }
                }
            })
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
                return <Item deleteFunc={DeleteArr} key={item.id} task={item.task} id={item.id} updateOne={UpdateOne} markDone={MarkDone} state={item.state} />
            })}
        </ul>
        <br />
        <br />
        <hr />
        <button onClick={UpdateArr2} >Capital tasks</button>
    </div>
}
export default ToDo;