import { BrowserRouter, Routes, Route} from "react-router-dom";

import Agent from "./Pages/AgentPage";
import Home from "./Pages/HomePage";

import Footer from "./Componentes/Footer";
import Banner from "./Componentes/Banner";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Banner />

        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/agents/:id" element={ <Agent/> } />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}