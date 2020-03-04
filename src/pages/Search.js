import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Event from '../components/Event';
import Header from '../components/Header';

export const mapStateToProps = (state) => ({
  searchEvent_list: state.evl.searchEvent_list,
})

export class Search extends Component{
  render(){
    return(
      <div>
      <Header menu = '' />
        {this.props.searchEvent_list
          .map(ev => (
            <Event
              title={ev.title}
            />
          ))}
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(withRouter(Search));
