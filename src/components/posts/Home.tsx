import React, { Dispatch } from 'react'
import { PostType } from '../../App';
import Feed from './Feed';
interface HomeType {
  posts: PostType[];
  setPosts?: React.Dispatch<React.SetStateAction<any>>;
}
const Home = ({ posts }: HomeType) => {
  return (
    <main>
      {posts.length ? (
        <Feed {...{posts}} />
      ) : (
      <p>No Post to display</p>
      )}
      <h1>Home</h1>
    </main>
  )
}

export default Home