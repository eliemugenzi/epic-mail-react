import React, { Component } from "react";

export default class SingleSentMail extends Component {
  render() {
    return (
      <div className="inbox__mail--item">
        <header>
          <div className="sender__address">
            <div className="sender__pic">
              <img
                src="https://www.bing.com/th?id=OIP.1yoSL-WO0YU5mQKROudvswHaHa&w=203&h=203&c=7&o=5&pid=1.7"
                alt=""
              />
            </div>
            <div className="sender__details">
              <h6>
                From:<strong>Elie</strong>
                {"<"}eliemugenzi@epicmail.com{">"}
              </h6>
              <h6>
                To:<strong>Samuel Adafia</strong>
                {"<"}adafia@epicmail.com{">"}
              </h6>
            </div>
          </div>
          <div className="receiver__actions">
            <a href="/#" className="btn__small btn-white">
              <i className="fa fa-reply" />
            </a>
            <a href="/#" className="btn__small btn-white">
              <i className="fa fa-step-backward" />
            </a>
            <a href="/#" className="btn__small btn-white">
              <i className="fa fa-trash" />
            </a>
          </div>
        </header>
        <div class="inbox__mail--body">
          <h3>Invitation to Andela Fellowship</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
            architecto, natus ducimus rerum aut assumenda odio incidunt, quis,
            beatae eligendi amet et nesciunt. Cumque laborum in dolorum
            laudantium eaque repellat dolor deleniti error aliquam placeat harum
            eveniet eius asperiores incidunt ratione a tenetur, et enim sunt!
            Voluptatem, quibusdam adipisci.
          </p>
        </div>
      </div>
    );
  }
}
