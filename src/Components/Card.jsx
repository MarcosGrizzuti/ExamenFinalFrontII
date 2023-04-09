import React, {useState, useContext} from "react";
import { Link } from 'react-router-dom'
import { ContextGlobal } from "./utils/global.context";
import "./Card.css"


const Card = ({ name, username, id }) => {

  const { addFav } = useContext(ContextGlobal);
  const addFavorite = ()=>{
    const newFav = {name, username, id}
    addFav(newFav);
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/detail/${id}`}>
          <div><img src="./images/doctor.jpg" alt="Imagen-Doctor"/></div>
          <div>
            <h4>{id}</h4>
            <h4>{name}</h4>
            <h4>{username}</h4>
          </div>
        </Link>  

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFavorite} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
