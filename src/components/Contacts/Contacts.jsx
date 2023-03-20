import ContactsListItem from 'components/ContactsItem';
import PropTypes from 'prop-types';
import { ContactList } from './Contacts.styled';

const Contacts = ({ data, onDelete }) => {
  const handleOnClick = evt => {
    onDelete(evt);
  };
  return (
    <ContactList>
      {data.map(({ name, number, id }) => {
        return (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={handleOnClick}
          />
        );
      })}
    </ContactList>
  );
};

export default Contacts;

Contacts.propTypes = {
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string,
};
