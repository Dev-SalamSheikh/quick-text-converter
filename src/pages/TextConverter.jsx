import React from "react";
import Form from "../components/Form";
import Banner from "../components/Banner";
import NavigationBar from "../components/NavigationBar";

const TextConverter = () => {
  return (
    <div>
      <NavigationBar text="Image to text" path="/imgtotext" />
      <Banner text="Text Converter" />
      <Form />
    </div>
  );
};

export default TextConverter;
