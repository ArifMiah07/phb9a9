import { useEffect, useState } from 'react';
import BlogPost from '../../Components/BlogPost/BlogPost';

const Blog = () => {

    const [blog, setBlog] = useState([]);

    useEffect( ()=>{
        fetch('/blog.json')
        .then(res =>res.json())
        .then(data => setBlog(data));
    },[])
    return (
        <div>
            <h1>this is bog</h1>
            {
                blog.map((blogCard)=> <BlogPost key={blogCard.id} blogCard={blogCard}></BlogPost>)
            }
        </div>
    );
};

export default Blog;