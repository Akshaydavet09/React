import { useState } from "react";
function LudoBoard(){
let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});

 function updateBlue(){
    setMoves((prevVal)=>{
        return {...prevVal, blue: prevVal.blue+1};
    });
}

 function updateYellow(){
    setMoves((prevVal)=>{
        return {...prevVal, yellow: prevVal.yellow+1};
    });
}

 function updateRed(){
    setMoves((prevVal)=>{
        return {...prevVal, red: prevVal.red+1};
    });
}

 function updateGreen(){
    setMoves((prevVal)=>{
        return {...prevVal, green: prevVal.green+1};
    });
 }

    return <>
    <h3>Blue moves: {moves.blue}</h3>
    <button onClick={updateBlue}>+1</button>
    <h3>Yellow moves: {moves.yellow}</h3>
    <button onClick={updateYellow}>+1</button>
    <h3>Green moves: {moves.green}</h3>
    <button onClick={updateGreen}>+1</button>
    <h3>Red moves: {moves.red}</h3>
    <button onClick={updateRed}>+1</button>
    </>
}

export default LudoBoard;