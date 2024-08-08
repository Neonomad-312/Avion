import React, {useState, createContext, useEffect} from 'react'
import axios from '../axios'

export const DataContext = createContext()
const AppContext = ({children}) => {
    const [user, setUser]=useState()
    const [products, setProducts]=useState([])
    const getProducts = async() => {
        try {
            const {data} = await axios.get()
            setProducts(data)
        }catch(error) {
            console.log(error);
        }
    }
    const value = {
        user, products,
    };
    useEffect(() => {
        getProducts()
    },[])
    console.log(products, 'test');
  return (
    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
  )
}

export default AppContext