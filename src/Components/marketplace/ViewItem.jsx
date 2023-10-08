import React, { useState, useEffect } from "react";

import profileImage from "../../images/profileImage.png";

import { getDoc, doc } from "firebase/firestore";

import { db } from "../../firebase-config";

import { useParams } from "react-router-dom";

export default function ViewItem(props) {
  const [item, setItem] = useState(null);

  const params = useParams();

  const id = params.id;

  useEffect(() => {
    async function getItem() {
      const itemRef = doc(db, "Items", id);

      const querySnapShot = await getDoc(itemRef);

      return querySnapShot;
    }

    const fetchData = async () => {
      const result = await getItem();

      setItem({
        name: result.data().name,

        price: result.data().price,
      });
    };

    fetchData();
  }, [id]);
  console.log(item);
  if (item ==null) {
    return <div>loading....</div>;
  } else {
    return (
      <div className="product">
        <img src={profileImage} alt="" />

        <h1>{item.name}</h1>

        <h1>${item.price}</h1>

        <p className="product__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          nulla vel id debitis repellat ipsa, placeat perspiciatis non esse
          obcaecati!
        </p>

        <button>Purchase</button>

        <button>Return to Market</button>
      </div>
    );
  }
}
