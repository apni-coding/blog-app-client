import React from 'react'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
import ReactTimeAgo from 'react-time-ago'
import { Link } from 'react-router-dom'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

export default function PostAuthor({createdAt, authorId}) {
    const author = {
        "_id": "667ffcf821991430161768c5",
        "name": "VIVEK",
        "email": "vivek10@gmail.com",
        "posts": 6,
        "__v": 0,
        "avatar": "https://firebasestorage.googleapis.com/v0/b/blogproject-f9e9c.appspot.com/o/user-dummy1a79f4f5-fbdd-4518-a32f-4f85f5b08da8.png?alt=media&token=146f596a-1e1f-4a92-b25b-e72adc182305"
    }
  return (
    <>
    <Link to={`/posts/users/${authorId}`} className='post_author'>
        <div className="post_author-avatar">
            <img src={author?.avatar} alt={author?.name} />
        </div>
        <div className="post_author-details">
            <h5>By: {author?.name}</h5>
            <small>{<ReactTimeAgo date={new Date(createdAt)} locale='en-US'/>}</small>
        </div>
        </Link>
    </>
  )
}
