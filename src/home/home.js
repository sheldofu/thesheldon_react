import React from "react";
import ReactDOM from "react-dom";
import ReelFun from "./reel-fun.js"
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  reel: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  subtext: {
    display: 'none',
    textAlign:'center',
    marginTop: 40,
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
});

class Home extends React.Component {
	render() {
		const { classes } = this.props;
		return (
        <div>
    			<div className={classes.reel}>
    			    <ReelFun />
          </div>
          <Typography color="primary" variant="h2" className={classes.subtext}>
             Sheldon Marsh
          </Typography>
        </div>

		);
	}
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);;