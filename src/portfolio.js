import React from "react";
import ReactDOM from "react-dom";
import PortCard from './portfolio-card';
import Grid from '@material-ui/core/Grid';
import Port1 from './port_1_kana.png';
import Port2 from './port_2_talkboard.png';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Grid container spacing = {32} direction="row" alignItems="flex-start" justify="center">
					<Grid item xs={3}>
				  		<PortCard 
				  			title="Kana Learner"
				  			subHeader="practice your kanas"
				  			image={Port1}
				  			summary="Angular App for Japanese learners to practice the phoentic syllabaries of Japanese, Hiragana and Katakana"
				  			>
				  		</PortCard>
				  	</Grid>
					<Grid item xs={3}>
				  		<PortCard 
				  			title="Talkboard"
				  			subHeader="sub"
				  			image={Port2}
				  			summary="Playing around with a speech recongition API only supported in the latest versions of Google Chrome, Talkboard enables you sketch pictures with your voice...when it feels like it."
				  			>
				  		</PortCard>
				  	</Grid>
					<Grid item xs={3}>
				  		<PortCard 
				  			title="Talkboard"
				  			subHeader="sub"
				  			image={Port2}
				  			summary="Playing around with a speech recongition API only supported in the latest versions of Google Chrome, Talkboard enables you sketch pictures with your voice...when it feels like it."
				  			>
				  		</PortCard>
				  	</Grid>
				</Grid>
		    </div>
		);
	}
}

export default Home;