import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './modules/Login/Login';
import Signup from './modules/Signup/Signup';
import Home from './modules/Home/Home';
import Features from './modules/Features/Features';
import Products from './modules/Products/Products';
import Team from './modules/Team/Team';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './modules/PrivateRoute/PrivateRoute';

// private dashboard implementation
import Dashboard from './modules/Dashboard/Dashboard';
import Verify from './modules/Verify/Verify';
import Payment from './modules/Payment/Payment';
import Application from './modules/Application/Application';
import CheckPoint from './modules/CheckPoint/CheckPoint';






const App = () => {
  // const [count, setCount] = useState(0)
  const isLoggedIn = localStorage.getItem('userToken'); // Replace with your JWT storage


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Application' element={<Application/>}/>
        <Route path='/Checkpoint' element={<CheckPoint/>}/>
        <Route path='/Verify' element={<Verify/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route
                path="/Dashboard"
                element={<PrivateRoute isLoggedIn={isLoggedIn}>
                    <Dashboard/>
                </PrivateRoute>}
            />
                {/* Individual protected routes wrapped with PrivateRoute */}
        <Route
                path="/dashboard/applications"
                element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                        <Application/>
                    </PrivateRoute>
                }
            />
        <Route
                path="/dashboard/checkpoint"
                element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                        <CheckPoint/>
                    </PrivateRoute>
                }
        />
        <Route
                path="/dashboard/verify"
                element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                        <Verify/>
                    </PrivateRoute>
                }
            />
        <Route
                path="/dashboard/payment"
                element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                        <Payment />
                    </PrivateRoute>
                }
            />
      </Routes>
    </Router>
  )
}

export default App
