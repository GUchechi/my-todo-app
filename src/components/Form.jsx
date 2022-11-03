import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

const Form = () => {
  const {inputValue,setInputValue, handleSubmit,error} = useContext(TodoContext)
  return (
    <>
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder='Add todo'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
                />
          <button type="submit">Add Todo</button>
      </form>
    <p className="errorMsg">{error}</p>
    </>
  )
}

export default Form
