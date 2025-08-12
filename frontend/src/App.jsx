import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import AgentLayout from "./layouts/AgentLayout";
import Home from "./pages/Home";
import AgentHome from "./pages/AgentHome";
import AgentCalls from "./pages/AgentCalls";

import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="/agent" element={<AgentLayout />}>
          <Route index element={<AgentHome />} />
          <Route path="home" element={<AgentHome />} />
          <Route path="calls" element={<AgentCalls />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
