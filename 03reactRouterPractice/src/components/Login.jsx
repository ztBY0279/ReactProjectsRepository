import {useState,useContext} from 'react'
import userContext from './context/UserContext';
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(userContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(username, password);
         setUser({username,password});

    }
  return (
    <div className='m-2'>
        <h2>Login</h2>
        <input
            className="border-2  border-black"
            type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        {
            "  "
        }
        <input
          className="border-2  border-black"
          type='password'
          placeholder='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        {"  "}
        <button className="border-2  bg-blue-500 p-1 rounded" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login