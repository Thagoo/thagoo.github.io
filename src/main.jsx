import { createRoot } from "react-dom/client";
import App from "./App";
import AppThemeProvider from "./theme/AppThemeProvider";

import { store } from "./app/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </Provider>
);
