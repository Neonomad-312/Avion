import React, { useContext } from 'react'
import { DataContext } from '../../context/AppContext';
import Card from '../ui/card/Card';
import './NewCeramics.css'

const NewCeramics = () => {
  const context = useContext(DataContext)
  const { products } = context;
  console.log(products.slice(0, 4));
  return (
    <div className='newCeramics'>
      <h2>New Ceramics</h2>
      <div className='cards'>
        {products.slice(0, 4).map((el) => (
          <Card {...el} />
        ))}
      </div>
      <div className='button-div'>
        <button>View collection</button>
      </div>
    </div>
  )
}

export default NewCeramics