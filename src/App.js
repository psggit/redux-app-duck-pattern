import logo from "./logo.svg";
import { LandingContainer } from "./Landing/index";
import { HomeContainer } from "./Home/index";
import { Router } from "react-router";
import { Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import { Provider } from "react-redux";
import store from "./store/store";
import { landingSummaryReducer } from "./Landing/duck";

function App() {
  const history = createHistory();
  console.log("str", store.getState(), "typeee", landingSummaryReducer);
  return (
    <div className="App">
      <Router history={history}>
        <Provider store={store}>
          <Route exact path="/landing" component={LandingContainer} />
          <Route exact path="/home" component={HomeContainer} />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
