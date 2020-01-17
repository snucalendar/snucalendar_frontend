import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export class SearchBar extends Component {
    render(){
        return (
            <div>
            <Input
                fluid
                placeholder='Search...'
                style={{ width: this.props.width, minWidth: this.props.minWidth }}
                size={this.props.size}
                />
            </div>
        );
    }
}

export default SearchBar;
