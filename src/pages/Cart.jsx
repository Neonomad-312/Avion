import React from 'react'
import '../styles/Cart.css'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const Cart = () => {
    return (
        <div>
            <Header />
            <div className='cart'>
                <h1>Your shopping cart</h1>
                <table>
                    <tr className='titles'>
                        <th>Product</th>
                        <th className='quantity'>Quantity</th>
                        <th className='price'>Total</th>
                    </tr>
                    <tr>
                        <td className='product-info'>
                            <img src="./src/assets/vase.png" alt="" />
                            <span>
                                <h4>Graystone vase</h4>
                                <p>A timeless ceramic vase with
                                    a tri color grey glaze. <br />£85</p>
                            </span>
                        </td>
                        <td className='quantity'>1</td>
                        <td className='price'>£85</td>
                    </tr>
                    <tr>
                        <td className='product-info'>
                            <img src="./src/assets/vases.png" alt="" />
                            <span>
                                <h4>Graystone vase</h4>
                                <p>A timeless ceramic vase with
                                    a tri color grey glaze. <br />£185</p>
                            </span>
                        </td>
                        <td className='quantity'>1</td>
                        <td className='price'>£185</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td className='total'> 
                            <span>
                                <h5>Subtotal</h5>
                                <h4>£210</h4>
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