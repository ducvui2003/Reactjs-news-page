import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   onSearch(searchQuery.trim());
  // };

  return (
    <form
      className="form__search form-inline my-2 my-lg-0 px-2 "
      // onSubmit={handleSearchSubmit}
    >
      <div className="form-grp">
        <input
          className="input-search"
          type="search"
          placeholder="Tìm kiếm"
          aria-label="Search"
          // value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="ic-search small">
          <span className="">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
      </div>
    </form>
  );
};
export default SearchBar;
