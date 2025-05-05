import './App.css'
import data from './data';

function App() {

  return (
    <div>
      <h2>Questions and Answers About Login</h2>
      <div>
        {data.map((item) => 
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.info}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
