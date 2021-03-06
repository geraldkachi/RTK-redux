import React from 'react'
import { Link, useParams } from 'react-router-dom'

interface PostType {
  posts: {
    datetime: string;
    title: string;
    body: string
  }[]
  handleDelete: any
}

const PostPage = ({ posts, handleDelete }: PostType) => {
  
  const { id } = useParams()
  const post: any = posts.find((post: any) => (post.id).toString() === id)

  return (
    <main>
      <article>
        {post &&
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <hr />
            <Link to={`/edit/${id}`}>Edit Post</Link>
            <hr />
            <button style={{background: 'red', color:'white'}} onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        }
        {
          !post && 
          <>
            <h2>Page Not found</h2>
            <p>Well, that'sdisappointin</p>
            <p>
              <Link to='/'>Visit Our HomePage</Link>
            </p>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage