import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from 'uuid';


export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
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
      <TodoContext.Provider value={{inputValue, setInputValue,todos, setTodos,error, setError,handleSubmit,removeTodo  }}>
          {children}
      </TodoContext.Provider>
   );
};