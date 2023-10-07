import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import Login from "./Components/Login";
import MarketPlace from "./Components/Marketplace";
import Account from "./Components/Account";
import Register from "./Components/Register";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { db, auth } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    email: "",
    userCredential: null,
  });
  const [userDetails, setUserDetails] = useState({
    name: "",
    userCredential: null,
  });

  const handleLogout = () => {
    signOut(user);
  };
  useEffect(() => {
    const listen = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser({
          email: user.email,

          userCredential: user.uid,
        });

        const getUserDetails = async () => {
          const accountRef = collection(db, "Account");

          const q = query(accountRef, where("uid", "==", user.uid));

          const querySnapShot = getDocs(q);

          return querySnapShot;
        };

        const result = await getUserDetails();

        result.forEach((res) => {
          return setUserDetails({
            name: res.data().name,

            userCredential: res.data().uid,
          });
        });
      } else {
        setUser({
          email: "",

          userCredential: null,
        });
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar handleLogout={handleLogout} />
        <Routes>
          <Route
            path="/login"
            element={
              <Login setUserDetails={setUserDetails} setUser={setUser} />
            }
          />
          <Route path="/" element={<MarketPlace user={user} />} />
          <Route path="/product" element={<Product />} />
          <Route
            path="/account"
            element={<Account userDetails={userDetails} />}
          />
          <Route
            path="/register"
            element={
              <Register setUserDetails={setUserDetails} setUser={setUser} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
