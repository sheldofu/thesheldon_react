import React from "react";
import ReactDOM from "react-dom";
import PortCard from './portfolio-card';
import Grid from '@material-ui/core/Grid'

class Home extends React.Component {
	render() {
		return (
			<div>
				<Grid container spacing = {12} direction="row" alignItems="center" justify="center">
					<Grid item xs={6}>
				  		<PortCard></PortCard>
				  	</Grid>
					<Grid item xs={6}>
				  		<PortCard></PortCard>
				  	</Grid>
				</Grid>
		    </div>
		);
	}
}

export default Home;