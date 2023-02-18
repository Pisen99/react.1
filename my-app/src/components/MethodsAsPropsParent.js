import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        return (
            <div>
                <MethodsAsPropsChild isLoggedIn={this.state.isLoggedIn} />
            </div>
        )
    }
}

export default MethodsAsPropsParent