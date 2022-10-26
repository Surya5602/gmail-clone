import "./App.css";
import Sidebar1 from "./sidebar1/Sidebar1";
import Content from "./contentArea/Content";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar1 />
      <Content/>
    </div>
  );
}

export default App;