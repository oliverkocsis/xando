import React from 'react';
import { connect } from 'react-redux'
import './Layout.css';
import Grid from './Grid';
import Fab from '@material-ui/core/Fab';
import ReplayIcon from '@material-ui/icons/Replay';
import * as actions from '../store/actions';
import * as marks from '../game/marks';
import X from './X';
import O from './O';

function Layout(props) {
  let winner;
  let reset;
  if (props.winner != null) {
    switch (props.winner) {
      case marks.X:
        winner = <div className="Winner"><X /></div>;
        break;
      case marks.O:
        winner = <div className="Winner"><O /></div>;
        break;
      default:
        winner = null;
        break;
    }

    reset = <div className="Reset"><Fab color="primary" aria-label="add" onClick={props.dispatch}><ReplayIcon /></Fab></div >
  }
  const enabled = winner === undefined;
  return (
    <div className="Layout">
      <Grid spaces={props.marks} enabled={enabled} />
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