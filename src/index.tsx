import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import store from "./redux/reduxStore";
import { Provider } from "react-redux";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
);
