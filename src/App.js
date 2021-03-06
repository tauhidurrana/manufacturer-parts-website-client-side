import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAuth from './Pages/Login/RequireAuth';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AllOrders from './Pages/Dashboard/AllOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import Payment from './Pages/Dashboard/Payment';
import NotFound from './Pages/NotFound';
import Blogs from './Pages/Home/Blogs';
import About from './Pages/Home/About';



function App() {
  return (
    <div className="max-w-7xl px-12 mx-auto">
        <Navbar></Navbar>

        <Routes>
          <Route path='/'element={<Home></Home>}></Route>
          <Route path='/login'element={<Login></Login>}></Route>
          <Route path='/signup'element={<SignUp></SignUp>}></Route>
          <Route path='/signup'element={<SignUp></SignUp>}></Route>
          <Route path='/purchase/:ItemID'element={<Purchase></Purchase>}></Route>
          <Route path='/blogs'element={<Blogs></Blogs>}></Route>
          <Route path='/myportfolio'element={<About></About>}></Route>

          {/* nested route start */}
          <Route path='/dashboard'element={ 
            <RequireAuth> <Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path='review' element={<AddReview></AddReview>}></Route>
            <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>
            <Route path='allusers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
            <Route path='allorders' element={<RequireAdmin><AllOrders></AllOrders></RequireAdmin>}></Route>
            <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          </Route>
            {/* nested route end */}

          <Route path='*' element={<NotFound></NotFound>}></Route>

        </Routes>
        <ToastContainer />
    </div>
  );
}

export default App;
