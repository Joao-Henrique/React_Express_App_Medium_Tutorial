import React, { Component } from 'react';
import logo from './logo.svg';
import { sum } from './Calculate';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: '' };
	}

	callAPI() {
		fetch('http://localhost:9000/testAPI')
			.then((res) => res.text())
			.then((res) => this.setState({ apiResponse: res }))
			.catch((err) => err);
	}

	componentDidMount() {
		this.callAPI();
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">“Welcome to ChaENSE701</h1>
					<h3>{sum(2, 4)}</h3>
				</header>
				<p className="App-intro">{this.state.apiResponse}</p>
			</div>
		);
	}
}

export default App;
