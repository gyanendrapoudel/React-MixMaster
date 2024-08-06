import axios from "axios"
import { useLoaderData, } from "react-router-dom"
import Cocktail from "./Cocktail"
import CocktailList from "../componets/CocktailList"
import SearchForm from "../componets/SearchForm"
import { useQuery } from "@tanstack/react-query"

const searchCocktailsQuery = (searchStr)=>{
  return {
    queryKey:['search',searchStr||"all"],
    queryFn:async ()=>{
       const response = await axios(
         `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchStr}`
       )
       return response.data.drinks
    }
  }
}

export const loader =(queryClient) => async ({request})=>{
  const url = new URL(request.url)
  console.log(url, request.url, url.searchParams.get("search"),url===request.url)
  const searchStr = url.searchParams.get('search')||'';
  await queryClient.ensureQueryData(searchCocktailsQuery(searchStr))
//  const response = await axios(
//    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchStr}`
//  )
  // return { drinks: response.data.drinks, searchStr }
  return {searchStr }
}


const Landing = () => {

 
  //  const { drinks, searchStr } = useLoaderData()
   const { searchStr} = useLoaderData()
   const {data:drinks} = useQuery(searchCocktailsQuery(searchStr))
   
  return (
    <>
      <SearchForm str = {searchStr }/>
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