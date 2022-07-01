import React from 'react'
import { PostType } from '../../App'
import Post from './Post'
interface FeedType {
    posts: PostType[]
}
const Feed = ({ posts }: FeedType) => {
    return (
        <div>
            {posts.map((post: any) => <Post key={post.id} {...{post}} />)}
        </div>
    )
}

export default Feed