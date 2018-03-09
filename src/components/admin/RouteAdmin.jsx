import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import Admin from "../admin.jsx"

class RouteAdmin extends React.Component {
    render() {
        return <Route
            path={this.props.path}
            render
            ={() => (this.props.token === null) ? <Redirect
            to={{
            pathname: '/login',
            state: {
                from: this.props.location
            }
        }}/>: <Admin/>}/>
    }
}
const mapStateToProps = (state) => {
    return {token: state.admin.token}
}
/*const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}*/

export default connect(mapStateToProps, null)(RouteAdmin);