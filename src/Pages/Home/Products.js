import React, { useEffect, useState } from 'react';
import SingleProducts from './SingleProducts';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div>
            <h2 className='text-xl font-bold text-center'>Our Products</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20'>
                {
                    products.map(product=><SingleProducts
                    key={product._id}
                    product = {product}
                    ></SingleProducts>)
                }
            </div>
        </div>
    );
};

export default Products;