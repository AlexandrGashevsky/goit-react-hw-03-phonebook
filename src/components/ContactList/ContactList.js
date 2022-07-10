import React from "react";
import contactListStyles from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={contactListStyles.list}>
      {contacts.map((contact) => (
        <li className={contactListStyles.item} key={contact.id}>
          <p className={contactListStyles.name}>
            {contact.name}: {contact.number}
          </p>
          {
            <button
              className={contactListStyles.button}
              data-key={contact.id}
              type="button"
              name="delete"
              onClick={onDelete}
            >
              Delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired
}



export default ContactList;
