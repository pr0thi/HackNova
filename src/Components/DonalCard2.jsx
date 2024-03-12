// DonarInfoCard.js
import React from "react";
import { useDispatch } from "react-redux";
import { addItem, clearCart, removeItem } from "./utils/cartSlice";

const DonarCard2 = (props) => {
    const { resData } = props;
    console.log(props);


    const dispatch = useDispatch();

    const handleAddItem = () => {
        alert("Approved");
        dispatch(removeItem());
       
    };

    const { costForTwo, title, name, cuisines, locality, distance } = resData?.info;
    return (
        <div className="res-card">
            <h3 className="textf">{name}</h3>
            <h4 className="textf">{title}</h4>
            <h4>{cuisines.join(' , ')}</h4>
            <h4>{locality}</h4>
            <h4>{distance}</h4>
            <h4 >{costForTwo}</h4>
            <button className="btn" onClick={handleAddItem}>Approve</button>
        </div>
    );
};

export default DonarCard2;
