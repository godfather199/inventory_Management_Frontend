import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './displayproduct.css'

function DisplayProduct({product}) {
  const navigate = useNavigate()

  const handleDelete = async () => {
    console.log('Inside function')
    try {
      const res = await axios.delete(`http://localhost:5000/api/product/${product._id}`)

       window.location.reload()
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="dpContainer">
        <div className="dpWrapper">
            <img src= {product.proImage} alt="" className="dpImg" />
            <span className="dpTitle">{product.name}</span>
            <span className="dpQuantity"><b style = {{fontSize: '18px', color: 'red'}}>Quantity -</b> {product.quantity}</span>
            <span className="dpPrice"><b style = {{fontSize: '18px', color: 'red'}}>Price - </b>{product.price}</span>
            <button className="dpDeleteBtn" onClick = {handleDelete}>DELETE</button>
        </div>
    </div>
  )
}

export default DisplayProduct