
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
// import MarketPlace from './Components/Marketplace';
import Product from './Components/Product';
import {HashRouter, Route, Routes} from "react-router-dom";
import Login from './Components/Login';
import MarketPlace from './Components/Marketplace';
import Account from './Components/Account';
import Register from './Components/Register';
import { useState, useEffect } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import {db, auth} from './firebase-config';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore';


function App() {
 
  return (
    <HashRouter>
      <div className="App">
         <NavBar/>
         <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/market' element={<MarketPlace/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/register' element={<Register/>}/>
         </Routes>
         {/* <MarketPlace/> */}
         {/* <Login/> */}
        
    </div>
<Footer/>
    </HashRouter>
    
    
  );
}

export default App;
