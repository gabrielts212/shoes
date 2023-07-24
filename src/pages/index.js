// import Home from '@/components/home/Home'
import React from 'react'
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import BodyFoto from "../components/BodyFoto/BodyFoto";
import BodyRoupa from "../components/BodyRoupa/BodyRoupa";
// import BodyTenis from "../components/BodyTenis/BodyTenis";
import Footer from "../components/footer/footer";
const Index = () => {
  return (
    <div>
   <Header/>
   <Banner/>
   <BodyFoto/>
   <BodyRoupa/>
   {/* <BodyTenis/> */}
   <Footer/>
    </div>
  )
}

export default Index