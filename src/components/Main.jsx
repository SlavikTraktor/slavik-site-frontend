import React from 'react'
import {Switch, Route} from 'react-router-dom'

import MakeLoadable from "../containers/Loading/Loading.jsx"

const Feed = MakeLoadable(import("./feed.jsx"))
const Pictures = MakeLoadable(import("./pictures.jsx"))

import About from "./about.jsx"
import AdminForm from "./admin/LoginForm"
import RouteAdmin from "./admin/RouteAdmin"
import Reviews from "./Reviews.jsx"

import './Main.scss'

const Main = () => (
    <main>
            <Switch>
                <Route exact path="/" component={Feed}/>
                <Route path="/about" component={About}/>
                <Route path="/pictures" component={Pictures}/>
                <Route path="/reviews" component={Reviews}/>
                <Route path="/login" component={AdminForm}/>
                <RouteAdmin path="/admin"/>
            </Switch>
    </main>
)

export default Main