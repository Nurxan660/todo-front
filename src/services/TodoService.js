import axios from "axios";
import AuthHeader from "./AuthHeader";
import { getUser } from "./AuthService";
const API_URL = "https://todonur.herokuapp.com/todo/";

const addTodo=(description)=>{

    return axios.post(API_URL + `users/${getUser().id}/todos`,{description},{headers:AuthHeader()})
    
    
}
const deleteTodo=(id)=>{
    return axios.delete(API_URL + `users/${getUser().id}/todos/${id}`, { headers: AuthHeader()})
    .then((res)=>{
        return res.data
    })
}

const completedTodo=(id,completed,description)=>{

    return axios.put(API_URL + `users/${getUser().id}/todos/${id}`, { description,completed: !completed},{ headers: AuthHeader() })
}
const updateTodo = (id, description,completed) => {

    return axios.put(API_URL + `users/${getUser().id}/todos/${id}`, { description,completed:completed}, { headers: AuthHeader() })
}


export { addTodo, deleteTodo, completedTodo,updateTodo};