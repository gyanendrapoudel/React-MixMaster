
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
import { useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'

export const loader = async ({ params }) => {
  const { id } = params
  const { data } = await axios.get(`${singleCocktailUrl}${id}`)
  return { id, data }
}
const Cocktail = () => {
const { id, data } = useLoaderData()
 const singleDrink = data.drinks[0]
  console.log(data)
 
  return (
    <div>Cocktail</div>
  )
}
export default Cocktail