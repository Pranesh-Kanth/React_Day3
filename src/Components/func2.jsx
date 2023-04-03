import React, { Component } from 'react'

export default class MyState extends Component {
    constructor()
    {
        super();
        this.state ={college :"SKCET"};
    }
  render() {
    return (
      <div>
        <h1>My college name is {this.state.college}</h1>
      </div>
    )
  }
}