import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Navigation from './components/Navigation/Navigation';
import Product from './pages/Product';
import About from './pages/About';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Header from './pages/header'

const App = () => {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/product" exact component={Product} />
				<Route path="/about" exact component={About} />
				<Route path="/signin" exact component={SignIn} />
				<Route path="/cart" exact component={Cart} />
				<Route exact path="/header"  component={Home} />
			</Switch>
		</Router>
	);
};

export default App;
