import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Icon, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import 'semantic-ui-css/semantic.min.css';

export const mapDispatchToProps = (dispatch) => ({
    onSearch: (keyword) => { dispatch(actionCreators.getEventSearch(keyword)); },
    keepKeyword: (keyword) => {dispatch(actionCreators.keepKeyword(keyword)); },
  });

  export class SearchBar extends Component {
    state = {
      value: '',
    }

    clickListener = () => {
      if (this.state.value !== '') {
        this.props.onSearch(this.state.value);
        this.props.keepKeyword(this.state.value);
        this.props.history.push('./search');
      }
    }

    render() {
      return (
        <Fragment>
            <Grid columns={3} style={{
              margin: 0,
              height: 'auto',
              padding: '5px',
              backgroundColor : '#f0f1f3',
              outline: 'none',
              borderRadius : '50px',
            }} verticalAlign="middle">

              <Grid.Column style={{width:'80%'}}>
              <input class='search-box' style={{
                width: '100%',
                border : 'none',
                'border-radius' : 50,
                float: 'left',
                'font-family': "Lato",
                'font-size': '1em',
                color: '#212121',
                backgroundColor : '#f0f1f3',}}
                value={this.state.value}
                onChange={(e) => this.setState({ ...this.state, value: e.target.value })}
                placeholder="행사 검색" />
              </Grid.Column>
              <Grid.Column style={{width:'10%'}}>
                <button class='search' onClick={() => this.clickListener()} style = {{'border' : 'none', padding:'0 0 0', backgroundColor: '#f0f1f3', cursor: 'pointer', 'font-size': '1.5em',}}>
                  <Icon name='search' />
                </button>
              </Grid.Column>
              <Grid.Column style={{width:'10%'}}>
                <button class='filter' onClick={() => this.clickListener()} style = {{'border' : 'none', padding:'0 0 0', backgroundColor: '#f0f1f3', cursor: 'pointer', 'font-size': '1.5em',}}>
                  <Icon name='filter' />
                </button>
              </Grid.Column>
            </Grid>
        </Fragment>
      );
    }
  }
  

export default connect(null, mapDispatchToProps)(withRouter(SearchBar));

