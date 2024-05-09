import {useContext} from 'react'
import userContext from './context/UserContext'
function Profile() {
    const {user} = useContext(userContext)
  return (
    <div>
        {
       (user)?
       (<div>Hello {user.username}</div>)
       :
       (<div>Please Login</div>)
    }
    </div>
  )
}

export default Profile