import { useState } from "react"

function Joke(){
let [joke, setJokes] = useState({})
let URL = "https://official-joke-api.appspot.com/random_joke";

async function newJoke(){
    let response = await fetch(URL);
    let res = response.json();
    console.log(res);
}


    return <>
    <h1>Jokes!</h1>


    <button onClick={newJoke} >Get new joke</button>
    
    
    </>
}
export default Joke;