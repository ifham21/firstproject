import React from 'react'

const searchItem = () => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault}>
      <label htmlFor="search">Search</label>
      <input 
        type="text" 
        id="search" 
        role='searchbox' 
        placeholder='Seach Items' 
      />

    </form>
  )
}

export default searchItem