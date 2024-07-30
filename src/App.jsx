
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import { About, Cocktail, HomeLayout,Landing , Newsletter,Error, Footer} from './pages'
import { loader as landingLoader } from './pages/Landing'
import { loader as cocktailLoader } from './pages/Cocktail'
function App() {
  
 const router = createBrowserRouter([
   {
     path: '/',
     element: <HomeLayout />,
     errorElement: <Error />,
     children: [
       {
         index: true,
         element: <Landing />,
         loader: landingLoader,
       },
       {
         path: '/cocktail/:id',
         loader:cocktailLoader,
         element: <Cocktail />,
       },
       {
         path: '/about',
         element: <About />,
       },
       {
         path: '/newsletter',
         element: <Newsletter />,
       },
       {
         path: '/footer',
         element: <Footer />,
       },
     ],
   },
 ])
 return (
  
   <div>
    <RouterProvider router={router} />
   </div>
 )
}

export default App
