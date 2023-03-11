import PropTypes from 'prop-types'
import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa'

function RepoItem({ repo }) {
  //destructure 
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo
  
  return (
    <div className='mb-2 rounded-md card bg-base-200'>
      <div className='card-body'>
        <h3 className='text-xl font-semibold hover:underline underline-offset-4 hover:text-gray-500'>
          <a href={html_url}>
            <FaLink className='inline mr-1' /> {name}
          </a>
        </h3>
        <p className='mb-2'>{description}</p>
        <div>
          <div className='mr-2 badge badge-lg'>
            <FaEye className='mr-2' /> {watchers_count}
          </div>
          <div className='mr-2 badge badge-lg'>
            <FaStar className='mr-2' /> {stargazers_count}
          </div>
          <div className='mr-2 badge badge-lg'>
            <FaInfo className='mr-2' /> {open_issues}
          </div>
          <div className='mr-2 badge badge-lg'>
            <FaUtensils className='mr-2' /> {forks}
          </div>
        </div>
      </div>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem
