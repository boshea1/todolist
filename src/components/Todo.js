import React from 'react'
import TodoForm from './TodoForm'
import { useState } from 'react'

const Todo = ({ todos, removeTodo, updateTodo, completeTodo }) => {
    const [edit,setEdit] = useState({id:null, value:''})
    
    
  
    const submitUpdate =value => {
        updateTodo(edit.id, value);
        setEdit({
            id:null,
            value:''
        })
    }

if (edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
}
   return (
            todos.map((todo,index) =>{ 
   return <div key={index}
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
   <li style={{listStyle:'none'}}key={todo.id} onClick={() => completeTodo(todo.id)}>
    {todo.text}
    </li>
    <div className='btn-container'>
           <button id={todo.id} onClick={removeTodo} className='buttontodo'>Delete</button>
           <button id={todo.id} onClick={()=> setEdit({id:todo.id, value: todo.text})} className='buttontodo'>Update</button>
    </div>
   </div>
})
  )
}

export default Todo