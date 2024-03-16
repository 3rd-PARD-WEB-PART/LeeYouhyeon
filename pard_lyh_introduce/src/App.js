import "./App.css";
import walk from "./Assets/walk1.gif";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container-box">
          <img src={walk} className="walk_image"></img>
        </div>
      </div>
      <div className="App_orangeline1"></div>
      <div className="App_orangeline2"></div>
    </div>
  );
}
export default App;
