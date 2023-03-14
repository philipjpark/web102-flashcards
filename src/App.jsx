import './App.css';
import { useState } from 'react';

const App = () => {

  const flashcards = [
    {question: "React", answer: "Jordan Walke, a software engineer at Meta, created React to build user interfaces and single-page applications. React is a library used to build reusable UI components."},
    {question: "React JSX", answer: "React JSX stands for JavaScript XML. JSX allows us to write HTML in React."},
    {question: "React Components", answer: "React Components are like functions that return HTML elements. They are resusable."},
    {question: "React Props", answer: "Props stands for properties. Props are passed to components via HTML attributes."},
    {question: "React Events", answer: "React Events performs actions based on user events. React has the same events as HTML events."},
    {question: "React Hooks", answer: "React Hooks allow function components to have access to state and other React features. Hooks allow us to 'hook' into react features."},
    {question: "React UseState Hook", answer: "React UseState hook allows us to track state in a function components."}
  ]

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);


  const handleCardFlip = () => {
    setFlipped(!flipped);
  }

  const handleNextCard = () => {
    setCurrentCardIndex(currentCardIndex === flashcards.length - 1 ? 0 : currentCardIndex + 1);
    setFlipped(false);
  }

  

  return (
    <div className="App">
      <div>
        <h1>React Flashcards</h1>
        <h3>Vocabulary from Unit 1 and 2</h3>
        <a href="https://www.w3schools.com/react/default.asp">Resource at W3Schools</a>
        <h4>Number of Cards: 7</h4>

        <div className="card">
          <div className={`card-inner ${flipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
            <div className="front">
              {flashcards[currentCardIndex].question}
            </div>
            <div className="back">
              {flashcards[currentCardIndex].answer}
            </div>
          </div>
            <div className="textbox">
              {/* <p>Answer here</p> */}
              <label>What is your Answer: </label>
              <input
                type="text"
                placeholder="Type here"
              > 
              </input>
              {/* <button>Submit</button>  */}
            </div>
        </div>
          <button onClick={handleNextCard}>Next Card</button>
      </div>
    </div>
  )
}

export default App


