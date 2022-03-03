import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginError, loginSuccess } from "../store/auth/auth.action";

export const Login = () => {
  const [result,setResult] = useState([])
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

useEffect(()=>{
  getUsers()
})
  const getUsers = ()=>{
  fetch("http://localhost:3000/users") 
  .then((r)=>r.json())
  .then((r)=>setResult(r))
  }

  const handleSubmit =(e) => {
    e.preventDefault()
  for(let i = 0; i<result.length; i++){
    if(result[i].username === username && result[i].passowrd === password){
        dispatch(loginError());  
      }
       else{
         dispatch(loginSuccess());
    } 
}
};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
          placeholder="username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
