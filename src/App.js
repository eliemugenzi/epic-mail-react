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
import Drafts from "./components/layouts/Drafts";
import SentMails from "./components/layouts/SentMails";
import Contacts from "./components/layouts/Contacts";
import Contact from "./components/layouts/Contact";
import Groups from "./components/layouts/Groups";
import GroupMembers from "./components/layouts/GroupMembers";
import GroupMember from "./components/layouts/GroupMember";
import GroupMessages from "./components/layouts/GroupMessages";
import GroupSettings from "./components/layouts/GroupSettings";
import AuthCheck from "./components/widgets/AuthCheck";

const alertOptions = {
  timeout: 5000,
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
              <AuthCheck />
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/auth/login" component={Login} />
                <Route exact path="/auth/register" component={Register} />
                <Route exact path="/messages/inbox" component={Inbox} />
                <Route exact path="/messages/new" component={Compose} />
                <Route exact path="/messages/drafts" component={Drafts} />
                <Route exact path="/messages/sent" component={SentMails} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/contacts/:id" component={Contact} />
                <Route exact path="/groups" component={Groups} />
                <Route exact path="/groups/:id/" component={GroupMembers} />
                <Route
                  exact
                  path="/groups/:groupId/members/:memberId"
                  component={GroupMember}
                />
                <Route
                  exact
                  path="/groups/:id/messages"
                  component={GroupMessages}
                />
                <Route
                  exact
                  path="/groups/:id/settings"
                  component={GroupSettings}
                />
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
