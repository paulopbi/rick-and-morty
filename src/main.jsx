import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./GeneralStyles.css";
import Home from "./pages/Home";
import Character from "./pages/Character";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import NotFind from "./pages/NotFind";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="character/:id" element={<Character />} />
      <Route path="*" element={<NotFind />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
