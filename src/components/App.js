import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Movie from "./Movie";
import MovieSession from "./MovieSession";
import Sucess from "./Sucess";

import '../assets/styles/reset.css';
import '../assets/styles/style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:movieId" element={<Movie />} />
        <Route path="/assentos/:sessionId" element={<MovieSession />} />
        <Route path="/sucesso" element={<Sucess />} />
      </Routes>
    </BrowserRouter>
  );
}