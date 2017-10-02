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


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getPhotos(this.props.state)
    }

    render() {
        return (
            <div>hhh</div>
        )
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App)