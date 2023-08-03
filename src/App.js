import TodoBox from "./Component/TodoBox";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>TODO List</h2>
        <div className="todoBox">
        <TodoBox />
        </div>
        
      </div>
    </div>
  );
}

export default App;
