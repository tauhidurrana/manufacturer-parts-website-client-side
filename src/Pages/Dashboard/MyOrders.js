import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

  const [user] = useAuthState(auth);

  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => res.json())
        .then(data => { setOrders(data) })
    }
  }, [user])

  return (
    <div>
      <h2>My Orders: {orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 &&
              orders.map((order, index) => <tr>
                <th>{index + 1}</th>
                <td>{order.userName}</td>
                <td>{order.productName}</td>
                <td>{order.price}</td>
        <td>
          {(order.price && !order.paid)&&<Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}
          {(order.price && order.paid)&&<span className="text-success">Paid</span>}
        </td>
              </tr>)
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;