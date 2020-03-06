import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Event from '../components/Event/Event';

export const mapStateToProps = (state) => ({
  searchEvent_list: state.evl.searchEvent_list,
  keyword: state.evl.keyword,
})

export class Search extends Component{
  render(){
    return(
      <div>
        <h1>'{this.props.keyword}'에 대한 검색결과입니다.</h1><br />
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
