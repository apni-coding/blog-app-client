import React from 'react'
import PostAuthor from '../postAuthor/PostAuthor';
import { Link } from 'react-router-dom';

export default function PostItem({post}) {
   
    const shortTitle = post?.title.length > 60 ? post?.title.substr(0, 30) + '...' : post?.title;
    const shortDescription = post?.description.length > 250 ? post?.description.substr(0, 30) + '...' : post?.description;
  return (
    <>
      <article className="post">
        <div className="post_thumbnail">
            <img src={post?.thumbnail} alt={post?.title} />
        </div>
        <div className="post_content">
            <Link to={`/posts/${post?._id}`}>
            <h3>{shortTitle}</h3>
            </Link>
           
        </div>
        <p dangerouslySetInnerHTML={{__html: shortDescription}}></p>
        <div className="post_footer">
          <PostAuthor createdAt={post?.createdAt} authorId={post?.creator}/>
          <Link to={`/posts/category/${post?.category}`} className='btn category'>{post?.category}</Link>
        </div>
      </article>
    </>
  )
}
