import { Link } from "react-router-dom"

const SingleCockTail = ({name, image, id, info, glass}) => {
    
  return (
  
  
    <>
      
        <div className="card ">
          <img src={image} className="card-img-top" alt={name} style={{height:"250px", maxWidth:"100%", objectFit:"cover"}} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{info}</p>
            <Link to={`/cocktail/${id}`} className="btn btn-primary">
              Details
            </Link>
          
        </div>
      </div>
    </>
  )
}
export default SingleCockTail