import React, { Component } from 'react';
import DayEventList from './DayEventList';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  toggleEventListModal: () => dispatch(actionCreators.toggleEventListModal()),
});

export const mapStateToProps = (state) => ({
  isAnyDayClicked: state.main.isAnyClicked, // 이거는 여기로 가져올지말지 좀더생각해보기
});

class Day extends Component {
  componentDidMount() {
    this.props.toggleDayEventList(this.props.isAnyDayClicked);
  }

  handleClick = (e) => {
    e.stopPropagation();
    const isClicked = e.target.id === 'background' ? false : true;
    this.props.toggleDayEventList(isClicked);
  }

  render() {
    const events = this.props.events.map((e, i) => <li key={i}>{e.title}</li>);
    const modal = this.props.isAnyDayClicked && this.props.events.length ? <DayEventList events={this.props.events} toggleDayEventList={this.toggleDayEventList} /> : null;
    const style = this.props.isFirst ? {gridColumnStart: this.props.firstDay+1} : null;
    return (
      <div style={style} onClick={this.handleClick}>
        {this.props.date}일
        <ul>{events}</ul>
        {modal}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Day);
