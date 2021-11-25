import React from "react";
import {
    Switch,
    Route,
    BrowserRouter as Router,
    useLocation,
} from "react-router-dom";

import {
    Home,
    Profile,
    OrderHistory,
    GroceryList,
    Food,
    SignIn,
    SignInCode,
    SignUp,
    Grocery,
    GroceryDetail,
    Landing,
} from "../pages";
import { PageTransition } from "@steveeeie/react-page-transition";

const Routes = () => {
    return (
        <>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/signIn" component={SignIn}></Route>
            <Route exact path="/signInCode" component={SignInCode}></Route>
            <Route exact path="/signUp" component={SignUp}></Route>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/order-history" component={OrderHistory} />
            <Route exact path="/grocery-list" component={GroceryList} />
            <Route exact path="/food" component={Food} />
            <Route exact path="/webcheckin" component={Home}></Route>
        </>
    );
};

export default () => (
    <Router>
        <Route
            render={({ location }) => {
                return (
                    <PageTransition
                        preset="moveToLeftFromRight"
                        transitionKey={location.pathname}
                    >
                        <Switch location={location}>
                            <Routes />
                        </Switch>
                    </PageTransition>
                );
            }}
        />
    </Router>
);
