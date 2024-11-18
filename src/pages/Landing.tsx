import Contuct from '../components/Contuct'
import Doctors from '../components/Doctors'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Services from '../components/Services'
import Welcome from '../components/Welcome'
import WhyChooseUs from '../components/WhyChooseUs'

function Landing() {
  return (
    <>
    <Header/>
    <Welcome/>
    <WhyChooseUs/>
    <Services/>
    <Doctors/>
    <Contuct/>
    <Footer
     mobileBgColor="black"
     textColor="white"
     hideFirstImageMobile={true}
     SecondImageMobile={false}
     hideLogo = {true}
     hideSecondLogo = {false}
    />
    </>
  )
}

export default Landing