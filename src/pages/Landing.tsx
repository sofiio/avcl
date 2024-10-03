import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Map from '../components/Map'
import Statistics from '../components/Statistics'
import Welcome from '../components/Welcome'
import WhyChooseUs from '../components/WhyChooseUs'

function Landing() {
  return (
    <>
    <Header/>
    <Welcome/>
    <WhyChooseUs/>
    <Statistics/>
    <Map/>
    <Faq/>
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