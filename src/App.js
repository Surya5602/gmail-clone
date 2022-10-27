import "./App.css";
import Sidebar1 from "../src/components/sidebar1/Sidebar1";
import Content from "../src/components/contentArea/Content";
import MainArea from "./components/workingArea/MainArea";
function App() {
  return (
    <div style={{ display: "flex"}}>
      <Sidebar1 />
      <Content/>
      <MainArea/>
    </div>
  );
}

export default App;