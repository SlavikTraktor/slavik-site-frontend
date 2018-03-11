import React, {Component} from 'react'
import Img from 'react-image'

import './feed.scss'

export default class Feed extends Component {
    render() {
        return (
                <div>
                    <section className="main">
                        <Img src="/img/main-image.png" alt="" decode={false}/>
                    </section>
                    <article className="main-article">
                        <h1>Who am I?</h1>
                        <p>My name is Slava. Im web developer.<br/> This is my first project</p>
                    </article>
                </div>
        )
    }
}
