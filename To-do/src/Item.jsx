function Item({ deleteFunc, task, id, updateOne, markDone, state}) {
    let ourStyles = { textDecoration: "line-through" };
    let ourStyle = { textDecoration: "none" };
    return <>
        <li><span style={state?ourStyles:ourStyle}>{task}</span>&nbsp;&nbsp;&nbsp;
            <span><button onClick={() => deleteFunc(id)}>Delete</button></span>
            &nbsp;&nbsp;&nbsp;<span><button onClick={() => updateOne(id)}>Capitilize</button></span>
            &nbsp;&nbsp;&nbsp;<span><button onClick={() => markDone(id)}>Mark as done</button></span>
            </li>
    </>

}

export default Item;