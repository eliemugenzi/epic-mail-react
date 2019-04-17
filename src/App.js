import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Header from "./components/partials/Header";
import "./css/style.css";
import store from "./redux";

//Components import
import Index from "./components/layouts";
import Login from "./components/layouts/login";
import Register from "./components/layouts/register";
import Alert from "./components/widgets/Alert";
import Inbox from "./components/layouts/inbox";
import Compose from "./components/layouts/compose";

const alertOptions = {
  timeout: 3000,
  position: "top center",
  transition: "scale"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alert />
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/auth/login" component={Login} />
                <Route exact path="/auth/register" component={Register} />
                <Route exact path="/messages/inbox" component={Inbox} />
                <Route exact path="/messages/new" component={Compose} />
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
