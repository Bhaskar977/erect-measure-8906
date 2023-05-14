import React from 'react';

const Sidebar = () => {
  return (
    <div className='cont'>
      <h3>Filter By</h3>
      <h2>Price</h2>
      <div>
        <input type="checkbox" />
        <label>1000-2000</label>
      </div>
      <div>
        <input type="checkbox" />
        <label>2000-5000</label>
      </div>
      <div>
        <input type="checkbox" />
        <label>500-1000</label>
      </div>
      <div>
        <input type="checkbox" />
        <label>Below 500</label>
      </div>
    </div>
  );
}

export default Sidebar;
