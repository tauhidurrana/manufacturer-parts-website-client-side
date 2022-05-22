import React from 'react';

const SingleProducts = ({ product }) => {
    const { name, price, availableQuantity, minQuantity, img, description } = product;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Minimum Quantity: {minQuantity}</p>
                <p>Description: {description}</p>
                <p>Price: BDT {price} /unit</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;