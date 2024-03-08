import { Routes, Route } from "react-router-dom";
import Places_list from "./components/Places_list";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <h1 className="font-bold text-red-500">hello</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places_list />} />
      </Routes>
    </>
  );
}

export default App;
