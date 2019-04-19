import React, { Component } from "react";
import ReplyMessage from "./ReplyMessage";
export default class Drafts extends Component {
  render() {
    return (
      <section className="inbox">
        <div className="inbox__mail--mails">
          <h3 className="text-center">Your Drafts</h3>
          <div className="mail">
            <header>
              <div className="mail__sender--pic">
                <img
                  src="https://www.bing.com/th?id=OIP.bfRSHPnKwNiFfqIPCtpgkgHaHa&w=210&h=210&c=7&o=5&pid=1.7"
                  alt=""
                />
              </div>
              <strong>Elie Mugenzi</strong>
              <span>Today</span>
            </header>
            <div className="mail__body">
              <h3>Invitation to Fellowship</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                sapiente vitae fuga quas magni, debitis soluta. Eum, repellendus
                omnis voluptates dolore aspernatur aut soluta dolor.
              </p>
            </div>
          </div>
          <div className="mail">
            <header>
              <div className="mail__sender--pic">
                <img
                  src="https://www.bing.com/th?id=OIP.bfRSHPnKwNiFfqIPCtpgkgHaHa&w=210&h=210&c=7&o=5&pid=1.7"
                  alt=""
                />
              </div>
              <strong>Elie Mugenzi</strong>
              <span>Today</span>
            </header>
            <div className="mail__body">
              <h3>Invitation to Fellowship</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                sapiente vitae fuga quas magni, debitis soluta. Eum, repellendus
                omnis voluptates dolore aspernatur aut soluta dolor.
              </p>
            </div>
          </div>
          <div className="mail">
            <header>
              <div className="mail__sender--pic">
                <img
                  src="https://www.bing.com/th?id=OIP.bfRSHPnKwNiFfqIPCtpgkgHaHa&w=210&h=210&c=7&o=5&pid=1.7"
                  alt=""
                />
              </div>
              <strong>Elie Mugenzi</strong>
              <span>Today</span>
            </header>
            <div className="mail__body">
              <h3>Invitation to Fellowship</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                sapiente vitae fuga quas magni, debitis soluta. Eum, repellendus
                omnis voluptates dolore aspernatur aut soluta dolor.
              </p>
            </div>
          </div>
        </div>
        <div className="inbox__mail--item">
          <ReplyMessage />
        </div>
      </section>
    );
  }
}
