import { useState } from "react"

export default function FlashCard({front, back}){ 
    const [onFront, setOnFront] = useState(true);
        
    // Function to change the state
    function toggleOnFront(){
        setOnFront(!onFront);
    }

    if(onFront){
        return <div class="front card"  onClick={toggleOnFront}> {front}</div>
    }
    else{
        return <div class="back card" onClick={toggleOnFront}> {back} </div>
    }
}