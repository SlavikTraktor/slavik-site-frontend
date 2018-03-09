import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"
import * as adminActions from "../actions/adminActions"

import './Header.scss'

class Header extends React.Component {
    logOut = () => {
        this
            .props
            .logOut(this.props.token)
    }

    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Main</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/pictures'>Pictures</Link>
                        </li>
                        <li>
                            <Link to='/reviews'>Reviews</Link>
                        </li>
                    </ul>
                </nav>
                {this.props.token !== null && <Fragment>
                    <button onClick={this.logOut} className="button-wo-els">Quit</button>
                </Fragment>}
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {token: state.admin.token}
}
const mapDispatchToProps = (dispatch) => {
    return {
        logOut: (token) => dispatch(adminActions.logOutAction(token))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)