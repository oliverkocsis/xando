import React from 'react';
import './Experiment.css';
import { connect } from 'react-redux';
import *as actions from '../store/actions';
import analytics from '../analytics';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ReplayIcon from '@material-ui/icons/Replay';
import GroupIcon from '@material-ui/icons/Group';
import ComputerIcon from '@material-ui/icons/Computer';
import GridOnIcon from '@material-ui/icons/GridOn';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Experiment(props) {

  const reset = () => {
    props.dispatch();
  }

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const invite = () => {
    console.log('Wish List: Invite a friend to play');
    analytics.logEvent('wish', { feature: 'Invite a friend to play' });
    setOpen(true);
  };

  const computer = () => {
    console.log('Wish List: Play against the computer');
    analytics.logEvent('wish', { feature: 'Play against the computer' });
    setOpen(true);
  };

  const size = () => {
    console.log('Wish List: Change grid size');
    analytics.logEvent('wish', { feature: 'Change grid size' });
    setOpen(true);
  };

  return (
    <footer className="Experiment">
      <Tooltip title="Reset game">
        <IconButton onClick={reset}><ReplayIcon /></IconButton >
      </Tooltip>
      <Tooltip title="Invote a friend to play">
        <IconButton onClick={invite}><GroupIcon /></IconButton >
      </Tooltip>
      <Tooltip title="Play against the computer">
        <IconButton onClick={computer}><ComputerIcon /></IconButton >
      </Tooltip>
      <Tooltip title="Change grid size">
        <IconButton onClick={size} ><GridOnIcon /></IconButton >
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Sorry :( </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This feature does not work yet ... but we are working on it! Thank you very much for letting us know your interest in it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Gotcha!
          </Button>
        </DialogActions>
      </Dialog>
    </footer>
  );
}

const actionCreators = {
  dispatch: actions.reset,
}

export default connect(null, actionCreators)(Experiment);
