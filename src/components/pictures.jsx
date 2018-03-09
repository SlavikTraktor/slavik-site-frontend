import React, {Component} from 'react'
import {connect} from "react-redux"
import Masonry from 'react-masonry-component'

import * as imgActions from "../actions/imagesActions"

import './pictures.scss'
import MiniImage from './MiniImage.jsx'
import NewPicture from './NewPicture.jsx'

class Pictures extends Component {

    componentWillMount() {
        this
            .props
            .getImageIdsFunc()
    }

    componentWillUnmount() {
        this
            .props
            .clearImages()
    }

    render() {
        return (
            <div className="center">
                <article className="main-article">
                    <h1>Pictures</h1>
                    <p>Sometimes I draw pictures<br/> and upload it hear.</p>
                </article>
                {this.props.token !== null && <NewPicture/>}
                <Masonry elementType={'ul'}
                    className="all-pictures"
                    options={{
                    horizontalOrder: true,
                    columnWidth: 190,
                    transitionDuration: 0
                }}>
                    {this
                        .props
                        .pictures
                        .map((img, index) => {
                            return (<MiniImage key={index} img={img} token={this.props.token}/>)
                        })}
                </Masonry>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {pictures: state.images.list, token: state.admin.token}
}

function mapDispatchToProps(dispatch) {
    return {
        getImageIdsFunc: () => dispatch(imgActions.getImagesListAction()),
        addImageFunc: (img, token) => dispatch(imgActions.addImageAction(img, token)),
        clearImages: () => dispatch(imgActions.clearImageListAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pictures)