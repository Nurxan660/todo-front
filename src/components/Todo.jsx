import React,{useState} from 'react'
import { updateTodo } from '../services/TodoService';
import Modal from './Modal';

const Todo = ({todo,handleClick,forComplited,todos,setTodos}) => {
    const [modalActive, setModalActive] = useState(false);
    const [description, setDescription] = useState('');
    const onChangeName = (e) => {

        setDescription(e.target.value);

    }
    const onSubmit = (e) => {
        e.preventDefault();
        updateTodo(todo.id,description,todo.completed)
        .then((res)=>{
            
           setTodos([...res.data])
            localStorage.setItem("todos", JSON.stringify([...res.data]))
           
        })
       

    }
    return (
        <div className="item-todo" >
            <div className={todo.completed?"item-text strike":"item-text"} onClick={() => forComplited(todo.id)}>
            {todo.description}
        </div>
            <div className="item-update" onClick={()=>setModalActive(true)}  >
                <img src="https://img.icons8.com/material/24/000000/edit--v1.png" />
            </div>
            <div className="item-delete" onClick={() => handleClick(todo.id)} >
                <img src="https://img.icons8.com/material/24/000000/delete-sign--v1.png" />
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <form onSubmit={onSubmit}>

      <input className="modalInput" type="text" onChange={onChangeName} value={description}/>
<button className="modalButton">Update</button>

       </form>
            </Modal>
            
        </div >
    )
}

export default Todo
