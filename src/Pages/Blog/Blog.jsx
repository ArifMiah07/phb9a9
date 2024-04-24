import { useEffect, useState } from 'react';
import BlogPost from '../../Components/BlogPost/BlogPost';
import { Helmet } from 'react-helmet-async';

const Blog = () => {

    const [blog, setBlog] = useState([]);

    useEffect( ()=>{
        fetch('/blog.json')
        .then(res =>res.json())
        .then(data => setBlog(data));
    },[])
    return (
        <div className='lg:w-[1170px] mx-auto p-5'>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            {
                blog.map((blogCard)=> <BlogPost key={blogCard.id} blogCard={blogCard}></BlogPost>)
            }
        </div>
    );
};

export default Blog;