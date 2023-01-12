import './App.css';

function App() {

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/skiareas")
    .then(res => res.json())
    .then(res => console.log(res))
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={(handleSubmit)}>Show Ski</button>
    </div>
  );
}

export default App;
