import React from 'react'
import {BounceLoader} from "react-spinners"
import Loadable from "react-loadable"

export const Loading = () => {
    return (
        <div>
            <BounceLoader color={'#a9a9a9'}/>
        </div>
    )
}

const MakeLoadable = (path) => {
    return Loadable({
        loader: () => path,
        loading: Loading
    })
}

export default MakeLoadable