import Contuct from "../components/Contuct";
import Doctors from "../components/Doctors";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import Statistics from "../components/Statistics";
import Welcome from "../components/Welcome";
import WhyChooseUs from "../components/WhyChooseUs";

interface LandingProps {
  isEnglish: boolean; // Flag to indicate language
  toggleLanguage: () => void; // Function to toggle the language
}

const Landing: React.FC<LandingProps> = ({ isEnglish, toggleLanguage }) => {
  return (
    <>
      {/* Pass isEnglish and toggleLanguage to the Header component */}
      <Header isEnglish={isEnglish} toggleLanguage={toggleLanguage} />

      <Welcome />
      <WhyChooseUs isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      <Statistics isEnglish={isEnglish} />
      <Services isEnglish={isEnglish} />
      <Doctors isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      <Contuct isEnglish={isEnglish} />

      {/* Pass the necessary props to Footer */}
      <Footer
        mobileBgColor="black"
        textColor="white"
        hideFirstImageMobile={true}
        SecondImageMobile={false}
        hideLogo={true}
        
        hideSecondLogo={false}
        isEnglish={isEnglish}
      />
    </>
  );
};

export default Landing;
