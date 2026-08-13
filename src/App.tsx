import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { NewChargedPopup } from "./components/NewChargedPopup";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import InvestorsEletroposto from "./pages/InvestorsEletroposto";
import Ecosystem from "./pages/Ecosystem";

function App() {
  return (
    <>
      <NewChargedPopup />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos/:slug" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/investidores/eletroposto" element={<InvestorsEletroposto />} />
          <Route path="/ecossistema" element={<Ecosystem />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
