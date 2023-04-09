import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [dentist, setDentist] = useState("");
  const { id } = useParams();

  const getDentist = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      setDentist(res)
    })
  }

  useEffect(() => {
    getDentist();
  }, [])

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <div>
        <p>Nombre: {dentist.name}</p>
        <p>Email: {dentist.email}</p>
        <p>Telefono: {dentist.phone}</p>
        <p>Pagina: {dentist.website}</p>
      </div>
    </>
  )
}

export default Detail