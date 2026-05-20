function LotteryTicket({val}){
    return <>
    {val=="" ?<h2>Lottery Ticket</h2>:<h2>Lottery Ticket: {val}</h2>}
     
    </>
}
export default LotteryTicket;