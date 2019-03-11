import React, { Component } from 'react';

class LogInForm extends Component {
    render() {
        return (
            <div>
                <h2>Log In</h2>
                <form>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type='text' name='username' onChange={this.props.handleInput} />
                    </div>
                    <div>
                        <label htmlFor='pw'>Password</label>
                        <input type='text' name='pw' onChange={this.props.handleInput} />
                    </div>
                    <button onClick={this.props.handleLogIn}>Log In</button>
                </form>
            </div>
        );
    }
}

export default LogInForm;
