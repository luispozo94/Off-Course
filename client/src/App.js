import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Navigation from './components/orderForm/Navigation';
import Product from './pages/Product';
import About from './pages/About';

const App = () => {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/product" exact component={Product} />
				<Route path="/about" exact component={About} />
			</Switch>
		</Router>
	);
};

export default App;
