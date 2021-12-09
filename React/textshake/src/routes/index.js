import LoginLayout from "../components/LoginLayout";
import {
    Login,
    SignUp,
    Plan,
    ForgotPassword,
    ResetPassword,
    Projects,
    SingleProject,
} from "../pages";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/single-project" component={SingleProject} />

                <LoginLayout>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/signup/plan" component={Plan} />
                    <Route
                        exact
                        path="/forgot-password"
                        component={ForgotPassword}
                    />
                    <Route
                        exact
                        path="/reset-password"
                        component={ResetPassword}
                    />
                </LoginLayout>
            </Switch>
        </Router>
    );
}
