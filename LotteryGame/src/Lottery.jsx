import { genTicket, calSum } from "./helper"
import { useState } from "react";
import Ticket from "./Ticket";
function Lottery(){
    let [ticket, setTicket] = useState(genTicket(3));

    let updateTicket = ()=>{
        setTicket(genTicket(3));
    }

    return <div className="Lottery">
        <h1>Lottery Game!</h1>
        <Ticket nums={ticket} />
        <button onClick={updateTicket}>New Ticket</button>
        {calSum(ticket) == 15 && <h2>You Won Congratulations!</h2>}
    </div>
}
export default Lottery;