import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Me from './me.jpg'

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
		margin: 30,
		width: 300,
		height: 300,
		padding: 0
  },

});

class About extends React.Component{
	render() {
		const { classes } = this.props;
		return (
							<Avatar alt="Sheldon Marsh" src={Me} className={classes.avatar} />				
				);
	}
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);