import React from 'react';
import { connect } from 'react-redux'
import './Layout.css';
import Grid from './Grid';

function Layout(props) {
  return (
    <div className="Layout">
      <Grid spaces={props.marks} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    marks: state.marks,
  }
}

export default connect(mapStateToProps, null)(Layout);