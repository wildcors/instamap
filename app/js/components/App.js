import React from 'react'
import { connect } from 'react-redux'

import { getPhotosRequest } from '../main/actions'
import store from '../store'
import AuthChecker from './AuthChecker'

const mapStateToProps = (state) => {
    return {
        state: state
    }
}
const test = () => {
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
                 <AuthChecker token={this.props.state.queryParams.token} goAuth={this.props.state.test} /> 
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App)