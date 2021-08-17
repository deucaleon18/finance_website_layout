import React from 'react'
import NavBar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import InfoSection from '../components/InfoSection/InfoSection'
import Services from '../components/Services/Services'
import {homeObjOne,homeObjTwo,homeObjThree} from '../components/InfoSection/Data'
import img_1 from  '../images/svg-1.svg'
import img_2 from '../images/svg-2.svg'
import img_3 from '../images/svg-4.svg'
import Footer from '../components/Footer/Footer'
const Home = () => {
    return (
        <>
            <NavBar/>
            <HeroSection/>
            <InfoSection {...homeObjOne} img={img_1}/>

            <InfoSection {...homeObjTwo} img={img_2}/>
            <Services/>
            <InfoSection {...homeObjThree} img={img_3}/>
            <Footer/>
        </>
    )
}

export default Home
