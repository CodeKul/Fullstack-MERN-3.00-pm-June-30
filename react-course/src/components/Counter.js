import React, { Component } from 'react'

export default class Counter extends Component {
constructor(props) {
    super(props)

    this.state = {count: 0};
    
    
}


incrementCounter = () => {
    this.setState({count: this.state.count + 1})
}

decrementCounter = () => {
    this.setState({count: this.state.count - 1})
}

componentDidMount() {
    console.log("Component Mounted")
}

shouldComponentUpdate() {
    console.log("Should Component update")
    return true;
}

componentDidUpdate(){
    console.log("Component Updated")
}


    render() {
        console.log("Initial Mount- Inside Render")
        return (
            <div>
                <h1>State and Component Life Cycle</h1>

                <h2>Counter: {this.state.count}</h2>


                <button onClick={this.incrementCounter}>Increment</button>
                <button onClick={this.decrementCounter} >Decrement</button>
            </div>
        )
    }
}
