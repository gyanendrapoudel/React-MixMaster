
import { useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const singleCocktailQuery = (id)=>{
  return {
    queryKey: ['cocktail', id ],
    queryFn: async ()=> {
     const {data}= await axios.get(`${singleCocktailUrl}${id}`)
     return data
    }
  }
}
export const loader = (queryClient)=>async ({ params }) => {
  
  const { id } = params
  // const { data } = await axios.get(`${singleCocktailUrl}${id}`)
  // return { id, data }

   await queryClient.ensureQueryData(singleCocktailQuery(id))
   return { id }
}

const Cocktail = () => {
const { id} = useLoaderData()
const { data } = useQuery(singleCocktailQuery(id))
if(!data){
  return (
    <>
      <div className="pages error-page">
        <h4
          style={{ fontSize: '2rem', color: '#EB5B00', marginBottom: '2rem' }}
        >
          Page not Found !
        </h4>
        <Link to="/" className="nav-item bg-danger text-light p-2 rounded" >
          Go back to Home
        </Link>
      </div>
    </>
  )
}
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
         <p className="my-4">
           <span className="py-2 px-3 bg-success text-light rounded   fs-5">
             Name :{' '}
           </span>
           <span className="ms-2 " style={{fontWeight:"600"}}>{name}</span>
         </p>
         <p className="my-4">
           <span className="py-2 px-3 bg-success text-light rounded fs-5">
             Category :{' '}
           </span>
           <span className="ms-2 " style={{fontWeight:"600"}}>{category}</span>
         </p>
         <p className="my-4">
           <span className="py-2 px-3 bg-success text-light rounded  fs-5">
             Glass :{' '}
           </span>
           <span className="ms-2 " style={{fontWeight:"600"}}>{glass}</span>
         </p>
         <p className="my-4">
           <span className="py-2 px-3 bg-success text-light rounded  fs-5">
             Ingredients :{' '}
           </span>
           <span className="ms-2 " style={{fontWeight:"600"}}>
             {ingredients.map((item, i) => {
               if (i < ingredients.length - 1) {
                 item = `${item}, `
               }
               return item
             })}
           </span>
         </p>
         <p className="my-4">
           <span className="py-2 px-3 bg-success text-light rounded  fs-5">
             Instructions :{' '}
           </span>
           <span className="ms-2 " style={{fontWeight:"600"}}>
            {instructions}
           </span>
         </p>
       </div>
     </div>
   </>
 )
}
export default Cocktail