import { Routes, Route } from "react-router";
import ResponsiveAppBar from "./components/Nav";
import Alerts from "./components/Alerts";
import Servers from "./components/Servers";
// import CollapsibleTable from "./components/Table";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Alerts />} />
        <Route path="/Alerts" element={<Alerts />} />
        <Route path="/Servers" element={<Servers />} />
      </Routes>
    </>
  );

  // <CollapsibleTable />;
}

export default App;
