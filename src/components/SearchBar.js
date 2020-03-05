import React, { Component, Fragment } from 'react';
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
        <Fragment>
          <div class='search-box-container' style = {
            { 
              margin: 0,
              height: '300%',
              padding: '5px',
              border: 0,
              outline: 'none'}
          }>
              <button class='submit' onClick={() => this.clickListener()} style = {{'border-radius' : 200, width: '50px', 'background-color': '#fff', height: '70px', cursor: 'pointer', 'font-size': '1.2em',}}>
                <i class='fa fa-search' ></i>
              </button>
          <input class='search-box' style={{
            width: 'calc(100% - 50px)',
            height: '70px',
            padding: '0 20px',
            'border-radius' : 50,
            float: 'left',
            'font-family': "Lato",
            'font-size': '1em',
            color: '#212121'}}
            size={this.props.size}
            fluid
            value={this.state.value}
            onChange={(e) => this.setState({ ...this.state, value: e.target.value })}
            placeholder="Search...">

            </input>
          </div>
        </Fragment>
      );
    }
  }
  

export default connect(null, mapDispatchToProps)(withRouter(SearchBar));

