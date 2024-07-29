
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { About, Cocktail, HomeLayout,Landing , Newsletter,Error, Footer} from './pages'

function App() {

 return (
   <div>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomeLayout />}>
           <Route index element={<Landing />} />
           <Route path="/cocktail" element={<Cocktail />} />
           <Route path="/about" element={<About />} />
           <Route path="/newsletter" element={<Newsletter />} />
           <Route path="/footer" element={<Footer />} />
         </Route>
         <Route path="*" element={<Error />} />
       </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App
