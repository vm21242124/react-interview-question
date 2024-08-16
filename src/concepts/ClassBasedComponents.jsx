import React, { Component } from 'react'

export default class ClassBasedComponents extends Component {
    constructor(props){
        super(props);
        this.state={
            message:"hello world",
            count:0
        }
        console.log("initializing");
        
    }
    componentWillMount(){
        console.log("component will mount");
    }
    componentDidMount(){
        console.log("did mount");
    }
    componentWillUnmount(){
        console.log("component will unmount");
    }
    shouldComponentUpdate(){
        console.log("should update");
        return true;
    }
    inc=()=>{
        this.setState(prevState=>({count:prevState.count+1}))
    }
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.state.message}</p>
        <p>{this.state.count}</p>
        <button onClick={this.inc}>inc</button>
      </div>
    )
  }
}
