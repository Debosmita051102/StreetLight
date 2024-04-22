import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Transformer from "./Components/Hero/Transformer/Transformer"; 
import LampPostDetails from "./Components/LampPostDetails/LampPostDetails";
import LampPostDetails2 from "./Components/LampPostDetails/LampPostDetails2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path=":Domain" element={<Transformer />} />
        <Route path="/:Domain/:Transformer" element={<LampPostDetails />} />
         {/* <Route path="/:Domain/Transformer2" element={<LampPostDetails />} /> */}
        {/* <Route path="/:Domain/Transformer3" element={<LampPostDetails2 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
