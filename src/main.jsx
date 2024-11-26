import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Character from "./pages/Character";
import NavBar from "./components/NavBar/NavBar";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="character/:id" element={<Character />} />
    </Routes>
  </BrowserRouter>
);
