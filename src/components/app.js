import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/SearchBar';
import RegionList from '../containers/RegionList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>Search PILKADA 2015 Recapitulation</h3>
        <SearchBar />
        <hr/>
        <RegionList />
      </div>
    );
  }
}
