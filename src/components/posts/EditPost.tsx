import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const EditPost = ({ posts, handleEdit, editBody, editTitle, setEditBody, setEditTitle }: any) => {
    const { id } = useParams()
    const post = posts.find((post: any) => (post.id).toString() === id)

    useEffect(() => {
        if (post) {
            setEditBody(post.body)
            setEditTitle(post.title)
        }
    }, [post, setEditBody, setEditTitle])
    
    return (
        <main>
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input id='postTitle' type="text" value={editTitle} placeholder='postTitle' onChange={e => setEditTitle(e.target.value)} required />

                        <label htmlFor="editBody">Post:</label>
                        <textarea id='editBody' value={editBody} placeholder='editBody' onChange={e => setEditBody(e.target.value)} required />

                        <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Page Not found</h2>
                    <p>Well, that'sdisappointin</p>
                    <p>
                        <Link to='/'>Visit Our HomePage</Link>
                    </p>
                </>
            }
        </main>
    )
}

export default EditPost