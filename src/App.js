import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodosList';

function App() {

  const [input ,setInput]=useState("");
  const [todos,setTodos]=useState([]);
  const [count,setCount]=useState(0);

  return (
    <div className='container'>
      <div className='app-wrapper'>
         <div>
          <Header count={count} setCount={setCount}/>
  
         </div>
         <div>
          <TodoList todos={todos} setTodos={setTodos} count={count} setCount={setCount}/>
         </div>
         <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          count={count}
          setCount={setCount}
          />
         </div>
        
      </div>
    </div>
  );
}

export default App;
