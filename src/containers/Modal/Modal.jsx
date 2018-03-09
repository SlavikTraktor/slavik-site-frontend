import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.scss'
class Modal extends React.Component {
    componentWillMount() {
        this.root = document.createElement("div")
        document
            .body
            .appendChild(this.root)
    }

    componentWillUnmount() {
        document
            .body
            .removeChild(this.root)
    }

    render() {
        return ReactDOM.createPortal(
            <div className='modal'>
                <button className='close_modal' onClick={this.props.onClose}>Close</button>
                {this.props.children}
            </div>, this.root)
    }
}

export default Modal