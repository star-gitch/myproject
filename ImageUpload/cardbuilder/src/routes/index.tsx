import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Login, Signup, Builder, Detail } from "../pages";
import { ToastProvider } from "react-toast-notifications";

export default function Index() {
  return (
    <Router>
      <ToastProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/builder" component={Builder} />
          <Route exact path="/detail/:id" component={Detail} />
        </Switch>
      </ToastProvider>
    </Router>
  );
}
