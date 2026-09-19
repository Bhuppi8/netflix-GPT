import React, { useState } from 'react'

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const handleOnChange = (e) => {
    setTask(e.target.value);
  }

  const handleOnClick = () => {
    setTodo([...prev, task])
  }

  return (
    <div>
        <h1>Todo list</h1>
        <input 
           value={task}
           onChange={handleOnChange}
           placeholder='Enter a task' 
        />
        <button onClick={handleOnClick}>Add</button>
        <ul>
            {todo.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoApp


