import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Logo from './sepatu.jpg'
import Logo2 from './sepatu2.jpg'
import Logo3 from './sepatu3.jpg'
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
         New Shoes 2018
        </Typography>
        <Typography component="p"><br/>
        <div id="wrapper">
  <div class="paragraph">

  </div>
  <div class="slider">
    <input checked="" type="radio" name="slider" id="slide0" selected="false"/>
    <input type="radio" name="slider" id="slide1" selected="false"/>
    <input type="radio" name="slider" id="slide2" selected="false"/>
    <div class="slides">
      <div class="slide">
        <img src={Logo} width="350px" height="400"/>
        <label class="next" for="slide1"></label>
        <div class="description">Adidas New</div>
      </div>
      <div class="slide">
        <label class="prev" for="slide0"></label>
        <img src={Logo2} width="350px" height="400"/>
        <label class="next" for="slide2"></label>
        <div class="description">Puma, new</div>
      </div>
      <div class="slide">
        <label class="prev" for="slide1"></label>
        <img src={Logo3} width="350px" height="400"/>
        <div class="description">Adidas Like</div>
      </div>
    </div>
    <div class="nav">
      <label class="bottom" for="slide0"></label>
      <label class="bottom" for="slide1"></label>
      <label class="bottom" for="slide2"></label>
    </div>
  </div>

</div>
         Adidas,Puma,Adidas New Like.
        </Typography>
      </Paper><br/>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);