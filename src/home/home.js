import React from "react";
import ReactDOM from "react-dom";
import ReelFun from "./reel-fun.js"
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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

class Home extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
			    <ReelFun />
		    </div>
		);
	}
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);;