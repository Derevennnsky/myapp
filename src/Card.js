import React from "react";
const Card=(id,name,email,addres)=>{
    return(
        <div>
            <img src={`https://robohash.org/${id}`} alt="Картинка"/>
            <div>
                <h2>{name}</h2>
                <h3>{email}</h3>
                <h4>{addres}</h4>
            </div>
        </div>
    )
}

export default Card