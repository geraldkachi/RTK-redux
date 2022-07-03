import React from 'react'

const NewPost = ({postBody, postTitle, setPostBody, setPostTitle, handleSubmit}: any) => {
  return (
    <main>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input id='postTitle' type="text" value={postTitle} placeholder='postTitle' onChange={e => setPostTitle(e.target.value)} required/>

        <label htmlFor="postBody">Post:</label>
        <textarea id='postBody' value={postBody} placeholder='postBody' onChange={e => setPostBody(e.target.value)} required/>

        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPost