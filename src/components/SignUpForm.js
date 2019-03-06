import React, { Component } from 'react';

class SignUpForm extends Component {
    render() {
        return (
            <div>
                <h2>Sign up</h2>
                <form>
                    <div>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' onChange={this.props.handleInput} />
                    </div>

                    <div>
                    <label htmlFor='pw'>Password</label>
                    <input type='text' name='pw' onChange={this.props.handleInput} />
                    </div>
                    <button onClick={this.props.handleSignUp}>Sign UP</button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
