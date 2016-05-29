import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegionList extends Component {
  render() {
    return (
      <div>
        <h4>Regions</h4>
        <ul className="list-group">
          <li className="list-group-item">test</li>
        </ul>
      </div>
    );
  }
}

function mapStatToProps({ selectedRegion, regionsRecapitulation}) {
  return { selectedRegion, regionsRecapitulation};
}

export default connect(mapStatToProps)(RegionList);