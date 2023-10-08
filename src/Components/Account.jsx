import React, { useEffect, useState } from "react";
import testImage from "../images/matt.JPG";


import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  deleteDoc
} from "firebase/firestore";

import { db } from "../firebase-config";

export default function Account(props) {
  const [listings, setListings] = useState([]);

  const handleDelete = async (id)=>{
    const listingRef = doc(db, "Items", id)
    const deletedListing = await deleteDoc(listingRef)
    setListings(prevListings=>prevListings.filter(item=>item.id !==id))
  }

  const handleEdit = async (name, price, id) => {
    const listingRef = doc(db, "Items", id);
    const listingReq = await updateDoc(listingRef, {
      name: name,
      price: price,
    });

    const updatedListings = listings.map((listing) => {
      if (listing.id == id) {
        return {
          ...listing,
          name: name,
          price: price,
        };
      }
      return listing;
    });
    setListings(updatedListings);
  };

  useEffect(() => {
    async function getUserLisitngs() {
      const accountRef = collection(db, "Items");
      const q = query(
        accountRef,
        where("user_id", "==", props.userDetails.userCredential)
      );

      const querySnapShot = await getDocs(q);

      return querySnapShot.docs.map((doc) => ({
        id: doc.id,

        ...doc.data(),
      }));
    }

    getUserLisitngs().then((listings) => {
      setListings(listings);
    });
  }, []);

  return (
    <div>
      <h1 className="pageHeading">Account</h1>
        <div className="account">
        <div className="profile">
          <img src={testImage} alt="" />
           <div>
            <h2>{props.userDetails.name}</h2>
            <p>Balance: 2</p>
          </div>
          <div>
            <p>
              Bio: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dolorum, consequatur!
            </p>
          </div>
        </div>
        <div></div>
        <h1>My Listings:</h1>
        <div className="grid">
          {listings && listings.length > 0 ? (
            listings.map((listing) => {
              return <Listing handleDelete={handleDelete} handleEdit={handleEdit} listing={listing} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

const Listing = (props) => {
  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const [isEdit, setIsEdit] = useState(false);

  if (!isEdit) {
    return (
      <div className="grid__item">
        <h2>{props.listing ? props.listing.name : ""}</h2>

        <p>{props.listing ? props.listing.price : ""}</p>

        <button onClick={() => setIsEdit(true)}>Edit</button>

        <button onClick={()=>props.handleDelete(props.listing.id)}>Delete</button>
      </div>
    );
  } else {
    return (
      <div className="grid__item">
        <h2>{props.listing.name}</h2>

        <form onSubmit={() => props.handleEdit(name, price, props.listing.id)}>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder={props.listing.name}
            type="text"
          />

          <input
            onChange={(e) => setPrice(e.target.value)}
            placeholder={props.listing.price}
            type="number"
          />

          <button type="submit">Edit</button>

          <button onClick={() => setIsEdit(false)}>Close</button>
        </form>
      </div>
    );
  }
};
