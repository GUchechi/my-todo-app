import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

const TodoItem = () => {
  const {todos,removeTodo} = useContext(TodoContext)
  return (
    <>
        {todos.map((todoItem) => (
        <div key={todoItem.todoId} className='todoItem'>
            <p>{todoItem.todoText}</p>
            <span onClick={() => removeTodo(todoItem.todoId)}>X</span>
        </div>
    ))}
    </>
  )
}

export default TodoItem
