import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    onFormSubmit(term);
  }

  return (
    <div className="search-bar ui segment" style={{ marginTop: '15px' }}>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input 
            type="text"
            placeholder="Type a word"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>  
    </div>
  );
}

export default SearchBar;