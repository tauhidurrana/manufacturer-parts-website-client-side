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
        <div>
            <h2>Purchase Product: {product.name}</h2>
        </div>
    );
};

export default Purchase;