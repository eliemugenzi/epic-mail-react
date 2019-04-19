import React, { Component } from "react";
import ContactItem from "../partials/ContactItem";

export default class Contacts extends Component {
  render() {
    return (
      <section className="contacts">
        <h2 className="text-center">Available Contacts</h2>
        <div className="contacts__list">
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
        </div>
      </section>
    );
  }
}
