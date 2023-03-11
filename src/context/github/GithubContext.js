import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()

// create Provider component or <GithubContext.Provider />
export const GithubProvider = ({children}) => {
  // const [users, setUsers] = useState([]) 
  // const [loading, setLoading] = useState(true) // when get data, set loading to false

  const initialState = {
    users: [],      //array
    user: {},       //object
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // // Clear user from state
  // const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

  // // Set loading
  // const setLoading = () => dispatch({type: 'SET_LOADING'})

  // any values that you want to pass down to other component, put in the object into 'value' attribute
  return <GithubContext.Provider value={{
    ...state,
    dispatch,
    // users: state.users,
    // loading: state.loading,
    // user: state.user,
    // repos: state.repos,
    // searchUsers
    // getSingleUser,
    // clearUsers,
    // getRepos
  }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext
