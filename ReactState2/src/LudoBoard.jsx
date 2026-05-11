import { useState } from "react";
function LudoBoard(){
let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});
 function updateBlue(){
    setMoves((prevVal)=>{
        return {...prevVal, blue: blue+=1};
    });
 }
    return <>
    <h3>Blue moves: {moves.blue}</h3>
    <button onClick={updateBlue}>+1</button>
    <h3>Yellow moves: {}</h3>
    <button>+1</button>
    <h3>Green moves: {}</h3>
    <button>+1</button>
    <h3>Red moves: {}</h3>
    <button>+1</button>
    </>
}

export default LudoBoard;