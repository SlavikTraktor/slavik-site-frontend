import React from 'react'
import {connect} from "react-redux"
import Img from "react-image"
import Modal from '../../containers/Modal//Modal.jsx'

import {apiPrefix} from "../../etc/config.json"

import * as imgActions from "../../actions/imagesActions"

class BigPicture extends React.Component {
    componentWillMount() {
        this.props.getDesc(this.props.img)
    }

    componentWillUnmount() {
        this.props.clearDesc()
    }

    render() {
        return (
            <Modal onClose={this.props.onClose}>
                <Img src={apiPrefix + "/images/img/" + this.props.img} alt={this.props.img}/><br/>
                <h2>{this.props.header}</h2>
                <p>{this.props.desc}</p>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {header: state.images.header, desc: state.images.desc}
}

function mapDispatchToProps(dispatch) {
    return {
        getDesc: (img) => dispatch(imgActions.getMetaImageAction(img)),
        clearDesc: () => dispatch(imgActions.clearDescAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BigPicture)