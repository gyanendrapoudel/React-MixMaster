import axios from "axios"
import { useLoaderData } from "react-router-dom"
import Cocktail from "./Cocktail"
import CocktailList from "../componets/CocktailList"

export const loader = async ()=>{
  const searchStr =''
 const response = await axios(
   `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchStr}`
 )
  return {drinks:response.data.drinks,searchStr }
}

const Landing = () => {
 
   const {drinks, searchStr} = useLoaderData()
   
  return (
    <>
      <CocktailList drinks={drinks}/>

    </>
  )
}
export default Landing




/* 

import axios from "axios"
import { useLoaderData } from "react-router-dom"

const apiEP ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export const loader = async()=>{
  const searchStr = ''
  const response = await axios(apiEP+searchStr)
  return {drinks:response.data.drinks, searchStr}
  
}
const Landing = () => {
  const {drinks, searchStr}= useLoaderData()
  console.log(drinks, searchStr)
  return (
    <div>Landing</div>
  )
}
export default Landing



*/