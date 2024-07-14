import React from 'react'

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
            <h3>{shortTitle}</h3>
        </div>
        <p dangerouslySetInnerHTML={{__html: shortDescription}}></p>
        <div className="post_footer">

        </div>
      </article>
    </>
  )
}
