import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextConverter from "./pages/TextConverter";
import ImageToTextConverter from "./pages/ImagetoTextConverter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextConverter />} />
        <Route path="/imgtotext" element={<ImageToTextConverter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
