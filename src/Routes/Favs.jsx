import React, { useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favs, setFavs] = useState(JSON.parse(localStorage.getItem("favs")) || []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favs.map((fav) => {
          return <Card key={fav.id} id={fav.id} username={fav.username} name={fav.name}></Card>
        })}

      </div>
    </>
  );
};

export default Favs;
