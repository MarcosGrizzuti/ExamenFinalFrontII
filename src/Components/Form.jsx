import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);


  const handleOnChangeName = (e) => {
    setName(e.target.value)
  }

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const validateName = () => {
    return name !== ""; 
  }

  const validateEmail = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  

  const handeOnSubmit = (e) => {
    e.preventDefault();

    if(validateEmail && validateName) {
      setError(false);
      setMessage(true);
    } else {
      setError(true);
      setMessage("Error");
    }

    e.reset()
  }

  return (
    <div>
      <form onSubmit={handeOnSubmit}>
        <input type="text" placeholder="Ingrese su nombre" onChange={handleOnChangeName} required/>
        <input type="email" placeholder="Ingrese su nombre" onChange={handleOnChangeEmail} required/>
        <button>Enviar</button>
      </form>
      {message ? <div>{`Gracias ${name}, te contactaremos cuando antes vía mail`}</div> : error}
    </div>
  );
};

export default Form;
