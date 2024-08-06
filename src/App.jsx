
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import { About, Cocktail, HomeLayout,Landing , Newsletter,Error,} from './pages'
import { loader as landingLoader } from './pages/Landing'
import { loader as cocktailLoader } from './pages/Cocktail'
import {action as newsletterAction} from './pages/Newsletter'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000*60*5,
    }
  }
})

QueryClientProvider

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
         loader: cocktailLoader,
         element: <Cocktail />,
       },
       {
         path: '/about',
         element: <About />,
       },
       {
         path: '/newsletter',
         action: newsletterAction,
         element: <Newsletter />,
       },
     ],
   },
 ])
 return (
   <div>
     <QueryClientProvider client={queryClient}>
       <ToastContainer position="top-center" autoClose={1000} />
       <RouterProvider router={router} />

     </QueryClientProvider>
   </div>
 )
}

export default App
