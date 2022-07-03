import React, { Dispatch } from 'react'
import { Link } from 'react-router-dom';
import { PostType } from '../../App';
import Feed from './Feed';
interface HomeType {
  posts: PostType[];
  setPosts?: React.Dispatch<React.SetStateAction<any>>;
  isLoading: boolean;
  fetchError: any
}
const Home = ({ posts, isLoading, fetchError }: HomeType) => {
  console.log(posts, 'posts posts posts')
  return (
    <main>
      <h1>Home</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
      {!isLoading && !fetchError &&
        posts.length ? (
        <Feed {...{ posts }} />
      ) : (
        <>
          <h2>Post No Found</h2>
          <p>Well, that's disapponting</p>
          <p>
            <Link to='/'>Vistit Our HomePage</Link>
          </p>
        </>
      )
      }
    </main>
  )
}

export default Home
// import React, { Dispatch } from 'react'
// import { Link } from 'react-router-dom';
// import { PostType } from '../../App';
// import Feed from './Feed';
// interface HomeType {
//   posts: PostType[];
//   setPosts?: React.Dispatch<React.SetStateAction<any>>;
//   isLoading: boolean;
//   fetchError: any
// }
// const Home = ({ posts }: HomeType) => {
//   console.log(posts, 'posts posts posts')
//   return (
//     <main>
//       <h1>Home</h1>
//       {posts.length ? (
//         <Feed {...{ posts }} />
//       ) : (
//         <>
//           <h2>Post No Found</h2>
//           <p>Well, that's disapponting</p>
//           <p>
//             <Link to='/'>Vistit Our HomePage</Link>
//           </p>
//         </>
//       )}
//     </main>
//   )
// }

// export default Home