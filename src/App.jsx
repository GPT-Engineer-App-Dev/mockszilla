import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Navigation from "./components/Navigation";
import TestPage1 from "./pages/TestPage1";
import TestPage2 from "./pages/TestPage2";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navigation />
              <Index />
            </>
          }
        />
        <Route
          path="/test-page-1"
          element={
            <>
              <Navigation />
              <TestPage1 />
            </>
          }
        />
        <Route
          path="/test-page-2"
          element={
            <>
              <Navigation />
              <TestPage2 />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
