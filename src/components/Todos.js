import React,{useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const Todos = () => {
    const [todos,setTodos] = useState([])

    const addTodo = todo => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }
  
      const newTodos = [todo, ...todos];
  
      setTodos(newTodos);
      console.log(...todos);
    };
    
    const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
      
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
    
    const removeTodo = id => {
      const removedArr = [...todos].filter(todo => todo.id !== parseInt(id.target.id));
      setTodos(removedArr)
    }
  
    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
    
  return (
    <div className='bigcontainer'>
   <TodoForm
   onSubmit={addTodo}
   />
    <h1 className='title'>Todos</h1>
    <div className='todo-container'>
    <Todo todos={todos}
    completeTodo = {completeTodo}
    removeTodo={removeTodo}
    updateTodo={updateTodo}
    />
    </div>
    </div>
  )
}

export default Todos