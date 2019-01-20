import React from 'react';
import "./spin-letter.css";

class SpinLetter extends React.Component {

	state = {
		mounted: false
	}

	componentDidMount() {
		setTimeout(() => this.setState((state) => ({ mounted: true })))
	}

	render() {

		const startingPosition = {
			backgroundPosition: "0 " + (Math.random() * 1100) + "px"
		};

		return (
			<div style={startingPosition} className="letter" id={this.state.mounted ? this.props.letterId : undefined}></div>
		)
	};
};

export default SpinLetter;