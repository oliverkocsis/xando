import React from 'react';
import { connect } from 'react-redux'
import { Container } from '@material-ui/core';
import './Layout.css';
import Grid from './Grid';
import Experiment from './Experiment';
import * as marks from '../game/marks';
import X from './marks/X';
import O from './marks/O';

function Layout(props) {
  let winner;
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
  }
  const enabled = winner === undefined;
  return (
    <Container fixed>
      <Grid spaces={props.marks} winners={props.winners} enabled={enabled} />
      <Experiment></Experiment>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    marks: state.marks,
    winner: state.winner,
    winners: state.winners,
  }
}

export default connect(mapStateToProps, null)(Layout);