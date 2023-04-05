import { useState } from "react"
import FlashCard from './FlashCard';

export default function FlashCardList({cards}){ 
    // const QUESTIONS = [{front: "question1", back:"answer1"},
    //                 {front: "question2", back:"answer2"},
    //                 {front: "question3", back:"answer3"},]

    const [flashcards, setFlashcards] = useState(cards);
    const htmlFlashcards = flashcards.map((flashcard) => <FlashCard front={flashcard.front} back={flashcard.back}></FlashCard>)
    

    return<>
        <div>
            {htmlFlashcards}
        </div>
    </>
}