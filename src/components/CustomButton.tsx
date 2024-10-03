import React from "react";

interface ButtonProps {
  width?: string;
  height?: string;
  text: string;
  marginTop?: string;
  marginLeft?: string;
  backgroundColor?: string;
  border?: string;
  hoverEffect?: string;
  rounded?: string;
  font?: string;
  textColor?: string;
  textSize?: string;
  imgSrc?: string; // new prop for image source
  imgAlt?: string; // new prop for image alt text
  imgHoverEffect?: string; // new prop for image hover effect
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({
  width = "w-24",
  height = "h-10",
  text,
  marginTop = "mt-0",
  marginLeft = "ml-0",
  backgroundColor = "bg-blue-500",
  border = "border",
  rounded = "rounded-none",
  textColor = "text-white",
  textSize = "text-[16px]",
  imgSrc,
  imgAlt = "",
  font = "font-regular",
  hoverEffect = "hover:bg-blue-700", // default hover effect
  onClick,
}: ButtonProps) => {
  const buttonStyle = `${width} ${font} ${textColor} ${marginLeft} ${textSize} ${height} ${marginTop} ${rounded} ${hoverEffect} ${backgroundColor} ${border} border`;

  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div>
      <button
        className={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {text}
        {imgSrc && (
          <img
            src={imgSrc}
            alt={imgAlt}
            className={`md:mt-[27px] mt-2 m-auto ${
              isHovered ? "filter invert" : "" // Apply filter on hover
            }`}
          />
        )}
      </button>
    </div>
  );
};

export default CustomButton;
