import {useState} from 'react'
import './Todo.css';

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const[input, setInput] = useState('');

    const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: Date.now(), // more unique than random 0-9
      })
    );
    setInput('');
  };

    const removeTodo =(id)=>{
        setTodos((todos) => todos.filter((t)=> t.id !== id))
    }
  return (
    <div className='container'>
        <h1 className='heading'>Todo App</h1>
        <input type="text" 
        placeholder='Enter your todo' 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />

        <button onClick={handleSubmit}>Add Todo</button>


       <ul className='todo-list'>
        {todos.map((todo) => (
          <li className='todo' key={todo.id}>
            <span>{todo.text}</span>
            <button className='close' onClick={() => removeTodo(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
        
    </div>
  )
}

export default Todo