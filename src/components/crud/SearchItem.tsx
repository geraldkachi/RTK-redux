import React from "react"

const SearchItem = ({search, setSearch}: any) => {
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setSearch('')
    }
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input
                type={search}
                name="search"
                role="searchbox"
                placeholder="SearchI tems"
                id="search"
                onChange={e => setSearch(e.target.value)}
                />
        </form>
    )
}

export default SearchItem
