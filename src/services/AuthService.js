import axios from "axios";
const API_URL = "https://todonur.herokuapp.com/auth/";


    const register=(firstName, nickname, password)=>{
    return axios.post(API_URL + "signup", { firstName, nickname, password})
    }

     const login=(nickname,password)=>{
      return  axios
            .post(API_URL + "signin", { nickname, password })
          .then((res) => {
              if (res.data.token) {
                  localStorage.setItem("token", JSON.stringify(res.data));
              }

              return res.data;
          });
    }

  const getUser=()=>{
  return JSON.parse(localStorage.getItem("token"))
  }
    const logOut=()=>{
     localStorage.removeItem('token');

     }


export  {
    register, login, getUser,logOut
}
