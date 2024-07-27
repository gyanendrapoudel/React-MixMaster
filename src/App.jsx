
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Service from './Pages/service'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Dashboard from './Pages/Dashboard'

function App() {

 return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Dashboard/>}>
        <Route index element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element = {<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
     
   </div>
 )
}

export default App
