import React from 'react'
import {connect} from "react-redux"
import Modal from '../../containers/Modal//Modal.jsx'

import * as imgActions from "../../actions/imagesActions"

class BigPicture extends React.Component {
    componentWillMount() {
        this
            .props
            .getDesc(this.props.img)
    }

    componentWillReceiveProps(nextProps){
        this.refs.header.value = nextProps.header
        this.refs.description.value = nextProps.desc
    }

    componentWillUnmount() {
        this
            .props
            .clearDesc()
    }

    submit = (e) => {
        e.preventDefault()

        this
            .props
            .setMetaFunc(this.props.img, this.refs.header.value, this.refs.description.value, this.props.token)

        this
            .props
            .onClose()
    }

    render() {
        return (
            <Modal onClose={this.props.onClose}>
                <form onSubmit={this.submit}>
                    <input type="text" placeholder="Header" ref="header"/><br/>
                    <textarea cols="30" rows="10" placeholder="Description" ref="description"></textarea><br/>
                    <button type="submit">Submit</button>
                </form>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {header: state.images.header, desc: state.images.desc, token: state.admin.token}
}

function mapDispatchToProps(dispatch) {
    return {
        getDesc: (img) => dispatch(imgActions.getMetaImageAction(img)),
        clearDesc: () => dispatch(imgActions.clearDescAction()),
        setMetaFunc: (img, header, desc, token) => dispatch(imgActions.setMetaImageAction(img, header, desc, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BigPicture)