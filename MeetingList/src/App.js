import React, { useState } from "react";
import Header from "./components/layout/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MeetingList from "./components/meeting/MeetingList";
import TopicList from "./components/meeting/TopicList";
import SpecificList from "./components/meeting/SpecificList";
import TopicArgument from "./components/meeting/TopicArgument";
import SpecificCard from "./components/meeting/SpecificCard";
import TopicDeepList from "./components/meeting/TopicDeepList";
import SpecificArgument from "./components/meeting/SpecificArgument";
import SpecificExtra from "./components/meeting/SpecificExtra";
import SpecificSubTopic from "./components/meeting/SpecificSubTopic";
import ScoreBoard from "./components/meeting/ScoreBoard";
import FinalEnd from "./components/meeting/FinalEnd";
import TopicSubList from "./components/meeting/TopicSubList";
import RouterContext from "./context/RouterContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
    const [pageRouter, setPageRouter] = useState({
        router: "",
        homecolor: "",
        settingcolor: "",
        homebordercolor: "",
        settingbordercolor: "",
        hometitlecolor: "",
        settingtitlecolor: "",
    });

    return (
        <Provider store={store}>
            <BrowserRouter>
                <RouterContext.Provider value={{ pageRouter, setPageRouter }}>
                    <div className="App">
                        <Header />
                        <Switch>
                            <Route exact path="/" component={MeetingList} />
                            <Route path="/topic-list" component={TopicList} />
                            <Route
                                path="/specific-list"
                                component={SpecificList}
                            />
                            <Route
                                path="/topic-argument/:id"
                                component={TopicArgument}
                            />
                            <Route
                                path="/specific-card/:id"
                                component={SpecificCard}
                            />
                            <Route
                                path="/topic-deep-list/:id/:index"
                                component={TopicDeepList}
                            />
                            <Route
                                path="/specific-argument/:id"
                                component={SpecificArgument}
                            ></Route>
                            <Route
                                path="/specific-extra/:id/:type/:item_id"
                                component={SpecificExtra}
                            ></Route>
                            <Route
                                path="/specific-subtopic/:id"
                                component={SpecificSubTopic}
                            ></Route>
                            <Route
                                path="/scoreboard/:id"
                                component={ScoreBoard}
                            ></Route>
                            <Route
                                path="/final-end/:id/:refname"
                                component={FinalEnd}
                            ></Route>
                            <Route
                                path="/topic-sub-list/:id"
                                component={TopicSubList}
                            ></Route>
                        </Switch>
                    </div>
                </RouterContext.Provider>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
