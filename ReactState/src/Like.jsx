import {useState} from "react"
let styles = {cursor: "pointer"};
let solidStyles = {cursor: "pointer", color: "red"};

export default function Like(){
    let [like, setLike] = useState(false);
    let [count, setCount] = useState(0);

    function incLike(){
        setLike(!like);
        console.log(like);
        if(!like){
            setCount(count+1);
        }
    }
    return <>
        <h1>Likes</h1>
       { like ?
            <h1 style={solidStyles} onClick={incLike}><i className="fa-solid fa-heart"></i></h1> 
    
           : <h1 style={styles} onClick={incLike}><i className="fa-regular fa-heart"></i></h1> 
        
       }
    
        <h2>Likes count is: {count}</h2>
    </>
}    