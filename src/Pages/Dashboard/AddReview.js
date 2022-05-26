import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);


    const onSubmit = data => {
        console.log(data);
        const url = 'https://protected-thicket-60315.herokuapp.com/reviews';
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
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Please add your Review</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-2 justify- items-center mt-3'>
                    {/* <input type="text" name='userName' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" {...register("name")} /> */}
                    <textarea className="textarea textarea-info" placeholder="Your Review" {...register("description")}></textarea>
                    <label for="about">Ratings</label>
                    <input className="input input-info input-bordered w-full max-w-xs" placeholder='Enter 1 to 5 for ratings' type="number" {...register("ratings")} />
                    <input type="submit" value="Add Product" placeholder="Type here" className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;