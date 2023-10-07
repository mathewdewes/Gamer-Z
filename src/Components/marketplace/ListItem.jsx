import React, {useState, useEffect} from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

export default function ListItem(props) {


  useEffect(() => {
    async function getItems() {
      const querySnapShot = await getDocs(collection(db, "Items"));

      return querySnapShot.docs.map((doc) => ({
        id: doc.id,

        ...doc.data(),
      }));
    }

    getItems().then((items) => {
      props.setItems(items);
    });
  }, []);


  if (props.items &&  props.items.length > 0) {
    return (
      <div>
        {props.items.map((item) => {
          return <Item name={item.name} price={item.price}/>;
        })}
      </div>
    );
  } else {
    return <></>;
  }
}

const Item=(props)=>{
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    )
}