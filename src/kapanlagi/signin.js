import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import { BottomNavigation } from '@material-ui/core';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import fire from './component/fire';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },

  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },

  notchedOutline: {},
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 1,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 30px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});

function CustomizedInputs(props) {



    
  const { classes } = props;

  return (
      <div className="login-konten">
      <div className="headerlogin">Signin</div>
    <div className={classes.container}>
  
      <FormControl className={classes.margin}>
      
        <InputBase
          id="bootstrap-input"
          placeholder="Email"
          classes={{
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          }}
        />
      </FormControl>
      <FormControl className={classes.margin}>
     
        <InputBase
          id="bootstrap-input"
          placeholder="Password"
          type="password"
          classes={{
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          }}
        />
      </FormControl>
     
      <div className="buttonsignin">
      <button class="button button3">Sign in</button>
      </div>
     
  
    </div>  </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);