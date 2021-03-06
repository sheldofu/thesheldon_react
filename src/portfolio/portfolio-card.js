import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import LinkIcon from "@material-ui/icons/Link";
import Link from '@material-ui/core/Link';

const styles = theme => ({
  card: {
    maxWidth: 280,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  }
});

class PortfolioCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={this.props.image}
          title={this.props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.title}
          </Typography>
          <Typography component="p">
          {this.props.summary} 
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Link to project">
            <Link href={this.props.link} target="_blank" rel="noopener"><LinkIcon color="primary" /></Link>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

PortfolioCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PortfolioCard);
