import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const person = {
    name: "Dr. Mahfuz",
    job: "Singer"
  }
  const person2 = {
    name: "Eva Rahman",
    job: "Kokil Konthi"
  }
  const style = {
    color: "tomato"
  }
  const products = [
    {
      name: "Photoshop", price: "US$20.99/mo", desc: "Create beautiful graphics, photos, and art on desktop and iPad. Comes with Adobe Fresco for drawing and painting."
    },
    {
      name: "Illustrator", price: "US$20.99/mo", desc: "Create precise designs, Illustrations, and vector graphics on desktop and iPad."
    },
    {
      name: "Adobe XD", price: "US$9.99/mo", desc: "Design, prototype, and share user experiences."
    },
    {
      name: "Premiere Pro", price: "US$20.99/mo", desc: "Professional video and film editing."
    },
    {
      name: "Premiere Rush", price: "US$9.99/mo", desc: "Create and share online videos. Fast and easy."
    },
    {
      name: "After Effects", price: "US$20.99/mo", desc: "Create motion graphics and visual effects for film, TV, video, and web."
    },
    {
      name: "Lightroom (1TB)", price: "US$9.99/mo", desc: "Edit, organize, store, and share photos from anywhere."
    },
    {
      name: "Spark", price: "US$9.99/mo", desc: "Create custom-branded graphics, web pages, and video stories in minutes."
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={style}>My heading: {person.name + " " + person.job}</h1>
        <h3 style={{ color: "tomato" }}>Singer: {person2.name + " " + person2.job}</h3>
        <p>Ha!</p>
        <Person name="Rubel Hossain" />
        <Person name="Taskin Ahmed" />
        <Person name="Tamim Iqbal" />
        <Person name="Sakib Al Hasan" />
        <Person name="Mushfiqur Rahim" />
        <Person name="Mahmudullah Riyad" />
        {
          products.map(product => <Product product={product} />)
        }
        <Counter />
        <Users />
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.website}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={handleDecrease}>Decrease</button>
      <button onMouseMove={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: "2px solid tomato",
    borderRadius: "10px",
    margin: "10px 0",
    padding: "0 20px",
    height: "420px",
    width: "300px",
    float: "left"
  }
  const { name, price, desc } = props.product
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <p>{desc}</p>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid tomato',
    borderRadius: "10px",
    margin: "10px",
    padding: "0 30px"
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Hero of the year</h3>
    </div>
  );
}
export default App;
