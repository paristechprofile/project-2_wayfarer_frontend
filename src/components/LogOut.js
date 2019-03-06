import React, { Component } from 'react';
//import css
class LogOut extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleLogOut}>Log Out</button>
            </div>
        );
    }
}

export default LogOut;
