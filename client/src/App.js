import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//pages
import Signup from './pages/signup';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Signup}></Route>
			</Switch>
		</Router>
	);
};

export default App;
