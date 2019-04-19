import React, {Component} from 'react';
import { Route, Switch} from "react-router-dom";
// Pages
import HomePage from "./components/pages/HomePage";
import NoPageFound from "./components/pages/NoPageFound";
import GettingStarted from "./components/pages/GettingStarted";



class Routes extends Component {
    render() {
        return (
            <div style={{ margin: '18px 12px 0',minHeight:"76.1vh" }}>
                <Switch>
                    <Route path={"/"} exact /*strict*/ component={HomePage}/>
                    <Route path={"/getting-started"} exact /*strict*/ component={GettingStarted}/>

                    <Route /*strict*/ component={NoPageFound}/>
                </Switch>
    </div>
        );
    }
}

export default Routes;