import React, {useState} from 'react';
import './App.css';
import Form from './todo/form'
import List from './todo/List'

function App() {
  const[todo, setTodo] = useState([])

  const addTask = (todo) =>{
    setTodo(prev => prev.concat({id: Date.now(), task: todo}));
  }
  

  return (
    <div className="todo-main">
        <h1>Todo List</h1>
        <Form onSubmit={addTask}/>
        <List todo={todo}/>
    </div>
  );
};

export default App;
