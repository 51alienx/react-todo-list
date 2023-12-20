import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <form className='addForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">search</label>
        <input type="text" 
        placeholder='search'
        value={search}
        onChange={(x)=>setSearch(x.target.value)}
        

        />
    </form>
  )
}

export default Search