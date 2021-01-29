import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {

	constructor(props) { 
		super(props)
		this.state = { text1: 'インドゾウ' }
	}

	onChange(e) {
		 this.setState( {text1: e.target.value} )
	}

	render () {
		return (
			<div>
				<input type="text" onChange = { this.onChange.bind(this) } />
				<p>{ this.state.text1 }</p>
			</div>
		);
	}
}

render(<App/>, document.getElementById('react_app1'));