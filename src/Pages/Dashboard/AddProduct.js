import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/products';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <div className="card-body">
                <h2 className="card-title text-2xl text-slate-900 uppercase justify-center items-center">Add a Product</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-2 justify-items-center mt-3'>
                    <input className="input input-bordered w-full max-w-xs" placeholder='Product Name' {...register("name")} />
                    <input className="input input-bordered w-full max-w-xs" placeholder='Description' {...register("description")} />
                    <input className="input input-bordered w-full max-w-xs" placeholder='Price' type="number" {...register("price")} />
                    <input className="input input-bordered w-full max-w-xs" placeholder='Available Quantity' type="number" {...register("availableQuantity")} />
                    <input className="input input-bordered w-full max-w-xs" placeholder='Min Quantity' type="number" {...register("minQuantity")} />
                    <input className="input input-bordered w-full max-w-xs" placeholder='Photo URL' {...register("img")} />

                    <input type="submit" value="Add Product" placeholder="Type here" className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;