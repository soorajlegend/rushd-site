import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/scroll-to-top";
import Main from "./pages/main";
import MainArabic from "./pages/main-arabic";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Main />} />
        <Route path="/ar" element={<MainArabic />} />
      </Routes>
    </Router>
  );
}

export default App;
