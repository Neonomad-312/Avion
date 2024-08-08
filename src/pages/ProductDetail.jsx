import React from 'react'
import Header from '../components/header/Header'
import Card from '../components/ui/card/Card'
import Features from '../components/features/Features'
import SignUp from '../components/signUp/SignUp'
import Footer from '../components/footer/Footer'
import NewCeramics from '../components/newCeramics/NewCeramics'
import SecondaryHeader from '../components/secondaryHeader/SecondaryHeader'

const ProductDetail = () => {
  return (
    <div>
      <SecondaryHeader/>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1></h1>
          <p></p>
        </div>
      </div>
      <NewCeramics/>
      <Features/>
      <SignUp/>
      <Footer/>
    </div>
  )
}

export default ProductDetail