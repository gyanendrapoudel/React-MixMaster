import SingleCockTail from "./SingleCockTail"

const CocktailList = ({drinks}) => {
 const formattedDrinks = drinks.map((item)=>{
     const {idDrink:id, strDrink:name, strDrinkThumb:image, strAlcoholic:info, strGlass:glass } = item
     return {id,name, image,info, glass}
 })
 
  return (
    <div>
        {formattedDrinks.map((item)=>{
            return <SingleCockTail key={ item.id} {...item}/>
        })}
    </div>
  )
}
export default CocktailList