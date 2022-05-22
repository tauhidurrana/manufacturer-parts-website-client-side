import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { ItemID } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${ItemID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product]);
    return (
        <div className=''>
            <div className='flex justify-center items-center mt-10'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{product.name}</h2>
                    </div>
                    <figure><img src={product.img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;