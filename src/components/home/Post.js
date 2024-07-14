import React, { useEffect } from 'react'
import PostItem from './PostItem';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './redux/dispatcher';

export default function Post() {
    const dispatch = useDispatch();
    const posts = useSelector((state)=> state.postsReducer.posts)
    
    useEffect(()=>{
      dispatch(getPosts())
    }, [])

    
  return (
    <>
      <section className="posts">
        {
          posts.length > 0 ?
          <div className="container posts_container">
            {
                posts.map((post)=><PostItem post={post} key={post?._id}/>)
            }
            </div>
          : <h2 className="center">No Posts found</h2> 
        }
      </section>
    </>
  )
}
