import { Home } from "./pages";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Basket } from "./pages/Basket";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*  <Route path="/compras" element={<Basket />} />
          <Route path="*" element={<>Not found</>} /> */}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
