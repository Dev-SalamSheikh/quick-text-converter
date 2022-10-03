import React, { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  // States
  const [inputText, setInputText] = useState("");
  const [showCopyButton, setShowCopyButton] = useState(false);
  const [upperactive, setUpperActive] = useState(false);
  const [lowerActive, setLowerActive] = useState(false);
  const [capitalActive, setCapitalActive] = useState(false);
  const [toggleActive, setToggleActive] = useState(false);

  // All Functions will define here

  // UpperCase Funtion
  const toUpperCase = () => {
    let inputValue = document.getElementById("msgBox");

    if (inputValue.value.length === 0) {
      setShowCopyButton(false);
      Swal.fire(
        "Sorry",
        "No Text Found. write or paste something to continue",
        "warning"
      );
    } else {
      let upperCaseValue = inputValue.value.toString().toUpperCase();
      setInputText(upperCaseValue);
      setShowCopyButton(true);
      setUpperActive(true);
      setLowerActive(false);
      setCapitalActive(false);
      setToggleActive(false);
      Swal.fire(
        "UPPERCASE",
        "Your text has been successfully transformed into uppercase",
        "success"
      );
    }
  };

  // LowerCase Function
  const toLowerCase = () => {
    let inputValue = document.getElementById("msgBox");

    setShowCopyButton(true);
    if (inputValue.value.length === 0) {
      setShowCopyButton(false);
      Swal.fire(
        "Sorry",
        "No Text Found. write or paste something to continue",
        "warning"
      );
    } else {
      let lowerCaseValue = inputValue.value.toString().toLowerCase();
      setInputText(lowerCaseValue);
      setShowCopyButton(true);
      setLowerActive(true);
      setUpperActive(false);
      setCapitalActive(false);
      setToggleActive(false);
      Swal.fire(
        "lowercase",
        "Your text has been successfully transformed into lowercase",
        "success"
      );
    }
  };

  // Capitalize Function
  const toCapitalize = () => {
    let sentence = inputText;
    const words = sentence.toLowerCase().split(" ");
    const newArray = [];

    for (const word of words) {
      let firstLetter = word.substring(0, 1);
      firstLetter = firstLetter.toUpperCase();
      let restLetters = word.substring(1);
      newArray.push(firstLetter + restLetters);
    }
    const finalArray = newArray.join(" ");
    if (sentence.length === 0) {
      setShowCopyButton(false);
      Swal.fire(
        "Sorry",
        "No Text Found. write or paste something to continue",
        "warning"
      );
    } else {
      setInputText(finalArray);
      setShowCopyButton(true);
      setShowCopyButton(true);
      setCapitalActive(true);
      setUpperActive(false);
      setLowerActive(false);
      setToggleActive(false);
      Swal.fire(
        "Capitalize",
        "Your text has been successfully transformed into Capitalize",
        "success"
      );
    }
  };

  // ToggleCase Function
  const toToggleCase = () => {
    let sentence = inputText;
    const words = sentence.toLowerCase().split(" ");
    const newArray = [];

    for (const word of words) {
      let firstLetters = word.substring(0, word.length / 2);
      let middleLetters = word.substring(word.length / 2, word.length);
      middleLetters = middleLetters.toUpperCase();
      newArray.push(firstLetters + middleLetters);
    }
    const finalArray = newArray.join(" ");
    if (sentence.length === 0) {
      setShowCopyButton(false);
      Swal.fire(
        "Sorry",
        "No Text Found. write or paste something to continue",
        "warning"
      );
    } else {
      setInputText(finalArray);
      setShowCopyButton(true);
      setToggleActive(true);
      setCapitalActive(false);
      setUpperActive(false);
      setLowerActive(false);
      Swal.fire(
        "Toggle",
        "Your text has been successfully transformed into Toggle Case",
        "success"
      );
    }
  };

  // Copy Function
  const copied = () => {
    const value = document.getElementById("msgBox").value;
    if (value.length === 0) {
      Swal.fire("Sorry", "No text Found", "warning");
    } else {
      navigator.clipboard.writeText(value);
      Swal.fire("Copied", "Text successfully copied!", "success");
    }
  };

  // Cut Function
  const cut = () => {
    const value = document.getElementById("msgBox").value;
    if (value.length === 0) {
      Swal.fire("Sorry", "No text Found", "warning");
    } else {
      navigator.clipboard.writeText(value);
      setInputText("");
      setShowCopyButton(false);
      Swal.fire("Cutted", "Text successfully cutted!", "success");
    }
  };

  return (
    <div className="container mx-auto lg:w-8/12 md:w-10/12 w-11/12 my-6">
      <div className="input_box w-full bg-white relative">
        <h2 className="font-medium text-lg lg:text-2xl text-gray-500 mb-2">
          Write on the text box
        </h2>
        <textarea
          rows="10"
          id="msgBox"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full border text-gray-800 lg:px-4 lg:py-1 p-2 focus:border-pink-600 outline-none"
        ></textarea>
        {showCopyButton && (
          <div className="absolute right-6 bottom-6 flex gap-4">
            <button
              className="bg-transparent border border-pink-600 hover:bg-pink-600 rounded hover:text-white font-medium px-2 py-1 w-max duration-300"
              onClick={copied}
            >
              Copy
            </button>
            <button
              className="bg-transparent border border-pink-600 hover:bg-pink-600 rounded hover:text-white font-medium px-2 py-1 w-max duration-300"
              onClick={cut}
            >
              Cut
            </button>
          </div>
        )}
      </div>
      <div className="buttons flex justify-center items-center flex-wrap lg:flex-nowrap gap-4 my-4">
        <button
          className={`bg-pink-600 rounded text-white font-medium px-6 py-4 w-max lg:hover:scale-110 duration-300 hover:scale-110 ${
            upperactive ? "scale-110 bg-gray-800 border-pink-600" : ""
          }`}
          onClick={toUpperCase}
        >
          Uppercase
        </button>
        <button
          className={`bg-pink-600 rounded text-white font-medium px-6 py-4 w-max lg:hover:scale-110 duration-300 hover:scale-110 ${
            lowerActive ? "scale-110 bg-gray-800 border-pink-600" : ""
          }`}
          onClick={toLowerCase}
        >
          Lowercase
        </button>
        <button
          className={`bg-pink-600 rounded text-white font-medium px-6 py-4 w-max lg:hover:scale-110 duration-300 hover:scale-110 ${
            capitalActive ? "scale-110 bg-gray-800 border-pink-600" : ""
          }`}
          onClick={toCapitalize}
        >
          Capitalize
        </button>
        <button
          className={`bg-pink-600 rounded text-white font-medium px-6 py-4 w-max lg:hover:scale-110 duration-300 hover:scale-110 ${
            toggleActive ? "scale-110 bg-gray-800 border-pink-600" : ""
          }`}
          onClick={toToggleCase}
        >
          ToggleCase
        </button>
      </div>
    </div>
  );
};

export default Form;
