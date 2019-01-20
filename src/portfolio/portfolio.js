import React from "react";
import ReactDOM from "react-dom";
import PortCard from './portfolio-card';
import Typography from '@material-ui/core/Typography';
import Port1 from './port_1_kana.png';
import Port2 from './port_2_talkboard.png';
import Port3 from './port_3_mean.jpg';
import Port4 from './port_4_mole.png'
import "./portfolio.css"

class Home extends React.Component {
	render() {
		return (
			<div>
				<div className = "portfolio-text-container">
				    <Typography variant="h4" color="inherit">
		              Portfolio 
		            </Typography>
		            <Typography component="p" className="portfolio-text-introduction">
		    	Work
		            </Typography>
	            </div>
				<div className="portfolio-container">
			  		<PortCard 
			  			title="Kana Learner"
			  			subHeader="practice your kanas"
			  			image={Port1}
			  			summary="Angular App for Japanese learners to practice the phoentic syllabaries of Japanese, Hiragana and Katakana"
			  			>
			  		</PortCard>
			  		<PortCard 
			  			title="Talkboard"
			  			subHeader="sub"
			  			image={Port2}
			  			summary="Playing around with a speech recongition API only supported in the latest versions of Google Chrome, Talkboard enables you sketch pictures with your voice...when it feels like it."
			  			>
			  		</PortCard>
					<PortCard 
			  			title="MEAN stack CMS"
			  			subHeader="sub"
			  			image={Port3}
			  			summary="A very simple CMS, providing RESTful endpoints to be comsumed. I'm using the MEAN stack, Mongodb holding the posts, The API being provided by Node + Express, and Angular on the front end. Link is to github project, actual CMS is hosted on Heroku"
			  			>
			  		</PortCard>
					<PortCard 
			  			title="Rambunctious Mole"
			  			subHeader="sub"
			  			image={Port4}
			  			summary="Phaser.js enables this rather rambunctious mole to navigate through a steadily narrowing tunnel. Or it will one day, more of a play around."
			  			>
			  		</PortCard>
			    </div>
			</div>
		);
	}
}

export default Home;