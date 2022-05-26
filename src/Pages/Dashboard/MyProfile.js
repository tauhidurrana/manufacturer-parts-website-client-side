import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const email = user.email;

    const onSubmit = data => {
        console.log(data, email);
        const url = `https://protected-thicket-60315.herokuapp.com/user/update/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount || result.matchedCount > 0) {
                    toast.success('Profile update successfully !');
                }
            })

    }
    return (
        <div className='grid grid-cols-2 gap-5'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Hello, {user.displayName} !</h2>
                    <p className=''>Your email : {user.email}</p>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl ">
            <div className="card-body">
                <h2 className="card-title text-2xl justify-center items-center">Update Profile</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-2 justify-items-center mt-3'>
                    <input className="input input-bordered w-full max-w-xs" placeholder='Adress' {...register("adress")} />
                    <input className="input input-bordered w-full max-w-xs" placeholder='Phone Number' type="number" {...register("phone")} />
                    <input className="input input-bordered w-full max-w-xs" placeholder='LinkedIn Profile Link' type="text" {...register("linkedinID")} />
                    <input type="submit" value="Update" placeholder="Type here" className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full max-w-xs" />
                </form>
            </div>
        </div>
        </div>
    );
};

export default MyProfile;