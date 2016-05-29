import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRegion } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    // fetch location
    this.props.fetchRegion(this.state.term);
    this.setState({ term: '' });
  }

  onInputChange(event) {
    this.setState({ term : event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for party"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-primary">Search</button>
          </span>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRegion }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);