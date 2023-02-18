import React from 'react'

const Todo = (props) => {
    const z=props.todos
    
  

   const list = z.map((x) =>{
    return <div key={x.id} >
    <li>{x.todo}{x.id}</li>
            <button id={x.id} onClick={x.handleDelete}>Delete</button>
    </div>
})
   return (
    <div>
        <h5>{list}</h5>
    </div>
  )
}

export default Todo