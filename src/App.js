import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Download from "./pages/Download";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";

import MyPage from "./pages/MyPage";

function App() {
  return (
    <div className="App">
      <Router>
        <MyPage showNavbar={false} showFooter={false}>
        <Routes>
          <Route exact path="/policy" element={<Policy/>} />
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/download" exact element={<Download />} />
          <Route path="*" exact element={<PageNotFound />} />
        </Routes>
        </MyPage>
      </Router>
    </div>
  );
}

export default App;













