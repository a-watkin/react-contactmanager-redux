import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    // passes the contacts into the props
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.PropTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

// allows for the state to be put into props in componentDidMount
const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
