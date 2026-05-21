import TicketNumber from "./TicketNumber";
function Ticket({nums}){
    return <div className="Ticket">
        <h3>Ticket</h3>
        {
            nums.map((num, idx)=>{
               return <TicketNumber number={num}/>
            })
        }
    </div>
}
export default Ticket;