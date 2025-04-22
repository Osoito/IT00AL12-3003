import React from 'react';

const BlogCard = ({ bannerImage, title, overview, id }) => {
    return (
        <div className="blog-card">
            {bannerImage && <img src={bannerImage} className="blog-image" alt="Blog Banner" />}
            <h1 className="blog-title">{title}</h1>
            <p className="blog-overview">{overview}</p>
            <a href={`/${id}`} className="btn dark">read</a>
        </div>
    );
};

export default BlogCard;