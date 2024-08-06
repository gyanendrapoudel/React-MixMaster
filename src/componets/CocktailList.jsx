import { useState } from "react"
import SingleCockTail from "./SingleCockTail"

const CocktailList = ({drinks}) => {
 const formattedDrinks = drinks.map((item)=>{
     const {idDrink:id, strDrink:name, strDrinkThumb:image, strAlcoholic:info, strGlass:glass } = item
     return {id,name, image,info, glass}
 })
const drinkPerPage = 8
const numberOfPage = Math.ceil(formattedDrinks.length/10)
const newDrinksList = Array.from({length:numberOfPage},(_,index)=>{
  const start = index*drinkPerPage;
  return formattedDrinks.slice(start,start+drinkPerPage)
})
const [page, setPage] = useState(0)
console.log(newDrinksList)
  return (
    <>
      <div className="cocktails">
        
          {newDrinksList[page].map((item) => {
            return <SingleCockTail key={item.id} {...item} />
          })}
          </div>
          <div className="d-flex justify-content-center gap-2 mt-5">
          
            {newDrinksList.map((item, i) => {
              return (
                <button className={page===i?"btn btn-success":"btn btn-secondary"} key={i} onClick={() => setPage(i)}>
                  {i + 1}
                </button>
              )
            })}
          </div>
      
    </>

    // <div className="cocktails">
    //   {formattedDrinks.map((item) => {
    //     return <SingleCockTail key={item.id} {...item} />
    //   })}
    // </div>
  )
}
export default CocktailList