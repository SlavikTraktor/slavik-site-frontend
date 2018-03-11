import React from 'react'
import {connect} from "react-redux"
import Img from 'react-image'

import BigPicture from './BigPicture/BigPicture.jsx'
import ChangeImageMeta from './ChangeImageMeta/ChangeImageMeta.jsx'

import * as imgActions from "../actions/imagesActions"

import {apiPrefix} from "../etc/config.json"

class MiniImage extends React.Component {
    state = {
        isBigImageModalOpen: false,
        isChangeModalOpen: false
    }

    toggleBigImageModal = () => {
        this.setState(state => ({
            isBigImageModalOpen: !state.isBigImageModalOpen
        }))
    }
    toggleChangeModal = () => {
        this.setState(state => ({
            isChangeModalOpen: !state.isChangeModalOpen
        }))
    }

    handleDelete = () => {
        this
            .props
            .deleteImage(this.props.img, this.props.token)
    }

    render() {
        return (
            <li className="my_picture">
                <Img
                    src={apiPrefix + "/images/min/" + this.props.img}
                    alt={this.props.img}
                    onClick={this.toggleBigImageModal}/> {this.props.token !== null && <div className="del_picture">
                    <button className="button-wo-els" onClick={this.toggleChangeModal}>Change</button>
                    <span onClick={this.handleDelete}>X</span>
                </div>}
                {this.state.isBigImageModalOpen && <BigPicture img={this.props.img} onClose={this.toggleBigImageModal}/>}
                {this.state.isChangeModalOpen && <ChangeImageMeta img={this.props.img} onClose={this.toggleChangeModal}/>}
            </li>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteImage: (img, token) => dispatch(imgActions.deleteImageAction(img, token))
    }
}

export default connect(null, mapDispatchToProps)(MiniImage)