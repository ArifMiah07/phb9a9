import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogPost = ({blogCard}) => {

    const {title, author, date, image, content} = blogCard;
    return (
        <div className="max-w-md mx-auto rounded overflow-hidden p-3 shadow-lg">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{content}</p>
            <span className='text-lg font-semibold underline link text-blue-300'><Link >Read More</Link></span>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {author}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {date}
                </span>
            </div>
        </div>
    );
};


BlogPost.propTypes = {
    blogCard: PropTypes.object
}

export default BlogPost;