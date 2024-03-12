// DonarInfoCard.js
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const DonarInfoCard = (props) => {
    const { resData } = props;
   

    const dispatch = useDispatch();

    const handleAddItem = () => {
        console.log(resData.info);
        dispatch(addItem(resData.info));
    };

    const { costForTwo, title, name, cuisines, locality, distance } = resData?.info;
    return (
        <div className="res-card">
            <h3 className="textf">{name}</h3>
            <h4 className="textf">{title}</h4>
            <h4 className="textf">{cuisines.join(' , ')}</h4>
            <h4 className="textf">{locality}</h4>
            <h4 className="textf">{distance}</h4>
            <h4 className="textf">{costForTwo}</h4>
        </div>
    );
};

export default DonarInfoCard;
