import React,{useState} from 'react'
import Todo from './Todo'

const Todos = () => {
    const [todo,setTodo] = useState('')
    const [todos,setTodos] = useState([])

    const handleDelete = (e) => {
      console.log('todospre',todos)
      console.log('todo.splice',todos.splice(e.target.id,1))
      setTodos(todos)
      console.log('todos', todos)
      }
    
        const handleChange = (e) => {
        setTodo(e.target.value)
    }
   
    console.log('onclick',todos)
    const handleClick = (e) => {
            var x = (todos.length + 1)
            setTodos([...todos,{todo:todo,id:x,handleDelete:handleDelete}])
    }

    
  return (
    <>
    <form action="">
    <input type="text" name="" id='' onChange={handleChange} />
    <button type='button' onClick={handleClick}>Submit</button>
    </form>
    <h1>Todos</h1>
    <Todo todos={todos}/>
    </>
  )
}

export default Todos