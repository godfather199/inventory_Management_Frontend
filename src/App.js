import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from './pages/products/Products'
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Profile from './pages/profile/Profile'
import Home from './pages/home/Home'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/profile' element = {<Profile />} />
        <Route path = '/products' element = {<Products />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/register' element = {<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App