import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import Account from "./Account";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegistration = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        props.setUser({
          email: email,
          userCredential: userCredential.user.uid,
        });
        try {
          const count = addDoc(collection(db, "Account"), {
            name: name,
            balance: 0,
            uid: userCredential.user.uid,
          });
          props.setUserDetails({
            name: name,
            balance: 0,
            uid: userCredential.user.uid,

          })
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="register">
      <form action="POST">
        <h1>Register</h1>
        <label for="email">Enter email and new password</label>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          type="text"
          id="Name"
          name="Name"
        />
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
        <input
          placeholder="Retype Password"
          type="password"
          id="password2"
          name="password2"
        />
        <button onClick={(e) => handleRegistration(e)} type="submit">
          Create user
        </button>
        <div></div>
      </form>
    </div>
  );
}
