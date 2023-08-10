import React from 'react';

function Filter({ filterValue, setFilterValue }) {
  return (
    <input
      type="text"
      className='filter-input'
      placeholder="Filter users by name"
      value={filterValue}
      onChange={(e) => setFilterValue(e.target.value)}
    />
  );
}

export default Filter;