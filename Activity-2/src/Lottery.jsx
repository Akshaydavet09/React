import { useState } from "react";
import LotteryTicket from "./LotteryTicket";
import LotteryHeading from "./LotteryHeading";
function Lottery(){
let [value, setValue] = useState("");

    let GenerateTicket = ()=>{
        setValue(`${Math.floor(Math.random()*901+100)}`);  
    }


    return <div className="Lottery">
        <LotteryHeading val={value}/>
        <LotteryTicket val={value} />
        <button onClick={GenerateTicket}>Generate Ticket</button>
    </div>
}

export default Lottery;