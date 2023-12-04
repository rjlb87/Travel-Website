import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./common/Dashboard";
// // import Navbar from "./common/Navbar";
// import ColorGenerator from "./components/project/ColorGenerator";
// import HashPassword from "./components/project/HashPassword";
// import IncrementDecrement from "./components/project/IncrementDecrement";
// import SimpleTypeTracker from "./components/project/SimpleTypeTracker";
// import Translator from "./components/project/Translator";
// import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/ColorGenerator" element={<ColorGenerator />} />
        <Route path="/IncrementDecrement" element={<IncrementDecrement />} />
        <Route path="/HashPassword" element={<HashPassword />} />
        <Route path="/SimpleTypeTracker" element={<SimpleTypeTracker />} />
        <Route path="/Translator" element={<Translator />} />
        <Route path="/Project" element={<Project />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
