import { Routes, Route } from "react-router-dom";
import Places_list from "./components/Places_list";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places_list />} />
      </Routes>
    </>
  );
}

export default App;
