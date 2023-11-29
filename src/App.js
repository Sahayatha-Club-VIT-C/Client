import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";
import { Routes, Route } from "react-router-dom";
// import { home } from './Pages/home/home';
import { Home } from "./Pages/home/home";
function App() {
  return (
    <div className="appContainer">
      {/* <Routes > */}
      <Navbar />

      <div className="appWrapper">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          {/* <Footer /> */}
        </Routes>
      </div>
      {/* </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
