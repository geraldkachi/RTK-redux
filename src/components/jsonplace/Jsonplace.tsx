import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Form from './Form';
import List from './List';

const API_URL = `https://jsonplaceholder.typicode.com/`
const Jsonplace = () => {

    const [reqType, setReqType] = useState('users')
    const [items, setItems] = useState<any>([])

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await axios.get(`${API_URL}${reqType}`)
                // const data = res.json()
                setItems(res.data)
                if (!res.data.ok) throw Error('did not receive any data')
                console.log(res.data, "DATA")
                // return  items.map((post: any, i: number) => {
                //     return (
                //       <li key={i} className="list-group-item">{post.text}</li>
                //     );
                //   });
            } catch (error: any) {
                console.log(error)
            }
        }
        fetchItems()
    }, [reqType])

    return (
        <div>
            <Form {...{ reqType }} {...{ setReqType }} />
            {/* <div>{`item: ${JSON.stringify(items)}`}</div> */}
            <List {...{items}} />
            {/* {items.map((post: any, i: number) => <li key={i} className="list-group-item">{post.title}</li>)} */}

            {ShowPosts()}
        </div>
    )
}

export default Jsonplace

// import React, {useState, useEffect} from "react" 
const ShowPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${API_URL}posts`);
                setPosts(res.data);
                // console.log(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    return <div>
        {/* {posts.map((post: any, i: number) => <li key={i} className="list-group-item">{post.title}</li>)} */}
        {/* {JSON.stringify(posts)} */}
    </div>
}