import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Landing from "./pages/Landing";

// The App component
function App() {
  const [isEnglish, setIsEnglish] = useState<boolean>(false); // Default language is Georgian (false)

  // Function to toggle language
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish); // Toggle the language between Georgian and English
  };

  return (
    <BrowserRouter>
      {/* Pass the state and function as props to the Landing component */}
      <Routes>
        <Route 
          path="/" 
          element={<Landing isEnglish={isEnglish} toggleLanguage={toggleLanguage} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
