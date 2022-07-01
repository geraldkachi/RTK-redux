import React, { useEffect, useRef, useState } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import { Link, Routes, Route } from "react-router-dom"
// import './App.css';
// import { RootState } from './app/store';
// import { petDecrement, petIncrement } from './action';
// import { useGetUsersQuery } from './services/users';
// import TodoList from './components/TodoList';
// import { useDispatch, useSelector } from 'react-redux';
// import Test from './components/test/Test';
import Footer from './components/Footer';
import CRUD from './components/crud/CRUD';
import Jsonplace from './components/jsonplace/Jsonplace';
import { Route, Routes } from 'react-router-dom';
import Posts from './components/posts/Posts';
import Home from './components/posts/Home';
import About from './components/posts/About';
import Missing from './components/posts/Missing';
import PostPage from './components/posts/PostPage';
import NewPost from './components/posts/NewPost';

import { useNavigate } from "react-router-dom"
import { format } from 'date-fns';
import Nav from './components/posts/Nav';

export interface PostType {
  id: number,
  title: string,
  datetime: string,
  body: string
}

function App() {
  const navigate = useNavigate()
  const [postTitle, setPostTitle] = useState<string>('')
  const [postBody, setPostBody] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const [searchResults, setSearchResults] = useState<PostType[]>([])
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ispsum dolor sit smet consectetur adipisicing elit. Quis 1"
    },
    {
      id: 2,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ispsum dolor sit smet consectetur adipisicing elit. Quis 3"
    },
    {
      id: 3,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ispsum dolor sit smet consectetur adipisicing elit. Quis 3"
    }
  ])
  useEffect(() => {
    const filteredResults = posts.filter((post: any) => 
    ((post.title).toLowerCase()).includes(search) || ((post.body).toLowerCase()).includes(search)
    )
    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleDelete = (id: any) => {
    const postsList = posts.filter((post: any) => post.id !== id)
    setPosts(postsList)
    navigate(-1)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = {id, title: postTitle, datetime, body: postBody}
    const allPosts = [...posts, newPost]
    setPosts(allPosts)
    setPostBody("")
    setPostTitle('')
    navigate(-1)
  }

  return (
    <>
    <Nav {...{search}} {...{setSearch}} />
    <Routes>
      <Route path='/' element={<Home posts={searchResults} />} />
      <Route path='/post' element={<NewPost
      {...{handleSubmit}} {...{postTitle}} {...{postBody}} {...{setPostBody}} {...{setPostTitle}} 
      />} />
      <Route path='/post/:id' element={<PostPage  {...{posts}} {...{handleDelete}} />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Missing />} />
    </Routes> 

    <Footer/>
    {/* <div className="">
      <hr style={{marginBottom: '20px'}} />
    <CRUD/>  
    </div>
    <Jsonplace  /> */}
    </>

  );
}

export default App;




// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import { Link, Routes, Route } from "react-router-dom"
// // import './App.css';
// import { RootState } from './app/store';
// import { petDecrement, petIncrement } from './action';
// import { useGetUsersQuery } from './services/users';
// import TodoList from './components/TodoList';
// import { useDispatch, useSelector } from 'react-redux';
// import Test from './components/test/Test';
// import Footer from './components/Footer';

// function App() {

//   const { data, error, isLoading, isSuccess, isError, isFetching } = useGetUsersQuery()

//   const petCounter = useSelector((state: any) => state.petCounter)
//   const petFavourite = useSelector((state: any) => state.petFavourite)
//   const dispatch = useDispatch()

//   const handleNameChange = () => {
//     const name = ["Bob", "Kelvin", "Dave"]
//     const int = Math.floor(Math.random() * 3)
//     return name[int]
//   }

//   const handleClck = () => console.log('you clicked it')
//   const handleClck2 = (name: string) => console.log(`${name}you clicked it`)
//   const handleEvent = (e: React.ChangeEvent) => console.log(e.target.innerHTML)


//   return (
//     <div className="">
//       <Test />
//       <div>
//         <p>Hello {handleNameChange()}</p>!
//       </div>
//       <Counter />
//       <h1 style={{ textAlign: 'center' }}>Welcome to React Redux Crash Course 2021</h1>
//       <button onClick={() => dispatch(petIncrement(2))}>Add</button>{" "}
//       <button onClick={() => dispatch(petDecrement())}>Remove</button>
//       <h1>Pet counter {petCounter}</h1>
//       <h2>Number of favourite pets so far {petFavourite}</h2>

//       <div>
//         <hr />
//         <TodoList />
//         <br />
//         {isLoading && "Loading..."}
//         {isFetching && "isFetching"}
//         {isError && error.message}
//         {isSuccess && data && data.map((user: any) => <h1>{user.name}</h1>)}
//       </div>
//       <Footer />
//     </div>
//   );
// }