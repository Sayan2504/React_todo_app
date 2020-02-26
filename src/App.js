import React, {useState} from 'react';
import './App.css';
import Form from './todo/form'
import List from './todo/List'

const App = () => {
  const[todo, setTodo] = useState([])

  const addTask = (todo) =>{
    setTodo(prev => prev.concat({id: Date.now(), task: todo}));
  }

  const deleteTodo = (id) =>{
    const arr = todo.filter(item => {
      if(item.id != id) return item;
    });
    setTodo(arr);
  }

  const editTodo = (id, text) =>{
    const arr = todo.map(item =>{
      if(item.id == id) {
        return ({id: id, task: text});
      }
      return item;
    });
    setTodo(arr);
  }

  return (
    <div className="todo-main">
        <h1>Todo App</h1>
        <Form onSubmit={addTask}/>
        <List todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  );
};

export default App;
