import Routes from "./routes";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import "./App.css";

function App() {
    const store = configureStore();
    return (
        <Provider store={store}>
            <div className="App">
                <Routes />
            </div>
        </Provider>
    );
}

export default App;
