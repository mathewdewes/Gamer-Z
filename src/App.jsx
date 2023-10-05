
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
// import MarketPlace from './Components/Marketplace';
import Product from './Components/Product';
import {HashRouter, Route, Routes} from "react-router-dom";
import Login from './Components/Login';
import MarketPlace from './Components/Marketplace';
import Account from './Components/Account';
import { useState, useEffect } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import {db, auth} from './firebase-config';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore';


function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState();
  onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser);
  })

  

  const usersReference = collection(db, "users");

  const register= async ()=>{
  
    try{  
      const user = await createUserWithEmailAndPassword(
      auth, 
      registerEmail, 
      registerPassword
      );
      console.log(user);
    } catch (error){
      console.log(error.message);
    }


  }



  const login= async ()=>{

  }

  const logout=async ()=>{
    await signOut(auth);

  }

  const createUser = async () => {
    await addDoc(usersReference, {name: newName, age: Number(newAge)});


  }

  const deleteUser = async (id)=>{
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    
  }

useEffect(()=>{
setUser({
  name:""
  ,email:""
})
},)


  useEffect(()=>{
const getUsers = async () =>{
  const data = await getDocs(usersReference);
  setUsers(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));


}
getUsers()
  }, [])
  return (
    <HashRouter>
      <div className="App">
         <NavBar/>
         <Routes>
          <Route path='/' element={<Login 
          newPassword={(event)=>setRegisterPassword(event.target.value)} 
          newEmail={(event)=>setRegisterEmail(event.target.value)} 
          password={(event)=>setLoginPassword(event.target.value)}
          email={(event)=>setLoginEmail(event.target.value)}   
          create={register}
          currentUser={user.email}
          logOut={logout}/>}
         
       />
        
          
          
          <Route path='/market' element={<div className='listing'>{users.map((user)=>{ return <MarketPlace name={user.name} price={user.age} delete={()=>deleteUser(user.id)}/>})}</div>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/account' element={<Account price={(event)=> {setNewAge(event.target.value)}} createUser={createUser} name={(event)=> {setNewName(event.target.value)}}/>}/>
          {/* <Route path='/account' element={<Account/>}/> */}
         </Routes>
         {/* <MarketPlace/> */}
         {/* <Login/> */}
        
    </div>

    </HashRouter>
    
    
  );
}

export default App;
