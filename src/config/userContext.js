import { createContext, useReducer } from 'react'

export const UserContext = createContext()

const user_state = {
  isLogin: false,
  user: {}
}

const user_Reducer = (state, action) => {
  const {type, payload} = action

  switch(type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem('login', payload)
      return {
        isLogin: true,
        user: payload
      }
    
      case 'LOGOUT':
        localStorage.removeItem("login")
        return {
            isLogin: false,
            user: {}
        }
    default:
        throw new Error()
  }
}

export const UserContextProvider = ({ children }) => {
const [state, dispatch] = useReducer(user_Reducer, user_state)

return (
    <UserContext.Provider value={ [state, dispatch] }>
        { children }
    </UserContext.Provider>
)
}