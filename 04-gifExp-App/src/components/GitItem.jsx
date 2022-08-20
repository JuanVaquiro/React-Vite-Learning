import PropTypes  from "prop-types"

const GitItem = ({ title, url, id }) => {
   
    // console.log({title, url, id})
    return (
    <div className="item-card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

GitItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GitItem