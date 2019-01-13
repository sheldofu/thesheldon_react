import React from "react";
import ReactDOM from "react-dom";
import printMe from './print.js';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

class Home extends React.Component {
	render() {
		return (
			<div>
			  	<Card>
			  		Test
			  	</Card>
			    <Button variant="contained" color="primary">
			      Hello World
			    </Button>
		    </div>
		);
	}
}

export default Home;