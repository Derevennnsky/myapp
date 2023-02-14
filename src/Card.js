import React from "react";
import "./Card.css"
const Card=(props)=>{
    return(
        <div className="robotistyle">
            <img src={`https://robohash.org/${props.id}`} alt="Картинка"/>
            <div>
                <h2>{props.name}</h2>
                <h3>{props.email}</h3>

            </div>
        </div>
    )
}

export default Card