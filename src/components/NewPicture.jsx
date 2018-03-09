import React from 'react'
import {connect} from "react-redux"

import * as imgActions from "../actions/imagesActions"

import Modal from "../containers/Modal//Modal.jsx"

class NewPicture extends React.Component {
    state = {
        isModalOpen: false
    }

    toggleModal = () => {
        this.setState(state => ({
            isModalOpen: !state.isModalOpen
        }))
    }

    submit = (e) => {
        e.preventDefault()
        this.toggleModal()
        this
            .props
            .addImageFunc(this.refs.file.files[0], this.refs.header.value, this.refs.description.value, this.props.token)

        /*this
            .props
            .setMetaFunc(this.refs.file.files[0].name, this.refs.header.value, this.refs.description.value, this.props.token)*/
    }

    render() {
        return (
            <div className="add-new-picture">
                <button className="button-wo-els" onClick={this.toggleModal}>New picture</button>
                {this.state.isModalOpen && <Modal onClose={this.toggleModal}>
                    <form onSubmit={this.submit}>
                        <input type="text" placeholder="Header" ref="header"/><br/>
                        <input type="file" accept=".jpg, .jpeg, .png" ref="file" required/><br/>
                        <textarea cols="30" rows="10" placeholder="Description" ref="description"></textarea><br/>
                        <button type="submit">Submit</button>
                    </form>
                </Modal>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {token: state.admin.token}
}

function mapDispatchToProps(dispatch) {
    return {
        addImageFunc: (img, header, desc, token) => dispatch(imgActions.addImageAction(img, header, desc, token)),
        setMetaFunc: (img, header, desc, token) => dispatch(imgActions.setMetaImageAction(img, header, desc, token))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPicture)