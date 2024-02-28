import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Navigation from "./components/Navigation";
import TestPage1 from "./pages/TestPage1";
import TestPage2 from "./pages/TestPage2";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/test-page-1" element={<TestPage1 />} />
        <Route path="/test-page-2" element={<TestPage2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
