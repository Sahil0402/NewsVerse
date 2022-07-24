import React, { Component } from 'react'
import loader from './loader.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={loader} alt="" style={{ width: "30px", height: "30px" }} />
            </div>
        )
    }
}
