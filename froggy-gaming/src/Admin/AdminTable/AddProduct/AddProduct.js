import React, { useState } from 'react';
import "./AddProduct.css";




function AddProduct(){

    const storageProducts = localStorage.getItem('product')

    const[product, setproduct] = useState('')
    const[products,setproducts] = useState([])
    
    const handleSubmit = () => {
        setproducts(prev => {
            const newProducts = [...prev, product]


            const jsonProducts = JSON.stringify(newProducts)

            localStorage.setItem('products', jsonProducts)
            return newProducts
         })
        setproduct('')
    }
    return (
        <div className="AddProduct">
            <p>Thêm sản phẩm </p>
            <div className="addproduct-submit">

                <input value={product}  
                 onChange={e =>setproduct(e.target.value)}
                 />
                <button onClick={handleSubmit}>ADD</button>
            </div>
            <div className="addproduct-table">
                    <div className="admin-product">
                        
                        {products.map((product, index) =>(
                            <p key={index} > {product} 
                             <button>Update</button>
                             <button>Delete</button>
                             </p>
                            
                        ) )}
                        
                    </div>
            </div>

        </div>
    );
};


    

export default AddProduct;