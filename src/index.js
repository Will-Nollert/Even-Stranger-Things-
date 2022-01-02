import React, {useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import Form from './components/regForm.js'


const App = () => {
    const [posts, setPosts] = useState ([]);
    //console.log('post: ', posts);
    
        useEffect(() => {
            const fetchPosts = async ()  => {
                const resp = await fetch ('https://strangers-things.herokuapp.com/api/2109-OKU-RM-WEB-PT/posts')
                const {data} = await resp.json();
                setPosts(data.posts);

            }
            fetchPosts();
        }, [])

            return <div className='app'>
            <Form />
            <h1>
                Posts
            </h1>
            {
             posts.map(post => <div key={post.id}>
               <h3>{post.title}</h3> <span>Location: {post.location}</span>
               <div>{post.description}</div>
               <div>{post.price}</div>
               
               
               
             </div>)
            }
            
            
            </div>

}




ReactDom.render(
    <App />,
    document.getElementById('app')
)