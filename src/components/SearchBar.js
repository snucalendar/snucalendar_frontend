import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';
import 'semantic-ui-css/semantic.min.css';

export const mapDispatchToProps = (dispatch) => ({
    onSearch: (keyword) => { dispatch(actionCreators.getEventSearch(keyword)); },
  });
  
  export class SearchBar extends Component {
    state = {
      value: '',
    }

    clickListener = () => {
      if (this.state.value !== '') {
        this.props.onSearch(this.state.value);
        this.setState({ ...this.state, value: '' });
        this.props.history.push('./search');
      }
    }

    render() {
      return (
        <Input
          className="SearchBar"
          style={{ height: '50px', width: this.props.width, minWidth: this.props.minWidth }}
          size={this.props.size}
          fluid
          value={this.state.value}
          onChange={(e) => this.setState({ ...this.state, value: e.target.value })}
          action={{
            className: 'searchButton', icon: 'search', size: this.props.size, onClick: () => this.clickListener(),
          }}
          placeholder="Search..."
        />
      );
    }
  }
  

export default connect(null, mapDispatchToProps)(withRouter(SearchBar));

