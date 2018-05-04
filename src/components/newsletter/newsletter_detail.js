import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class NewsletterDetail extends Component {

  componentWillMount() {
    // this.props.fetchedItemById()
  }

  render() {
    return (
      <div>
        newsletter details
      </div>
    )
  }
}

function mapStateToProps() {
  return {
    fetchedItem: state.fetchedItem
  }
}

export default connect(mapStateToProps, actions)(NewsletterDetail);