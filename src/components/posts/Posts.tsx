import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Footer from '../Footer'
import About from './About'
import EditPost from './EditPost'
import Home from './Home'
import Missing from './Missing'
import Nav from './Nav'
import NewPost from './NewPost'
import PostPage from './PostPage'

import axios from '../posts/api/posts';
import useAxiosFetch from '../../app/useAxiosFetch'

export interface PostType {
  id: number,
  title: string,
  datetime: string,
  body: string
}

const Posts = () => {
  const { data, fetchError, isLoading} = useAxiosFetch(`http://localhost:3500/posts`)
  const navigate = useNavigate()
  const [postTitle, setPostTitle] = useState<string>('')
  const [postBody, setPostBody] = useState<string>('')
  // for edit or update
  const [editTitle, setEditTitle] = useState<string>('')
  const [editBody, setEditBody] = useState<string>('')

  const [search, setSearch] = useState<string>('')
  const [searchResults, setSearchResults] = useState<PostType[]>([])
  const [posts, setPosts] = useState<PostType[]>([])
  useEffect(() => {
    setPosts(data)
  },[data])
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       const res = await axios('/posts')
  //       if (res && res.data) setPosts(res.data);
  //       if (!res.data.ok) throw new Error("no fetched data");
  //       console.log(setPosts(res.data), "setPosts(res.data)")
  //     } catch (err: any) {
  //       if (err.res) {
  //         console.log(err.res.data)
  //         console.log(err.res.status)
  //         console.log(err.res.headers)
  //       } else {
  //         console.log(`Error: ${err.message}`)
  //       }
  //     }
  //   }
  //   fetchPost()
  // }, [])

  useEffect(() => {
    const filteredResults = posts.filter((post: any) =>
      ((post.title).toLowerCase()).includes(search.toLowerCase()) || ((post.body).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleDelete = async (id: number | string) => {
    try {
      await axios.delete(`/posts/${id}`)
      const postsList = posts.filter((post: any) => post.id !== id)
      setPosts(postsList)
      navigate('/')
    } catch (error: any) {
      console.log(error.message)
    }
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost: any = { id, title: postTitle, datetime, body: postBody }
    try {
      const res = await axios('/posts', newPost)
      const allPosts = [...posts, res.data]
      // const allPosts = [...posts, newPost]
      setPosts(allPosts)
      setPostBody("")
      setPostTitle('')
      navigate(-1)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = async (id: number) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const updateedit: any = { id, title: editTitle, datetime, body: editBody }

    try {
      const res = await axios.put(`/posts/${id}`, updateedit)
      setPosts(posts.map((post: any) => post.id === id ? { ...res.data } : post))
      setEditBody('')
      setEditTitle(``)
      navigate(`/`)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  return (
    <>
      <Nav {...{ search }} {...{ setSearch }} />
      <Routes>
        <Route path='/' element={<Home posts={searchResults} {...{isLoading}} {...{ fetchError }} />} />
        <Route path='/post' element={<NewPost
          {...{ handleSubmit }} {...{ postTitle }} {...{ postBody }} {...{ setPostBody }} {...{ setPostTitle }}
        />} />
        <Route path='/edit/:id' element={<EditPost
          {...{ posts }} {...{ handleEdit }} {...{ editTitle }} {...{ editBody }} {...{ setEditBody }} {...{ setEditTitle }}
        />} />
        <Route path='/post/:id' element={<PostPage  {...{ posts }} {...{ handleDelete }} />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>

      <Footer />
      </>
  )
}

export default Posts
// import { format } from 'date-fns'
// import React, { useEffect, useState } from 'react'
// import { Route, Routes, useNavigate } from 'react-router-dom'
// import Footer from '../Footer'
// import About from './About'
// import EditPost from './EditPost'
// import Home from './Home'
// import Missing from './Missing'
// import Nav from './Nav'
// import NewPost from './NewPost'
// import PostPage from './PostPage'

// import axios from '../posts/api/posts';

// export interface PostType {
//   id: number,
//   title: string,
//   datetime: string,
//   body: string
// }

// const Posts = () => {
//   const navigate = useNavigate()
//   const [postTitle, setPostTitle] = useState<string>('')
//   const [postBody, setPostBody] = useState<string>('')
//   // for edit or update
//   const [editTitle, setEditTitle] = useState<string>('')
//   const [editBody, setEditBody] = useState<string>('')

//   const [search, setSearch] = useState<string>('')
//   const [searchResults, setSearchResults] = useState<PostType[]>([])
//   const [posts, setPosts] = useState<PostType[]>([])
//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const res = await axios('/posts')
//         if (res && res.data) setPosts(res.data);
//         if (!res.data.ok) throw new Error("no fetched data");
//         console.log(setPosts(res.data), "setPosts(res.data)")
//       } catch (err: any) {
//         if (err.res) {
//           console.log(err.res.data)
//           console.log(err.res.status)
//           console.log(err.res.headers)
//         } else {
//           console.log(`Error: ${err.message}`)
//         }
//       }
//     }
//     fetchPost()
//   }, [])

//   useEffect(() => {
//     const filteredResults = posts.filter((post: any) =>
//       ((post.title).toLowerCase()).includes(search.toLowerCase()) || ((post.body).toLowerCase()).includes(search.toLowerCase())
//     )
//     setSearchResults(filteredResults.reverse())
//   }, [posts, search])

//   const handleDelete = async (id: number | string) => {
//     try {
//       await axios.delete(`/posts/${id}`)
//       const postsList = posts.filter((post: any) => post.id !== id)
//       setPosts(postsList)
//       navigate('/')
//     } catch (error: any) {
//       console.log(error.message)
//     }
//   }
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const id = posts.length ? posts[posts.length - 1].id + 1 : 1
//     const datetime = format(new Date(), 'MMMM dd, yyyy pp')
//     const newPost: any = { id, title: postTitle, datetime, body: postBody }
//     try {
//       const res = await axios('/posts', newPost)
//       const allPosts = [...posts, res.data]
//       // const allPosts = [...posts, newPost]
//       setPosts(allPosts)
//       setPostBody("")
//       setPostTitle('')
//       navigate(-1)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const handleEdit = async (id: number) => {
//     const datetime = format(new Date(), 'MMMM dd, yyyy pp')
//     const updateedit: any = { id, title: editTitle, datetime, body: editBody }

//     try {
//       const res = await axios.put(`/posts/${id}`, updateedit)
//       setPosts(posts.map((post: any) => post.id === id ? { ...res.data } : post))
//       setEditBody('')
//       setEditTitle(``)
//       navigate(`/`)
//     } catch (error) {
//       console.log(`Error: ${error}`)
//     }
//   }

//   return (
//     <>
//       <Nav {...{ search }} {...{ setSearch }} />
//       <Routes>
//         <Route path='/' element={<Home posts={searchResults} />} />
//         <Route path='/post' element={<NewPost
//           {...{ handleSubmit }} {...{ postTitle }} {...{ postBody }} {...{ setPostBody }} {...{ setPostTitle }}
//         />} />
//         <Route path='/edit/:id' element={<EditPost
//           {...{ posts }} {...{ handleEdit }} {...{ editTitle }} {...{ editBody }} {...{ setEditBody }} {...{ setEditTitle }}
//         />} />
//         <Route path='/post/:id' element={<PostPage  {...{ posts }} {...{ handleDelete }} />} />
//         <Route path='/about' element={<About />} />
//         <Route path='*' element={<Missing />} />
//       </Routes>

//       <Footer />
//       </>
//   )
// }

// export default Posts