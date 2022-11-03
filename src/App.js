import './App.css';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if(inputValue.trim() === '') {
      setError("Todo cannot be empty, please add a todo!!!")
      return;
    }
    setTodos([...todos,{ todoText:inputValue, todoId:uuidv4() }])
    setInputValue('')
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todoItem => todoItem.todoId !== id))
  }

  return (
    <div  className="App">
      <div className="container">
        <Form 
          inputValue={inputValue} 
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
          />
          <p className="errorMsg">{error}</p>
        <TodoItem todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
