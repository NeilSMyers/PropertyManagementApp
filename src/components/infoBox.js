import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class InfoBox extends Component {

  handleSelected() {
    this.props.selectRequestType(this.props.type)
  }

  render() {
    return (
      <a onClick={() => this.handleSelected()}>
        <div className="info-box">
          <div className="info-box__text">
            
          </div>
          <div className="info-box__sub-text">
            {this.props.type}
          </div>
        </div>
      </a>
    )
  }
}

export default connect(null, actions)(InfoBox);