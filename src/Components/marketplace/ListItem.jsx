import React, { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

export default async function ListItem() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getItems() {
      const querySnapShot = await getDocs(collection(db, "Items"));

      return querySnapShot.docs.map((doc) => ({
        id: doc.id,

        ...doc.data(),
      }));
    }

    getItems().then((items) => {
      setItems(items);
    });
  }, []);
  if (items.length > 0) {
    return (
      <div>
        {items.forEach((element) => {
          return <Item />;
        })}
      </div>
    );
  } else {
    <>
      <div>There are no items to be displayed.</div>
    </>;
  }
}

const Item = () => {
  return <div>Item</div>;
};
