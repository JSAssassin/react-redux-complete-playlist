import React, { Component } from 'react';

export default class AddNinja extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : "",
      age: null,
      belt: null
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={this.handleChange}/>
          <br />
          <label htmlFor="age">Age</label>
          <input type="text" id="age" onChange={this.handleChange}/>
          <br />
          <label htmlFor="belt">Belt</label>
          <input type="text" id="belt" onChange={this.handleChange}/>
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
