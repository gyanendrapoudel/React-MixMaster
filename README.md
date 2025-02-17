### Install react-router-dom
>`npm i react-router-dom@6.11.2`

App.jsx
`import { BrowserRouter, Route, Routes } from 'react-router-dom'`

### loader
This loader function is used to fetch data before rendering the route's component, ensuring that the component has all the necessary data when it mounts.

### TheCocktailDB API
https://www.thecocktaildb.com
Search cocktail by name
www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

List all cocktails by first letter
www.thecocktaildb.com/api/json/v1/1/search.php?f=a

Search ingredient by name
www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

Lookup full cocktail details by id
www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

### useNavigation
In React Router, useNavigation is a hook that allows you to interact with the navigation system of your application programmatically. It provides methods and properties to navigate between routes and manage navigation state. This hook is useful for performing navigation actions within functional components.


### Cocktail.jsx using loader to get id send from detail btn from home page. needed in cocktail route

```js
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { id, data };
};


const Cocktail = () => {
  const { id, data } = useLoaderData();

  const singleDrink = data.drinks[0];
  return (
    <>
  
    <>
  )
}
  ```
  in App.jsx
   
   ```js
import { loader as cocktailLoader } from './pages/Cocktail'

   {
         path: '/cocktail/:id',
         loader:cocktailLoader,
         element: <Cocktail />,
     },

### Install react toastify library
`npm i react-toastify
`
 in app.jsx 
 ```js 
 import { ToastContainer } from 'react-toastify'
 import 'react-toastify/dist/ReactToastify.css' 

   <ToastContainer position="top-center" autoClose={1000} />
```
autoClose is time to display toast, 1000 means 1 sec

### action
Route actions are the "writes" to route loader "reads". They provide a way for apps to perform data mutations with simple HTML and HTTP semantics while React Router abstracts away the complexity of asynchronous UI and revalidation. This gives you the simple mental model of HTML + HTTP (where the browser handles the asynchrony and revalidation) with the behavior and UX capabilities of modern SPAs.


### redirect
We can only use in loader and action in react-router-dom.

### node server on port 9000,  http://localhost:9000

### const url = new URL(request.url);
This line of code creates a new URL object using the URL constructor. The URL object represents a URL and provides methods and properties for working with URLs. In this case, the request.url is passed as an argument to the URL constructor to create a new URL object called url.

### The request.url

The request.url is an input parameter representing the URL of an incoming HTTP request. By creating a URL object from the provided URL, you can easily extract specific components and perform operations on it.


### The get() method of the URLSearchParams
The get() method of the URLSearchParams object retrieves the value of a specific parameter by passing its name as an argument. In this case, 'search' is passed as the parameter name. If the search parameter exists in the URL's query string, its value will be assigned to the searchTerm variable. If the search parameter is not present or its value is empty, the expression '' (an empty string) is assigned to searchTerm using the logical OR operator (||).