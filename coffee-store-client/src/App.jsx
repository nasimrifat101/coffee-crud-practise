
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Nav from './components/nav';

function App() {

  const loadedCoffees = useLoaderData();

  const [Coffees, setCoffees] = useState(loadedCoffees);


  return (
    <div className=''>
      <Nav></Nav>
      <h1 className='text-6xl text-green-300'>Coffee</h1>
     <div className='grid grid-cols-2 gap-5'>
      {
        loadedCoffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee} Coffees={Coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
     </div>
    </div>
  )
}

export default App
