import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import FieldSignUp from "./pages/SignUp";
import FieldLogin from "./pages/Login";
import FieldForgotPassword from "./pages/ForgotPassword";
import Contacts from "./pages/Contacts";
import Details from "./pages/Details";
import Settings from "./pages/Settings";
import Campaigns from "./pages/Campaigns";
import CreateCampaign from "./pages/CreateCampaigns";
import CreateContacts from "./pages/CreateContacts";
import "./assets/style/Style.css";
import { store } from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="d-flex justify-content-center">
            <Route exact path="/" component={FieldSignUp} />
            <Route exact path="/sign-up" component={FieldSignUp} />
            <Route path="/login" component={FieldLogin} />
            <Route path="/forgot-password" component={FieldForgotPassword} />
          </div>
          <Route path="/contacts" component={Contacts} exact={true} />
          <Route path="/contacts:id" component={Details} exact={true} />
          <Route path="/contacts/add" component={CreateContacts} exact={true} />
          <Route path="/details" component={Details} />
          <Route path="/settings" component={Settings} />
          <Route path="/campaigns" component={Campaigns} exact={true} />
          <Route
            path="/campaigns/add"
            component={CreateCampaign}
            exact={true}
          />
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
