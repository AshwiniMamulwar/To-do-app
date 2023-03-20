import { useState } from "react"
import { MdSearch } from "react-icons/md"

const Search = ({ filterItems }) => {
    
    const [searchText, setSearchText] = useState('')

    return (
        <div className='search'>
            <MdSearch className='search-icon' />
            <input className='search-input'
                value={searchText}
                autoFocus='true'
                placeholder='Type to search...'
                onChange={(event) => {
                    filterItems(event.target.value)
                    setSearchText(event.target.value)
                }}
            />
        </div>
    )
}

export default Search