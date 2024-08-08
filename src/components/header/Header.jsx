import React, {useState, useContext} from 'react'
import '../../styles/Header.css'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../context/AppContext'

const Header = () => {
    const context=useContext(DataContext)
    console.log(context);
    const [categories, setCategories] = useState([
        {name: 'Plant pots', rout: 'plantPots'},
        {name: 'Ceramics', rout: 'ceramics'},
        {name: 'Tables', rout: 'tables'},
        {name: 'Chairs', rout: 'chairs'},
        {name: 'Crockery', rout: 'crockery'},
        {name: 'Tableware', rout: 'tableware'},
        {name: 'Cutlery', rout: 'cutlery'},
    ])
  return (
    <div className='header'>
        {context.user}
        <div className='nav'>
            <img src="./src/assets/search.svg" alt="" />
            <NavLink to={'/home'}><h1>Avion</h1></NavLink>
            <div>
                <NavLink to={'/cart'}><img src="./src/assets/cart.svg" alt="" style={{
                    marginRight: '16px'
                }}/></NavLink>
                <img src="./src/assets/user.svg" alt="" />
            </div>
        </div>
        <ul className='navList'>
            {categories.map((categ) => (
                <li><NavLink to={`/${categ.rout}`}>{categ.name}</NavLink></li>
            ))}
        </ul>
    </div>
  )
}

export default Header