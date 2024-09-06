import React from "react";
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from "./pages/Home";
import About from "./pages/About";
import PrivateRoute from './auth/PrivateRoute';

const App: React.FC = () => {
  return (
    <PrimeReactProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
};

export default App;
