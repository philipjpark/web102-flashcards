import React, {Component, useState} from "react";

const FlashcardForm = () => {

    const flashcards = [
        {
            question: "What is a popular JS framework popularized by Facebook?", 
            answer: 
            "React"
        },
        {
            question: "What allows us to write HTML in React?", 
            answer: 
            "React JSX"
        },
        {
            question: "What are reuseable functions in React that return HTML elements?", 
            answer: "React Components"},
        {
            question: "What are components passed via HTML attributes within the React framework?", 
            answer: "React Props"},
        {
            question: "What is the React version of HTML events?", 
            answer: "React Events"},
        {
            question: "What are functional components to have access to state and other React features?", 
            answer: "React Hooks"},
        {
            question: "What allows us to track state in a function components?", 
            answer: "React useState Hook"
        }
      ]
    
      const [currentCardIndex, setCurrentCardIndex] = useState(0);
      const [flipped, setFlipped] = useState(false);
    
    
      const handleCardFlip = () => {
        setFlipped(!flipped);
      }
    
      const handlePreviousCard = () => {
            setCurrentCardIndex(currentCardIndex === flashcards.length - 1 ? 0 : currentCardIndex -1)
            setFlipped(false);
      }

      const handleNextCard = () => {
        setCurrentCardIndex(currentCardIndex === flashcards.length - 1 ? 0 : currentCardIndex + 1);
        setFlipped(false);
      }
    
      const onCheckedAnswer = () => {
        const userAnswer = document.querySelector('input').value.toLowerCase();
    const correctAnswer = flashcards[currentCardIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
      }
      
  return (
    <div>
        
        {/* <div>
            <p>I'm operating</p>
        </div> */}
        <div>
            <div className="card">
            <div className={`card-inner ${flipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
                    <div className="front">
                        {flashcards[currentCardIndex].question}
                    </div>
                    <div className="back">
                        {flashcards[currentCardIndex].answer}
                    </div>
            </div>
        </div>

            <div className="textbox">
                {/* <p>What is the Answer?</p> */}
                <label>Answer: </label>
                <input
                type="text"
                placeholder="Type here"
                > 
                </input>
                <button onClick={onCheckedAnswer}>Submit</button> 
            </div>
            
        </div>
            <button onClick={handlePreviousCard}>Previous Card</button> 
            <button onClick={handleNextCard}>Next Card</button> 
    
    </div>
  );
  
};

export default FlashcardForm;