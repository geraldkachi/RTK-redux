import React from 'react'
import { Link } from 'react-router-dom';
interface NavType {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const Nav = ({search, setSearch}: NavType) => {
    const HandleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
}
  return (
    <>
    <form onSubmit={HandleSubmit}>
        <label htmlFor="search">Search Posts</label>
        <input type="text" value={search} placeholder='Search Posts' onChange={e => setSearch(e.target.value)} />
    </form>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/post">Post</Link>
        </li>
    </ul>
    </>
  )
}

export default Nav