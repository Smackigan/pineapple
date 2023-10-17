import React from 'react';
import Layout from './layouts/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div>
				<Layout />
			</div>
		</Router>
	);
}

export default App;
