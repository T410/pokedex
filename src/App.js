import React from "react";
import { store, persistor } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
