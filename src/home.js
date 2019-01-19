import React from "react";
import ReactDOM from "react-dom";
import printMe from './print.js';
import Button from '@material-ui/core/Button';
import PortCard from './portfolio-card';

class Home extends React.Component {
	render() {
		return (
			<div>
			  	<PortCard></PortCard>
		    </div>
		);
	}
}

export default Home;