import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyCart></MyCart>
        <Person></Person>
      </header>
    </div>
  );
}

function MyCart() {
  const div = {
    height: '200px',
    width: '500px',
    border: '10px solid blue'
  }
  const props = [
    { name: 'Rahim', price: 500, email: "aaa@gmail.com" },
    { name: 'Karim', price: 1500, email: "bbb@gmail.com" },
    { name: 'Larim', price: 1000, email: "ccc@gmail.com" },
  ]
  return (
    <div style={div}>
      <h1>This is { } cart.</h1>
      <button style={{ backgroundColor: 'yellow', padding: '10px', border: '5px solid black' }}>Buy Me</button>
    </div>
  )
}

function Person() {
  return <h1 style={{ color: 'red' }}>Hello...</h1>
}

export default App;
