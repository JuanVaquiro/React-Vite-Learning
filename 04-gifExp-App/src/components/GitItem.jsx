
const GitItem = ({ title, url, id}) => {
   
    // console.log({title, url, id})
    return (
    <div className="item-card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

export default GitItem