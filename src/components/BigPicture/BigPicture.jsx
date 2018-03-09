import React from 'react'
import {connect} from "react-redux"

import * as imgActions from "../actions/imagesActions"

class BigPicture extends React.Component{
    componentWillMount(){

    }

    render(){
        return (
            <div>sdfg</div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(null, mapDispatchToProps)(BigPicture)