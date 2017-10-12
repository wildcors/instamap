import React from 'react'
import { connect } from 'react-redux'

import { getPhotosRequest } from '../main/actions'
import store from '../store'
import AuthChecker from './AuthChecker'
import Map from './Map'

const mapStateToProps = (state) => {
    return {
        state: state
    }
}
const test = (e) => {
    e.preventDefault();
    console.log('test')
} 

const mapDispathToProps = (dispatch) => {
    return {
        getPhotos: (queryParams) => dispatch(getPhotosRequest(queryParams)),
        test: () => dispatch(test)
    }
}


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.getPhotos(this.props.state.queryParams)
    }

    render() {
        return (
            <div className="main">
                <div className="menu">
                    <div className="logo">photo-map</div>
                    <div className="btn-container">
                        <AuthChecker token={this.props.state.queryParams.token} saveToken={this.props.state.test} /> 
                    </div>
                </div>
                <div className="map">
                    <Map />
                </div>
                <div className="photos">
                    <div className="photos-title">Results of searching:</div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App)