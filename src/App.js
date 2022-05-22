import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';


function App() {
  return (
    <div className="App">
        <Navbar></Navbar>

        <Routes>
          <Route path='/'element={<Home></Home>}></Route>
          <Route path='/login'element={<Login></Login>}></Route>
          <Route path='/signup'element={<SignUp></SignUp>}></Route>
        </Routes>
    </div>
  );
}

export default App;
