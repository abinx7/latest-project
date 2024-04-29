import './App.css';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Promotions from './components/Promotions';
import Contact from './components/Contact';
import Menu from './components/Menu';
import FeedbackForm from './components/Feedback/feedback';
import Admindashboard from './components/Feedback/Admindashboard';
import Admin from './components/Admin/Admin';

// import '../styles/HomeStyles.css';
function App() {
  return (
    <div className="App">
      
      <Routes>
        &nbsp; &nbsp;
        <Route path="/" element={<Homepage/>} />
      <Route path='/Homepage' element={<Homepage/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>     
      <Route path='/Menu' element={<Menu/>}/>  
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Promotions' element={<Promotions/>}/>
      {/* <Route path='/Contact' element={<Contact/>}/> */}
      <Route path='/Feedback' element={<FeedbackForm/>}/>
      {/* <Route path='/Feedback' element={<View/>}/> */}
      <Route path='/Contact' element={<Admin/>}/>
      </Routes>
    </div>
  )
}
   

export default App;
