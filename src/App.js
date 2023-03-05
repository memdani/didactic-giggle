import "./App.css";
import A from "./components/A/A";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./components/redux/reducer";

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <A />
      </Provider>
    </div>
  );
}

export default App;
