import React,{useState} from 'react'
import  './css/Todo.css'
import {addTodo,deleteTodo,completedTodo} from '../services/TodoService'
import Todo from './Todo'



const TodoForm = (props) => {
    const [description, setDescription] = useState('');
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
   
    const onChangeDesc = (e) => {

        setDescription(e.target.value);
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        addTodo(description)
        .then(res=>{
            let n=res.data
            setTodos([...n])
            localStorage.setItem("todos", JSON.stringify([...n]))
        })
        
    }
    const handleClick = (id) => {
   
        todos.forEach((item,i) => {
           
        if(id===item.id){
        
            deleteTodo(id);
            todos.splice(i, 1);
        }
        })
        setTodos([...todos]);
        localStorage.setItem("todos", JSON.stringify([...todos]))

    }

    const forComplited=(id)=>{
        setTodos([...todos.map((todo) => {
            return todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
        })
        ])
        localStorage.setItem("todos", JSON.stringify([...todos.map((todo) => {
            return todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
        })
        ]))
        todos.forEach((item, i) => {

            if (id === item.id) {

                completedTodo(id, item.completed, item.description)
            }
        })
        
            
        
                
                
            
    }

    return (
        <div className="todo">
            <div className="todoForm">
               
                   <form onSubmit={onSubmit}>
                    <input
                    className="todoInput"
                        type="text"
                        onChange={onChangeDesc}
                        value={description}
                        placeholder="Введите..."
                    >
                    </input>

                    <button type="submit "className="TodoButton">Добавить</button>
                    
                   </form>
                {todos.map((todo) => {
                    return <Todo todo={todo} handleClick={handleClick}  forComplited={forComplited} setTodos={setTodos} todos={todos}
                    />
                })}
           
         </div>
        </div>
    )
}

export default TodoForm
