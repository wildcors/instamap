import React from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'

import { getPhotosRequest } from '../main/actions'
import { saveToken } from '../main/actions'
import store from '../store'
import NeedAuth from './NeedAuth'
import Map from './Map'

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        getPhotos: (queryParams) => dispatch(getPhotosRequest(queryParams)),
        setToken: (value) => dispatch(saveToken(value))
    }
}


class App extends React.Component {
    constructor(props) {
        super(props)

        this.setTokenHandle = this.setTokenHandle.bind(this);
    }

    componentDidMount() {
        // this.props.getPhotos(this.props.state.queryParams)
    }

    setTokenHandle () {
        let querys = queryString.parse(location.hash);
        if(querys.access_token) {
            sessionStorage.setItem('accessToken', querys.access_token);
            this.props.setToken(querys.access_token);
            location.reload();
        }
    }

    render() {
        return (
            <div className="main">
                <div className="menu">
                    <div className="logo">photo-map</div>
                    {
                        sessionStorage.getItem('accessToken') ?
                        <div className="already btn">
                            You already authorized
                        </div>
                        :
                        <div className="btn-container">
                            <NeedAuth token={this.props.state.queryParams.token} saveToken={this.setTokenHandle} /> 
                        </div>
                    }
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