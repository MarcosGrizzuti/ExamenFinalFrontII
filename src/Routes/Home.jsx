import React, {useState, useEffect} from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentists, setDentists] = useState([]);

  const getDentist = async () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      return res.json();
    })
    .then(res => {
      setDentists(res);
    })

  }

  useEffect(() => {
    getDentist();
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map(dentist => {
          return <Card key={dentist.id} id={dentist.id} username={dentist.username} name={dentist.name}></Card>
        })}
      </div>
    </main>
  )
}

export default Home