import React from 'react';
import Slider from 'react-slick';

const doctorsData = [
  {
    name: 'სოფიო ხვადაგიანი',
    profession: 'კარდიოლოგი',
    image: 'doctor1.jpg', // Replace with your image URL
  },
  {
    name: 'ირაკლი დოღონაძე',
    profession: 'პედიატრი',
    image: 'doctor2.jpg', // Replace with your image URL
  },
  {
    name: 'სოფიო ხვადაგიანი',
    profession: 'ნევროლოგი',
    image: 'doctor1.jpg', // Replace with your image URL
  },
  {
    name: 'ირაკლი დოღონაძე',
    profession: 'დერმატოლოგი',
    image: 'doctor2.jpg', // Replace with your image URL
  },
  {
    name: 'სოფიო ხვადაგიანი',
    profession: 'ორთოპედი',
    image: 'doctor1.jpg', // Replace with your image URL
  },
  {
    name: 'ირაკლი დოღონაძე',
    profession: 'ოფთალმოლოგი',
    image: 'doctor2.jpg', // Replace with your image URL
  },
];

const DoctorsSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mt-24 overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-4">ჩვენი ექიმები</h2>
      <div className="flex justify-center mb-4">
        <img src="doct.jpg" alt="" className="w-8 h-8" /> {/* Replace with your icon URL */}
      </div>
      <Slider {...settings} className="slider">
        {doctorsData.map((doctor, index) => (
          <div key={index} className="p-4">
            <div className="bg-blue-100 rounded-lg shadow-md flex flex-col items-center p-4 mx-auto max-w-xs">
              <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full mb-2" />
              <h3 className="text-lg font-semibold">{doctor.name}</h3>
              <p className="text-gray-500">{doctor.profession}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-6">
        <div className="w-4 h-4 bg-blue-500 rounded-full" />
      </div>
    </div>
  );
};

export default DoctorsSlider;
