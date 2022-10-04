import React, { useCallback, useState } from "react";
import Swal from "sweetalert2";
import { createWorker } from "tesseract.js";

const ImageConvert = () => {
  // States
  const [selectImage, setSelectImage] = useState(null);
  const [textResult, setTextResult] = useState("");

  //   Initialize Worker
  const worker = createWorker();

  //   Converting and onClick Function is here
  const convertImageToText = useCallback(async () => {
    if (!selectImage) {
      Swal.fire("Error", "Select an image first", "error");
    } else {
      Swal.fire(
        "Please Wait",
        "Your Image is converting into text, normally it takes 5-10 sec for the plain text or small photo, converting time can be incresed depending on image quality or size",
        "info"
      );
      await worker.load();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const { data } = await worker.recognize(selectImage);
      setTextResult(data.text);
    }
  }, [worker, selectImage]);

  //   Handle Change Function
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setSelectImage(e.target.files[0]);
    } else {
      setSelectImage(null);
      setTextResult("");
    }
  };

  // Copy Function
  const copied = () => {
    const value = document.getElementById("resultBox").value;
    if (value.length === 0) {
      Swal.fire("Sorry", "No text Found", "warning");
    } else {
      navigator.clipboard.writeText(value);
      Swal.fire("Copied", "Text successfully copied!", "success");
    }
  };

  return (
    <div className="container mx-auto lg:w-8/12 md:w-10/12 w-11/12 mt-8 pb-8">
      <div className="content py-10 px-4 flex flex-col bg-white shadow-md rounded-md">
        <div className="w-full text-center mb-8">
          <label htmlFor="upload" className="text-4xl font-semibold">
            Upload <span className="text-pink-600">Image</span>
          </label>
        </div>
        <div className="w-ful text-center flex justify-center items-center">
          <input
            type="file"
            className="p-4 border"
            id="upload"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        {/* result Box */}
        <div className="result w-full flex flex-wrap md:flex-nowrap gap-4 pt-10 pb-4">
          <div className="preview w-full">
            <h1 className="text-3xl mb-2 font-medium">Preview</h1>
            <div className="w-full md:h-[300px] h-[200px] border">
              {selectImage && (
                <img
                  src={URL.createObjectURL(selectImage)}
                  alt="thumb"
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
          <div className="texts w-full hidden md:block">
            <h1 className="text-3xl mb-2 text-pink-600 font-medium">Result</h1>
            <div className="w-full md:h-[300px] h-[200px] border relative">
              {textResult && (
                <>
                  <textarea
                    className="w-full h-full py-1 px-2 outline-none"
                    id="resultBox"
                  >
                    {textResult ? textResult : "Please Wait"}
                  </textarea>
                  <div className="absolute right-6 bottom-6 flex gap-4">
                    <button
                      className="bg-transparent border border-pink-600 hover:bg-pink-600 rounded hover:text-white font-medium px-2 py-1 w-max duration-300"
                      onClick={copied}
                    >
                      Copy
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Final Button */}
        <div className="w-full my-4 text-center">
          <button
            className="bg-pink-600 rounded text-white font-medium px-6 py-4 w-max lg:hover:scale-110 duration-300 hover:scale-110"
            onClick={convertImageToText}
          >
            Convert to text
          </button>
        </div>

        {/* Mobile Result */}
        <div className="texts w-full block md:hidden">
          <h1 className="text-3xl mb-2 text-pink-600 font-medium">Result</h1>
          <div className="w-full md:h-[300px] h-[200px] border relative">
            {textResult && (
              <>
                <textarea
                  className="w-full h-full py-1 px-2 outline-none"
                  id="resultBox"
                >
                  {textResult ? textResult : "Please Wait"}
                </textarea>
                <div className="absolute right-6 bottom-6 flex gap-4">
                  <button
                    className="bg-transparent border border-pink-600 hover:bg-pink-600 rounded hover:text-white font-medium px-2 py-1 w-max duration-300"
                    onClick={copied}
                  >
                    Copy
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageConvert;
