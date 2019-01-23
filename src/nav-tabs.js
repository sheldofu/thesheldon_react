import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PortfolioIcon from '@material-ui/icons/CameraEnhance';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Home" icon={<HomeIcon />} component={Link} to="/" />
            <Tab label="Portfolio" icon={<PortfolioIcon />} component={Link} to="/portfolio" />
            <Tab label="About" icon={<PersonIcon />} component={Link} to="/about" />
          </Tabs>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);