import {useState} from 'react'
import './Todo.css';

const Todo = () => {

    const[todos,setTodos] = useState([]);
    const[inputValue,setInputValue] =useState('')

    const handleSubmit=() =>{
        setTodos((todos) => {
            return todos.concat({
                text:inputValue,
                id:Date.now(),
            })
        })

        setInputValue('')
    }

    const removeTodo=(id)=>{
        setTodos((todos) => todos.filter((t)=>t.id !== id))
    }
  return (
    <div className='container'>
        <h1 className='heading'>Todo App</h1>
        <input type="text" 
        placeholder='enter your todo'
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)} />

        <button onClick={handleSubmit}>Add Todo</button>

        <ul className='todo-list'>
            {todos.map((todo) =>(
                <li className="todo" key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={()=>removeTodo(todo.id)}>x</button></li>
            ))}
        </ul>
        
    </div>
  )
}

export default Todo