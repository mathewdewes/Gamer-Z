import React, {useState, useEffect} from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import profileImage from "../../images/profileImage.png";
import { Link } from "react-router-dom";

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
          return <Item id={item.id} name={item.name} price={item.price}/>;
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
          <img src={profileImage} alt="Profile Image" />
            <p>{props.name}</p>
            <p>{props.price}</p>
            <Link to={`/marketplace/${props.id}`}><button onClick={props.handlePurchase}>View Item</button></Link>
 
        </div>
    )
}