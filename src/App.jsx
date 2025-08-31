import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./assets/scss/index.scss";
import { Toaster } from "react-hot-toast";
import Community from "./pages/Community";
import About from "./pages/About";
import Donation from "./pages/Donation";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/donation" element={<Donation />} />
     <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
