import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import _ from "lodash";
import DefaultLayout from "./components/Layout/DefaultLayout/defaultLayout";
import Scroll from "./scrollToTop/index.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjHfTKkkXNbQIqGz2JgIjzAgur09TmJq4",
  authDomain: "ban-ao-dai.firebaseapp.com",
  projectId: "ban-ao-dai",
  storageBucket: "ban-ao-dai.appspot.com",
  messagingSenderId: "862038459442",
  appId: "1:862038459442:web:3371d968d88fc83fbd682b",
  measurementId: "G-FGF3VG516M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
