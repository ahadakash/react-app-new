import './App.css';

function App() {
  const props = [
    { name: 'Rahim', price: 500, email: "aaa@gmail.com" },
    { name: 'Karim', price: 1500, email: "bbb@gmail.com" },
    { name: 'Larim', price: 1000, email: "ccc@gmail.com" },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <MyCart name={props[0].name} email={props[0].email} price={props[0].price}></MyCart>
        <MyCart name={props[1].name} email={props[1].email} price={props[1].price}></MyCart>
        <MyCart name={props[2].name} email={props[2].email} price={props[2].price}></MyCart>
        <Person></Person>
      </header>
    </div>
  );
}

function MyCart(props) {
  const div = {
    height: '300px',
    width: '500px',
    border: '10px solid blue',
    marginTop: '20px'
  }

  return (
    <div style={div}>
      <h1>This is {props.name}'s cart.</h1>
      <h2>Email: {props.email}</h2>
      <button style={{ backgroundColor: 'yellow', padding: '10px', border: '5px solid black' }}>Price: {props.price} (Buy Me)</button>
    </div>
  )
}

function Person() {
  return <h1 style={{ color: 'red' }}>Hello</h1>
}

export default App;
