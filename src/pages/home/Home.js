import axios from 'axios'
import { useEffect, useState } from 'react'
import DisplayProducts from '../../components/displayProducts/DisplayProducts'
import Navbar from '../../components/navbar/Navbar'
import './home.css'

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/product`)
        setProducts(res.data)
      }
      catch (err) {
        console.log(err)
      }
    }

    fetchProducts()
  }, [])

  return (
    <>
      <Navbar />
      <DisplayProducts products = {products} />
    </>
  )
}

export default Home