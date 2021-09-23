import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Home from "./pages/Home"

const App = () => {
    return (
        <Router>
            {/* // navigation would go here  */}
            <Switch>
                <Route exact path="/" component={Home}></Route>
                {/* <Route path="/thanks" component={Thanks}></Route>
                <Route path="/:productName" component={Product}/> */}
            </Switch>
        </Router>
    )
}

export default App;