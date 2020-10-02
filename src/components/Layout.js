import React from 'react';
import { connect } from 'react-redux'
import './Layout.css';
import Grid from './Grid';
import Fab from '@material-ui/core/Fab';
import ReplayIcon from '@material-ui/icons/Replay';
import * as actions from '../store/actions';

function Layout(props) {
  let winner;
  let reset;
  if (props.winner) {
    winner = <p>{props.winner}</p>
    reset = <Fab color="primary" aria-label="add" onClick={props.dispatch}><ReplayIcon /></Fab>
  }
  const enabled = winner === undefined;
  return (
    <div className="Layout">
      <Grid spaces={props.marks} enabled={enabled} />
      {winner}
      {reset}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    marks: state.marks,
    winner: state.winner,
  }
}

const actionCreators = {
  dispatch: actions.reset,
}

export default connect(mapStateToProps, actionCreators)(Layout);