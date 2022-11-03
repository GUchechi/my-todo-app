import React from 'react'

const Form = ({inputValue,setInputValue, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <input
             type="text"
             placeholder='Add todo'
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
              />
        <button type="submit">Add Todo</button>
    </form>
  )
}

export default Form
