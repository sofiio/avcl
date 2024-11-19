

const Statistics = () => {
  return (
    <div className="bg-gray-200 w-full h-[230px]">
      <h1 className="text-center text-[25px] text-customDarkBlue mb-6 pt-6">საინტერესო სტატისტიკა</h1>

      <div className="flex justify-center space-x-20">
        <div className="bg-customDarkBlue w-[100px] h-[100px] p-4 rounded-sm flex items-center space-x-4">
          {/* Logo */}
          <img src="your-logo-path.png" alt="Logo" className="w-8 h-8" />
          {/* Small Text */}
          <p className="text-white text-sm">Text 1</p>
        </div>
        
        <div className="bg-customDarkBlue w-[100px] h-[100px] p-4 rounded-sm flex items-center space-x-4">
          {/* Logo */}
          <img src="your-logo-path.png" alt="Logo" className="w-8 h-8" />
          {/* Small Text */}
          <p className="text-white text-sm">Text 2</p>
        </div>

        <div className="bg-customDarkBlue w-[100px] h-[100px] p-4 rounded-sm flex items-center space-x-4">
          {/* Logo */}
          <img src="your-logo-path.png" alt="Logo" className="w-8 h-8" />
          {/* Small Text */}
          <p className="text-white text-sm">Text 3</p>
        </div>

        <div className="bg-customDarkBlue w-[100px] h-[100px] p-4 rounded-sm flex items-center space-x-4">
          {/* Logo */}
          <img src="your-logo-path.png" alt="Logo" className="w-8 h-8" />
          {/* Small Text */}
          <p className="text-white text-sm">Text 3</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
