import React, { Component } from 'react';

class SupportRequest extends Component {
  render() {
    return (
      <div>
        Support request component
        <div>
          <div>Add Request</div>
          <div className="row">
            <div className="col-md-3">
              3 infobox components
            </div>
            <div className="col-md-9">
              support request content component - contains UL
            </div>
          </div> 
        </div>
      </div>
    )
  }
}

export default SupportRequest;