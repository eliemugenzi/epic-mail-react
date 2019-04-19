import React, { Component } from "react";
import SingleSentMail from "./SingleSentMail";
export default class SentMails extends Component {
  render() {
    return (
      <section className="inbox">
        <div className="inbox__mail--lists">
          <h3 className="text-center">Sent Mails</h3>
          <div className="inbox__mail--mails">
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta sapiente vitae fuga quas magni, debitis soluta. Eum,
                  repellendus omnis voluptates dolore aspernatur aut soluta
                  dolor.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta sapiente vitae fuga quas magni, debitis soluta. Eum,
                  repellendus omnis voluptates dolore aspernatur aut soluta
                  dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
        <SingleSentMail />
      </section>
    );
  }
}
