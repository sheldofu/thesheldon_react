import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Me from './me.jpg'
import Link from '@material-ui/core/Link';
import "./about-me.css"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  avatar: {
		margin: 'auto',
		width: 300,
		height: 300,
		padding: 0
  },

});

class About extends React.Component{
	render() {
		const { classes } = this.props;
		return (
            <div className="about-container">
              <div className="about-details">
                <Avatar alt="Sheldon Marsh" src={Me} className={classes.avatar} />
              </div>
              <div className="about-details">
                <p>If you weren't already blown away by my name spinning on the landing page, and the small collection of aging and incomplete projects on the portfolio page, here's some links to some other underwhelming works:</p>
                <ul>    
                  <li><Link href="https://github.com/sheldofu">GitHub</Link></li>
                  <li><Link href="https://www.linkedin.com/in/sheldon-marsh-61b48555/">LinkedIn</Link></li>
                  <li><Link href="https://www.the-sheldon.com/senior">Blog</Link></li>
                </ul>
              </div>
            </div>
        );
	}
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);