import './App.css';
import FlashcardForm from './Components/flashcardForm';

const App = () => {

  return (

    <div className="App">

      <div>
          <h1>React Flashcards</h1>
          <h2>Vocabulary from Unit 1 & 2</h2>
          <a href="https://www.w3schools.com/react/default.asp">Resource at W3Schools</a>
          <h4>Number of Cards: 7</h4>
          <FlashcardForm />


        </div>

    </div>
  )
}

export default App


