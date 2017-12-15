import React from 'react'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { amount: 0 };

        this.increase = this.increase.bind(this);
    }

    increase() {
        this.setState({
            amount: this.state.amount+1
        });
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps()')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate()', this.state, nextState)

        return this.state.amount < nextState.amount;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate()')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()')
        console.log('__________________')
    }

    componentWillMount() {
        console.log('componentWillMount()')
    }

    componentDidMount() {
        console.log('componentDidMount()')
    }

    render() {
        console.log('render()')
        return (
            <div>
                <button onClick={this.increase}>+</button>
                <div>{this.state.amount}</div>
            </div>
        );
    }
}