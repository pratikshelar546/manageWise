import React from 'react'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Premium from '../components/Premium'
import Mores from '../components/Mores'
import FAQ from '../components/FAQ'
import Pricing from '../components/Pricing'
import Testo from '../components/Testo'
import DontMiss from '../components/DontMiss'
import Footer from '../components/Footer'
// import Slick from '../components/Slick'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Welcome/>
    <Premium/>
    <Mores/>
    <FAQ/>
    <Pricing/>
    <Testo/>
    <DontMiss/>
    <Footer/>
    {/* <Slick/> */}
        </>
  )
}

export default Home