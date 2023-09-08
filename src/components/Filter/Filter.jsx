import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Z-яА-Я ])?[a-zA-Z-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
