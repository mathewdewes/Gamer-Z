import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { Query, where, collection, query } from "firebase/firestore";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        props.setUser({
          email: email,
          userCredential: userCredential,

        });

        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <p>Please enter your email and password</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
          id="email"
          name="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          id="password"
          name="password"
        />
        <button>Login</button>
        <button type="button">
          <Link to="/register">
            <p>Register</p>
          </Link>
        </button>
        <div></div>
      </form>
    </div>
  );
}
