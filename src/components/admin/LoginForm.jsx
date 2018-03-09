import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import * as adminActions from "../../actions/adminActions"

class AdminForm extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        const login = this.login.value
        const pass = this.pass.value
        if (login === undefined || pass === undefined) {
            return;
        }
        //console.log(login + " and " + pass)
        this
            .props
            .setToken(login, pass)
    }

    render() {
        if (this.props.token !== null) 
            return <Redirect
                to={{
                pathname: '/admin',
                state: {
                    from: this.props.location
                }
            }}/>

        let error = null;
        if (this.props.error !== null) {
            error = <div>{this.props.error}</div>
        }

        return (
            <div className="center">
                {error}
                <div>
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            placeholder="Login"
                            ref={(input) => {
                            this.login = input
                        }}/>
                        <input
                            type="text"
                            placeholder="Password"
                            ref={(input) => {
                            this.pass = input
                        }}/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {token: state.admin.token, error: state.admin.error}
}
const mapDispatchToProps = (dispatch) => {
    return {
        setToken: (login, pass) => dispatch(adminActions.setTokenAction(login, pass))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminForm)