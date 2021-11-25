import axios from "axios";
import AuthHeader from "./AuthHeader";
const API_URL = "https://todonur.herokuapp.com/user/";

const getUsers = () => {

    return axios.get(API_URL + "get",  { headers: AuthHeader() })


}
const deleteUser=(id)=>{

    return axios.delete(API_URL + `delete/${id}`, { headers: AuthHeader() })

}
export { getUsers, deleteUser}