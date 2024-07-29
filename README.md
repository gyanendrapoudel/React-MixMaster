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

