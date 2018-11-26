import React from "react";
import "./ClickCard.css";

const ClickCard = props => (
    <div className="card bikePics">
        <div className="img-container">
            <img className="image" alt={props.name} src={props.image} />
        </div>
    </div>
)

export default ClickCard;