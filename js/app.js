import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a>1234567</a>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
