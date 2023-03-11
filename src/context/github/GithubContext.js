import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

// create Provider component or <GithubContext.Provider />
export const GithubProvider = ({children}) => {
  // const [users, setUsers] = useState([]) 
  // const [loading, setLoading] = useState(true) // when get data, set loading to false

  const initialState = {
    users: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // get search results
  const searchUsers = async(text) => {
    setLoading()

    const params = new URLSearchParams({
      q: text
    })

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })

    const {items} = await res.json() // return an array of 30 users

    // console.log(data)
    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  // Clear user from state
  const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

  // Set loading
  const setLoading = () => dispatch({type: 'SET_LOADING'})

  // any values that you want to pass down to other component, put in the object into 'value' attribute
  return <GithubContext.Provider value={{
    users: state.users,
    loading: state.loading,
    searchUsers,
    clearUsers
  }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext
