
import { useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='


export const loader = async ({ params }) => {
  const { id } = params
  const { data } = await axios.get(`${singleCocktailUrl}${id}`)
  return { id, data }
}
const Cocktail = () => {
const { id, data } = useLoaderData()

 const singleDrink = data.drinks[0]
 let ingredients = []
 for(let i=1; i<16;i++){
    
       singleDrink[`strIngredient${i}`] &&
          ingredients.push(singleDrink[`strIngredient${i}`])
        
     
 }
 
 const {strGlass:glass, strCategory:category, strDrink:name,strAlcoholic:info,strInstructions:instructions, strDrinkThumb:img } = singleDrink
 return (
   <>
     <div className="text-center m-4">
       <Link to="/" className="btn btn-success mb-2">
         Back To Home
       </Link>
       <h4 className="m-3">{name}</h4>
     </div>
     <div className="cocktail-details  fs-5 ">
       <img src={img} alt="" className="rounded" />
       <div className="cocktail-info">
         <p className='my-4'>
           <span className="py-2 px-3 bg-success text-light rounded   fs-5">Name : </span>
           <span className="ms-2 fw-bold">{name}</span>
         </p>
         <p className='my-4'>
           <span className="py-2 px-3 bg-success text-light rounded fs-5">
             Category :{' '}
           </span>
           <span className="ms-2 fw-bold">{category}</span>
         </p>
         <p className='my-4'>
           <span className="py-2 px-3 bg-success text-light rounded  fs-5">Glass : </span>
           <span className="ms-2 fw-bold">{glass}</span>
         </p>
         <p className='my-4'>
           <span className="py-2 px-3 bg-success text-light rounded  fs-5">Ingredients : </span>
           <span className="ms-2 fw-bold">{name}</span>
         </p>
         <p className='my-4'>
           <span className="py-2 px-3 bg-success text-light rounded  fs-5">Instructions : </span>
           <span className="ms-2 fw-bold">
             {ingredients.map((item) => `${item} `)}
           </span>
         </p>
       </div>
     </div>
   </>
 )
}
export default Cocktail