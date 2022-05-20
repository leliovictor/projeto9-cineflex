import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./Nav";
import Home from "./Home";
import MovieSession from "./MovieSession";

import '../assets/styles/reset.css';
import '../assets/styles/style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:movieId" element={<MovieSession />} />
      </Routes>
    </BrowserRouter>
  );
}