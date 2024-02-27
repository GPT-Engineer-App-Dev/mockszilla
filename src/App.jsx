import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Navigation from "./components/Navigation";
import TestPage1 from "./pages/TestPage1";
import TestPage2 from "./pages/TestPage2";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/test-page-1" element={<TestPage1 />} />
        <Route path="/test-page-2" element={<TestPage2 />} />
      </Routes>
    </Router>
  );
}

export default App;
