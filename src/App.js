import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const props = [
    { name: 'Rahim', price: 500, email: "aaa@gmail.com" },
    { name: 'Karim', price: 1500, email: "bbb@gmail.com" },
    { name: 'Larim', price: 1000, email: "ccc@gmail.com" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <AddMovie></AddMovie>
        <IncreaseDecrease></IncreaseDecrease>
        <Users></Users>
        <MyCart products={props[0]}></MyCart>
        <MyCart products={props[1]}></MyCart>
        <MyCart products={props[2]}></MyCart>
        <Person></Person>
      </header>
    </div>
  );
}

function AddMovie() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Number of Movies: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add Movie</button>
    </div>
  )
}


function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  console.log(user);

  return (
    <div>
      <h1>Users Data:</h1>
      <ul>
        {
          user.map((data) => <UsersData name={data.name}></UsersData>)
        }
      </ul>
    </div>

  );
}

function UsersData(props) {

  return (
    <h3>This user's name is : {props.name}</h3>
  )
}

function IncreaseDecrease() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1>Total Users: {num}</h1>
      <button style={{ marginRight: '20px', border: '5px dotted black', backgroundColor: 'yellow' }} onClick={() => setNum(num + 1)}>Increase</button>
      <button style={{ marginRight: '20px', border: '5px dotted black', backgroundColor: 'yellow' }} onClick={() => setNum(num - 1)}>Decrease</button>
    </div >
  );
}

function MyCart(props) {
  const div = {
    height: '300px',
    width: '500px',
    border: '10px solid blue',
    marginTop: '20px'
  }
  const { name, email, price } = props.products;

  return (
    <div style={div}>
      <h1>This is {name}'s cart.</h1>
      <h2>Email: {email}</h2>
      <button style={{ backgroundColor: 'yellow', padding: '10px', border: '5px solid black' }}>Price: {price} (Buy Me)</button>
    </div>
  )
}

function Person() {
  return <h1 style={{ color: 'red' }}>Hello</h1>
}

export default App;
