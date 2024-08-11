import React, { useContext } from 'react'
import '../styles/Cart.css'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { useTranslation } from 'react-i18next'
import { DataContext } from '../context/AppContext'

const Cart = () => {
    const { t } = useTranslation();
    const { cart, clearCart } = useContext(DataContext);
    const handleClearCart = () => {
        clearCart();
    };
    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price, 0);
    };
    return (
        <div>
            <Header />
            <div className='cart'>
                <h1>{t("Your shopping cart")}</h1>
                <button onClick={handleClearCart}>Clear cart</button>
                <table>
                    <tr className='titles'>
                        <th>Product</th>
                        <th className='quantity'>Quantity</th>
                        <th className='price'>Total</th>
                    </tr>
                    {cart.map((item) => (
                        <tr>
                            <td className='product-info'>
                                <img src={item.image}/>
                                <span>
                                    <h4>{item.title}</h4>
                                    <p>{item.description} <br />£{item.price}</p>
                                </span>
                            </td>
                            <td className='quantity'>1</td>
                            <td className='price'>£{item.price}</td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td className='total'>
                            <span>
                                <h5>Subtotal</h5>
                                <h4>£{calculateTotal()}</h4>
                            </span>
                            <p>Taxes and shipping are calculated at checkout</p>
                            <button>Go to checkout</button>
                        </td>
                    </tr>
                </table>
                
            </div>
            <Footer />
        </div>
    )
}

export default Cart