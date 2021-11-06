import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/home_page/HomePage";
import AboutPage from "./pages/about_page/AboutPage";

//components
import Header from "./components/header/Header";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <h1>App.js</h1>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
