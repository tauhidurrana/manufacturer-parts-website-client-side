import React, { useEffect, useState } from 'react';
import SingleProducts from './SingleProducts';


const Products = () => {
    const [products, setProducts] = useState([]);
    const sliceProducts = products.slice(0, 6);

    useEffect(() => {
        fetch('https://protected-thicket-60315.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-orange-500 uppercase'>Our Products</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10'>
                {
                    sliceProducts.map(product => <SingleProducts
                        key={product._id}
                        product={product}
                    ></SingleProducts>)
                }
            </div>
            <div className='flex justify-center mb-10'>
                <button class="btn btn-xl">See All Products</button>
            </div>

        </div>
    );
};

export default Products;