import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';


const Searchbar = ({onSubmit}) => {
  const [value, setValue] = useState('')

  const onEventSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  const onChange = e => {
    setValue(e.target.value );
  };

  return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={onEventSubmit}>
          <button type="submit" className={s.button}>
            <BiSearch size={20} />
          </button>

          <input
            className={s.input}
            onChange={onChange}
            value={value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
