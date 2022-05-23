import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

const Purchase = () => {
    const { ItemID } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/products/${ItemID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product]);

    const handleAddStock = event => {
        event.preventDefault();
    }

    const handleBooking = event => {
        event.preventDefault();
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className=' mt-10 mb-10'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{product.name}</h2>
                        <p>Description: {product.description}</p>
                    </div>
                    <figure><img src={product.img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <p>Available Quantity: {product.availableQuantity}</p>
                        <p>Minimum Order Quantity: {product.minQuantity}</p>
                        <p>Price: BDT {product.price}</p>
                    </div>
                    <div>
                        <form onSubmit={handleAddStock}>
                            <input type="number" name="stock" placeholder='Add quantity' class="input input-bordered input-accent w-full max-w-xs" />
                            <button class="btn">Button</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Orders booking form */}
            
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Order Information</h2>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-3'>
                        <input type="text" name='productName' disabled value={product?.name || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='price' disabled value={product?.price || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='userName' disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Add Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder='Add Address' class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Confirm Order" placeholder="Type here" class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Purchase;