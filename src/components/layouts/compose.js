import React, { Component } from "react";

export default class Compose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receiverEmail:"",
            subject: "",
            message:""
        }
    }

    sendMessage=e=>{
        e.preventDefault();
        console.log(this.state);
    }

    saveMessage=()=>{

    }
  render() {
    return (
      <section className="compose">
        <h2 className="text-center">Send new Message</h2>
        <form onSubmit={this.sendMessage}>
          <div className="field">
            <label htmlFor="to">To</label>
                    <input type="email"
                        value={this.state.receiverEmail}
                        onChange={e=>this.setState({receiverEmail:e.target.value})}
                        required />
          </div>
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input type="text"
                        value={this.state.subject}
                        onChange={e=>this.setState({subject:e.target.value})}
                        required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea cols="30" rows="10" 
                        value={this.state.message}
                        onChange={e=>this.setState({message:e.target.value})}
                        required />
          </div>
          <button className="btn btn-secondary" onClick={this.saveMessage}>Save</button>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </section>
    );
  }
}
