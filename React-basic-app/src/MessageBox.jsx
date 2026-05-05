import "./MessageBox.css";
function MessageBox({userName, colour}){
    let bg = {backgroundColor : colour}
    return <div className="MessageBox" style={bg} >
        <h2>Hello {userName} have a good day</h2>
    </div>
    
}


export default MessageBox;