import React from "react";
import Banner from "../components/Banner";
import ImageConvert from "../components/ImageConvert";
import NavigationBar from "../components/NavigationBar";

const TextConverter = () => {
  return (
    <div className="bg-slate-50">
      <NavigationBar text="Text Converter" path="/" />
      <Banner text="Image to Text" />
      <ImageConvert />
    </div>
  );
};

export default TextConverter;
