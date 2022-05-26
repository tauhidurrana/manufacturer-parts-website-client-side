import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Purchase = () => {
    const { ItemID } = useParams();
    const [product, setProduct] = useState({});
    const [orderQty, setOrderQty] = useState(0);
    const [user] = useAuthState(auth);


    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/products/${ItemID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setOrderQty(data.minQuantity);
            })
    }, [ItemID]);



    // increase Quantity
    const increaseQty = () => {
        setOrderQty(parseInt(orderQty) + 1);

    }

    // decrease Quantity
    const decreaseQty = () => {
        if (orderQty > product.minQuantity) {
            setOrderQty(parseInt(orderQty) - 1);
        }

    }
    // price calculation
    let price = product.price;
    let totalPrice;
    totalPrice = price * orderQty;

    const handleBooking = event => {
        event.preventDefault();

        const order = {
            productName: product.name,
            price: product.price,
            userName: user.displayName,
            email: user.email,
            phone: event.target.phone.value,
            adress: event.target.address.value,
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Order submitted, Plz make payment`)
                }
                else {
                    toast.error(`Plz try again`)
                }
                setProduct(null);
            })
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className=' mt-5 mb-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{product?.name}</h2>
                        <p>Description: {product?.description}</p>
                        <p>Price: $ {product?.price} / pcs</p>
                        <p>Available Quantity: {product?.availableQuantity}</p>
                        <p>Minimum Order: {product?.minQuantity}</p>
                        <p>Total Price: {totalPrice}</p>
                        <p>Enter Quantity:</p>
                        <div className='flex justify-center items-center '>
                            <button onClick={increaseQty} className="btn btn-secondary mr-2 text-white font-bold text-lg">+</button>
                            {orderQty}
                            <button onClick={decreaseQty} className="btn btn-secondary ml-2 text-white font-bold text-lg">-</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Orders booking form */}

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Order Information</h2>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center mt-3'>
                        <input type="text" name='productName' disabled value={product?.name || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='price' disabled value={totalPrice || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='userName' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Add Phone Number" required className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder='Add Address' required className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Place Order" placeholder="Type here" className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full max-w-xs" />
                    </form>
                    <div>
                        <button  onClick={() => navigate('/dashboard')} className="btn flex justify-center">Click for payment</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Purchase;




// useEffect(() => {
//     const url = `http://localhost:5000/products/${ItemID}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => setProduct(data))
// }, [product]);