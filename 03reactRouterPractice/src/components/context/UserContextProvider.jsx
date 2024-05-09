import {useState} from 'react'
import userContext from './UserContext'
function UserContextProvider(props) {
    const [user, setUser] = useState(null);
    console.log('the value of use is ',user);
    console.log('the value of children is ',props.children);
  return (
    <userContext.Provider value={{user,setUser}}>
         {props.children}
    </userContext.Provider>
  )
}

export default UserContextProvider