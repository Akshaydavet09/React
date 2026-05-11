import { useState } from "react"

export default function Counter() {
    let [count, setCount] = useState(0);
    function IncCount(){
        setCount(count+1); 
    }

    return <div className="Counter">
        <h1>Counter</h1>
        <button onClick={IncCount}>Increase Count</button>
        <h2>Count: {count}</h2>
    </div>
}