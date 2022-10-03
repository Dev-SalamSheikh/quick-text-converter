import React from "react";

const Banner = () => {
  const background =
    "https://images.pexels.com/photos/448835/pexels-photo-448835.jpeg?auto=compress&cs=tinysrgb&w=1600";
  return (
    <div
      className="h-[30vh] w-full flex justify-center items-center px-12"
      style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
        url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="lg:text-8xl text-4xl font-bold text-white">
        Text Converter
      </h1>
    </div>
  );
};

export default Banner;
