import { Routes, Route } from "react-router-dom";
import Places_list from "./components/Places_list";
import Home from "./pages/Home.jsx";
import InternetSpeedsNew from "./components/InternetSpeedsNew.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places_list />} />
        <Route path="/new" element={<InternetSpeedsNew />} />
      </Routes>
    </>
  );
}

export default App;
