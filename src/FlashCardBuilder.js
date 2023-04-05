import { useState } from "react"

export default function FlashCardBuilder({onAdd}) {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
    
        // You can pass formData as a fetch body directly:
        // fetch('/some-api', { method: form.method, body: formData });
    
        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        let front = "q1"
        let back = "a1"

        onAdd(front, back);
    }

    function addFlashCard(){
        
    }

    return (
    <>
    <form method="post" onSubmit={handleSubmit}>
        <label>
            Question: <input name="front" defaultValue="Your new question" />
        </label>
        <hr />
        <label>
            Answer: <input name="back" defaultValue="Your new answer" />
        </label>
        <hr />
        <button type="submit">Build</button>
    </form>
    </>
    )
}

