import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./products.css";

function Products() {
  const [file, setFile] = useState(null);
  const [proname, setproname] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const navigate = useNavigate()

 
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newPost = {
      name: proname,
      quantity,
      price,
      proImage: 'https://www.shutterstock.com/image-vector/softener-chemical-bottle-icon-flat-600w-1986015572.jpg'
    }

    try {
      const res = await axios.post(`http://localhost:5000/api/product`, newPost)
      res.data && navigate('/')
    }
    catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <Navbar />
      <div className="products">
        <div className="productsWrapper">
          <form onSubmit = {handleSubmit} className="productsForm">
            <div className="productsFormImg">
              {/* {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt=""
                  className="productsImg"
                />
              )}
              <label htmlFor="fileInput">Add Image</label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
                required
              /> */}
              <button className="productsTitle" type = 'submit'>
                Create Product
              </button>
            </div>
            <div className="productsFormDetails">
              <div className="productsFormItems">
                <label>Name</label>
                <input
                  type="text"
                  onChange={(e) => setproname(e.target.value)}
                  className="productsFormInput"
                  required
                />
              </div>
              <div className="productsFormItems">
                <label>Quantity</label>
                <input
                  type="number"
                  onChange={(e) => setQuantity(e.target.value)}
                  className="productsFormInput"
                  required
                />
              </div>
              <div className="productsFormItems">
                <label>Price</label>
                <input
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                  className="productsFormInput"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Products;
