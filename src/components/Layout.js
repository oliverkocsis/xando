import React from 'react';
import { connect } from 'react-redux'
import './Layout.css';
import Grid from './Grid';

function Layout(props) {
  let winner;
  if (props.winner) {
    winner = <p>{props.winner}</p>
  }
  return (
    <div className="Layout">
      <Grid spaces={props.marks} />
      {winner}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    marks: state.marks,
    winner: state.winner,
  }
}

export default connect(mapStateToProps, null)(Layout);