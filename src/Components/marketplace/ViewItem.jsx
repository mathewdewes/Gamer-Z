import React, { useState, useEffect } from "react";
import profileImage from "../../images/profileImage.png";
import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

export default function ViewItem(props) {
    const [item, setItem] = useState(null);
  useEffect(async () => {
    async function getItem() {
      const accountRef = collection(db, "Items");

      const q = query(accountRef, where("id", "==", id));

      const querySnapShot = getDocs(q);

      return querySnapShot;
    }

    const result = await getItem();

    result.forEach((res) => {
      return setItem({
        name: res.data().name,

        price: res.data().price,
      });
    });
  }, []);
  const id = 1;
  console.log(props.match);
  if (item !==null){
    return (
        <div className="product">
          <img src={profileImage} alt="" />
          <h1>{props.name}</h1>
          <p className="product__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla
            vel id debitis repellat ipsa, placeat perspiciatis non esse obcaecati!
          </p>
          <button>Purchase</button>
          <button>Return to Market</button>
        </div>
      );
    } else{
        return (
            <div>
                loading
            </div>
        )
    } 
  }
  
  
