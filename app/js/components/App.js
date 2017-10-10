import React from 'react'
import { connect } from 'react-redux'

import { getPhotosRequest } from '../main/actions'
import store from '../store'

const mapStateToProps = (state) => {
    return {
        state: state
    }
};

const mapDispathToProps = (dispatch) => {
    return {
        getPhotos: (queryParams) => dispatch(getPhotosRequest(queryParams))
    }
}
const AuthStatus = (props) => {
    console.log(props)
    return (
        <div className="auth-status">
            <div className="btn">
                <span className="animate-text">go authorize</span>
                <span>click to authorize</span>
            </div>
        </div> 
    )
}


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.getPhotos(this.props.state)
    }

    render() {
        return (
            <div className="main">
                <AuthStatus token={this.props.state.token} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App)