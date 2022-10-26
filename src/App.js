import "./App.css";
import Sidebar1 from "../src/components/sidebar1/Sidebar1";
import Content from "../src/components/contentArea/Content";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar1 />
      <Content/>
    </div>
  );
}

export default App;