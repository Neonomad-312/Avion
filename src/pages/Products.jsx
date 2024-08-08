import React, { useContext } from 'react'
import { DataContext } from '../context/AppContext'
import Header from '../components/header/Header';
import Filters from '../components/filters/Filters';
import '../styles/Products.css'
import Footer from '../components/footer/Footer';

const Products = () => {
  const context = useContext(DataContext);
  const { products } = context;
  return (
    <div>
      <Header />
      <Filters />
      <div className='overlay'>
        <h1>All products</h1>
      </div>
      <div className='products-container'>
        <div className='products-cards'>{products.map((el) => (
          <div>
            <img src={el.image} alt="" />
            <h2>{el.title}</h2>
            <p>£{el.price}</p>
          </div>
        ))}
        </div>
        <button className='prod-btn'>View collection</button>
      </div>

      <Footer />
    </div>
  )
}

export default Products