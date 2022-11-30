import CompA from "./CompA";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          store.count++;
        }}
      >
        <CompA />
      </button>
    </div>
  );
}

export default App;
