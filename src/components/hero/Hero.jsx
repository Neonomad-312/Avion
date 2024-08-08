import React from 'react'
import '../../styles/Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='banner'>
                <div className='text'>
                    <h1>The furniture brand for the future, with timeless designs</h1>
                    <button>View collection</button>
                    <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand
                        with nice fonts, tasteful colors and a beautiful way to display things digitally
                        using modern web technologies.</p>
                </div>
                <div className='hero-img'><img src="./src/assets/heroimg.jpg" alt="" /></div>
            </div>
        </div>
    )
}

export default Hero