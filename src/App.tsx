import "./App.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {RecoilRoot} from "recoil";

function App() {
  const defaultTitle = "App";

  return (
    <HelmetProvider>
      <RecoilRoot>
        <Helmet
          titleTemplate={`%s - ${defaultTitle}`}
          defaultTitle={defaultTitle}
        >
          <meta charSet="utf-8" />
        </Helmet>

        <Router>
          <Routes>
            <Route index element={<div></div>} />
          </Routes>
        </Router>
      </RecoilRoot>
    </HelmetProvider>
  );
}

export default App;
