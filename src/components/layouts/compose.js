import React, { Component } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import { sendMessage,saveMessage } from "../../redux/actions/messages.action";
import Spinner from "../widgets/Spinner";
 class Compose extends Component {
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
        const USER_URL=`http://elie-epic-mail.herokuapp.com/api/v2/users/byemail`;
        fetch(`http://cors-anywhere.herokuapp.com/${USER_URL}`, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                email: this.state.receiverEmail
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    this.props.sendMessage({
                        receiverId: res.data[0].id,
                        subject: this.state.subject,
                        message: this.state.message
                    });
                }
            })
            .catch(err => console.log(err));
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
          {this.props.ui.loading?<Spinner/>:null}
          <button className="btn btn-secondary" onClick={this.saveMessage}>Save</button>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
    message:state.message,
    ui:state.ui
})

Compose.propTypes={
    sendMessage:PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    { sendMessage, saveMessage }
)(Compose);