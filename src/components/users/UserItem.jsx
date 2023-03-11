import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// we want user login name and avatar url
function UserItem({user}) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className="card-body flex-row items-center space-x-4">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={user.avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{user.login}</h2>
          <Link 
          className='text-base-content text-opacity-70' 
          to={`/user/${user.login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
