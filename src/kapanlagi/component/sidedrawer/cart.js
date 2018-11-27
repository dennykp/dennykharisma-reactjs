import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    marginRight: theme.spacing.unit,
  },
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
  },
  section2: {
    margin: theme.spacing.unit * 2,
  },
  section3: {
    margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
  },
});

function MiddleDividers(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Cart
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              $4.50
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary">
         Happy Shopping.
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          Keranjang
        </Typography>
        <div>
          <Chip className={classes.chip} label="Adidas" />
          <Chip className={classes.chip} label="Adidas New" />
          <Chip className={classes.chip} label="Puma" />
          
        </div>
      </div>
      <div className={classes.section3}>
   
      </div>
    </div>
  );
}

MiddleDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MiddleDividers);