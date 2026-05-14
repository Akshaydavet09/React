function Item({deleteFunc, task, id}){
    return <>
        <li>{task}&nbsp;&nbsp;&nbsp;<span><button onClick={()=>deleteFunc(id) }>Delete</button></span></li>       
        </>
   
}

export default Item;