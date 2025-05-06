import './App.css'
import { useState } from 'react';
import data from './data';
import { FaPlus, FaMinus } from 'react-icons/fa';

function App() {
  const [displayedAnswer, setDisplayedAnswer] = useState(null);

  function handleExpand(questionId) {
    if (questionId == displayedAnswer) {
      setDisplayedAnswer(null)
    } else {
      setDisplayedAnswer(questionId)
    } 
  }

  return (
    <div className="accordian">
      <h2>Questions and answers about login</h2>
      <div className="q-and-a-section">
        {data.map((item) => 
          <div key={item.id}>
            <div className="question-section">
              <p>{item.title}</p>
              <button 
                onClick={() => handleExpand(item.id)}>
                  { item.id == displayedAnswer 
                    ? <FaMinus className="icon" /> 
                    : <FaPlus className="icon" /> }
              </button>
            </div>
            <div className="answer-section">
              { item.id == displayedAnswer ? 
                <p>{item.info}</p> 
                : null 
              }
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
