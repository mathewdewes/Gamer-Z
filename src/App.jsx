
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Product from './Components/Product';
import {BrowserRouter, Route, Routes, redirect} from "react-router-dom";
import Login from './Components/Login';
import MarketPlace from './Components/Marketplace';
import Account from './Components/Account';
import Register from './Components/Register';
import { useState, useEffect } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import {db, auth} from './firebase-config';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const [user, setUser] = useState({
  name:"",
  balance:"",
  gamesOwned:"",
  email:"",
  userCredential:null

});

const handleLogout=()=>{
  setUser({  name:"",
  balance:"",
  gamesOwned:"",
  email:"",
  userCredential:null})
}


 
  return (
    <BrowserRouter>
      <div className="App">
         <NavBar handleLogout={handleLogout}/>
         <Routes>
          <Route path='/login' element={<Login setUser={setUser}/>}/>
          <Route path='/' element={<MarketPlace/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/register' element={<Register setUser={setUser}/>}/>
         </Routes>
  
    </div>
<Footer/>
    </BrowserRouter>
    
    
  );
}

export default App;
