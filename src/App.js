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
          <Route path='/dashboard'element={ 
            <RequireAuth> <Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path='review' element={<AddReview></AddReview>}></Route>
            <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
            <Route path='allusers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          </Route>
          
        </Routes>
        <ToastContainer />
    </div>
  );
}

export default App;
