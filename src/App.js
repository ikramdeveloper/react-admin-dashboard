import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, List, SinglePage, NewPage } from "./pages";

import { productInputs, userInputs } from "./utils/formSource";
import { DarkModeContext } from "./context/darkModeContext";
import "./styles/dark.scss";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route
                path="new"
                element={<NewPage inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route
                path="new"
                element={
                  <NewPage inputs={productInputs} title="Add New Product" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
};

export default App;
