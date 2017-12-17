import React from 'react'

export default class ShowResult extends React.Component {
    constructor(props) {
        super(props)
        
        this.amount = props.amount
        // console.log('constructor()')
    }
    
    //  componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps()')
    // }

    // componentWillUpdate() {
    //     console.log('componentWillUpdate()')
    // }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate()')
    //     console.log('__________________')
    // }

    // componentWillMount() {
    //     console.log('componentWillMount()')
    // }

    // componentDidMount() {
    //     console.log('componentDidMount()')
    // }

    render() {
        // console.log('render()')

        return (
            <div>{this.amount}</div>
        )
    }
}