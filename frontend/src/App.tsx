import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import useRoutes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const routs = useRoutes();
  return (
    <>
      <Navbar />
      <Router>{routs}</Router>
      <Footer />
    </>
  );
}

export default App;
