import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
	return (
		<div className="header">
			<div className="header__left">
				<Link className="link" to="/">
					Home
				</Link>
				<Link className="link" to="/product">
					Product
				</Link>
				<Link className="link" to="/about">
					About
				</Link>
			</div>
			<div className="header__center">
				<Link className="animate-pulse flex space-x-4" to="/Home">
					OFF~COURSE
				</Link>
			</div>
			<div className="header__right">
				<Link className="link" to="/SignIn">
					Sign In
				</Link>
				<Link className="link" to="/Cart">
					Cart
				</Link>
				<Link className="link" to="/Search">
					Search
				</Link>
			</div>
		</div>
	);
};

export default Navigation;
// 	<nav class="navbar navbar-expand-lg navbar-light bg-light">
// 		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
// 			<span class="navbar-toggler-icon"></span>
// 		</button>
// 		<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
// 			<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
// 				<li class="nav-item active">
// 					<div class="hover-underline-animation">
// 						<LinkContainer to="/">
// 							<Nav.Link>Home</Nav.Link>
// 						</LinkContainer>
// 					</div>
// 				</li>
// 				<li class="nav-item">
// 					<div class="hover-underline-animation">
// 						<LinkContainer to="/product">
// 							<Nav.Link to="/product">Product</Nav.Link>
// 						</LinkContainer>
// 					</div>
// 				</li>
// 				<li class="nav-item">
// 					<div class="hover-underline-animation">
// 						<LinkContainer to="/about">
// 							<Nav.Link to="/about"> About </Nav.Link>
// 						</LinkContainer>
// 					</div>
// 				</li>
// 				<li id="header" class="nav-item">
// 					<div class="hover-underline-animation">
// 						<LinkContainer to="/about">
// 							<Nav.Link to="/about"> OFF~COURSE </Nav.Link>
// 						</LinkContainer>
// 					</div>
// 				</li>
// 				<li id="nav-right" class="nav-item">
// 					<div class="hover-underline-animation">
// 						<LinkContainer to="/about">
// 							<Nav.Link to="/about"> Sign In </Nav.Link>
// 						</LinkContainer>
// 					</div>
// 				</li>
// 				<li class="nav-item">
// 					<div class="hover-underline-animation">
// 						<LinkContainer to="/about">
// 							<Nav.Link to="/about"> Cart </Nav.Link>
// 						</LinkContainer>
// 					</div>
// 				</li>
// 				<li class="nav-item">
// 					<div class="hover-underline-animation">
// 						<LinkContainer to="/about">
// 							<Nav.Link to="/about"> Search </Nav.Link>
// 						</LinkContainer>
// 					</div>
// 				</li>
// 			</ul>
// 		</div>
// 	</nav>
