import './App.css'
import { useState } from 'react';
import data from './data';

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
    <div>
      <h2>Questions and Answers About Login</h2>
        {data.map((item) => 
          <div key={item.id}>
            <div className="question-section">
              <p>{item.title}</p>
              <button 
                onClick={() => handleExpand(item.id)}>
                  { item.id == displayedAnswer ? '-' : '+' }
              </button>
            </div>
            { item.id == displayedAnswer ? 
              <p>{item.info}</p> 
              : null 
            }
          </div>
        )}
    </div>
  )
}

export default App
