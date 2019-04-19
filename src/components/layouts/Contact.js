import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <div className="contact__container">
          <div className="contact__info">
            <div className="contact__details">
              <img
                src="https://www.bing.com/th?id=OIP.E06jGgBh0Dxx_uIsfGyscAHaHa&w=212&h=212&c=7&o=5&pid=1.7"
                alt=""
              />
              <h3>
                <strong>Names:</strong> Ineza Alphonsine
              </h3>
              <h4>
                <strong>Email:</strong> ineeza@epicmail.com
              </h4>
              <a href="" className="btn btn-secondary">
                Message
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
