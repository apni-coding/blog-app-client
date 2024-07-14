import React from 'react'
import PostItem from './PostItem';

export default function Post() {
    const posts = [
        {
            "_id": "6688fb5e2c7dc79ac2f83e08",
            "title": "testing   testingtestingtestingtestingtestingtestingtestingtestingtestingtesting",
            "category": "Agriculture",
            "description": "<p>sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk sadlkdsafksldalksda afdskldslaldsk</p>",
            "creator": "667ffcf821991430161768c5",
            "thumbnail": "https://firebasestorage.googleapis.com/v0/b/blogproject-f9e9c.appspot.com/o/best-thumbnail-background-for-youtubea702d87c-a951-46b6-92e6-ec70ca3c52b7.jpg?alt=media&token=7867e34d-7b54-470d-85e9-bdd9caf09f9f",
            "createdAt": "2024-07-06T08:07:58.803Z",
            "updatedAt": "2024-07-06T08:07:58.803Z",
            "__v": 0
        },
        {
            "_id": "66817c32b1afb1e7e0575cfa",
            "title": "sdfasadfsadf",
            "category": "Business",
            "description": "<p>afsdsdfadsafsdasd</p>",
            "creator": "667ffcf821991430161768c5",
            "thumbnail": "https://firebasestorage.googleapis.com/v0/b/blogproject-f9e9c.appspot.com/o/ms%20excel%20seriesfe26f9af-3fc9-44e7-9c17-24e2144aee88.jpg?alt=media&token=8f1efa01-3f08-4995-8a41-7d0d7f7310a7",
            "createdAt": "2024-06-30T15:39:30.790Z",
            "updatedAt": "2024-06-30T15:39:30.790Z",
            "__v": 0
        },
        {
            "_id": "66817bbeb1afb1e7e0575cf6",
            "title": "sdfasadfsadf",
            "category": "Business",
            "description": "<p>afsdsdfadsafsdasd</p>",
            "creator": "667ffcf821991430161768c5",
            "thumbnail": "https://firebasestorage.googleapis.com/v0/b/blogproject-f9e9c.appspot.com/o/ms%20excel%20seriesad4bbddf-3431-4b6f-b65a-9c3774190659.jpg?alt=media&token=e8e14b4a-76ca-4df6-a5a5-a3e3e8f40bf7",
            "createdAt": "2024-06-30T15:37:34.853Z",
            "updatedAt": "2024-06-30T15:37:34.853Z",
            "__v": 0
        },];
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
