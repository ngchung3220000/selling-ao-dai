import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import _ from "lodash";
import DefaultLayout from "./components/Layout/DefaultLayout/defaultLayout";
import Scroll from "./scrollToTop/index.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {_.map(publicRoutes, (route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
        <Scroll />
      </div>
    </BrowserRouter>
  );
}

export default App;
