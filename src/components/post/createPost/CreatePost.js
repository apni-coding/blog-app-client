import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { createPost } from './redux/dispatcher';

export default function CreatePost() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');

    const POST_CATEGORE = ['Agriculture', 'Business', 'Education'];

    const moduels ={
        toolbar:[
            [{'header': [1, 2, 3, 4, 5, 6, false]}],
            ['bold', 'itaclic', 'underline', 'strike', 'blockquote'],
            [{'list':'ordered'},{'list':'bullter'}, {'indent':'-1'}, {'indent': '+1'} ],
            ['clean'],
            ['link', 'image']
        ]
    };

    const formats = [
        'header',
        'bold', 'itaclic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    const handleCreatePost = (e)=>{
        e.preventDefault()
       
        //create a formData object
        const formData = new FormData()

        //append the file to the FormData Object
        formData.append('thumbnail', thumbnail);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        dispatch(createPost(formData))

    }
  return (
    <>
      <section className="create-post">
        <div className="container">
            <h2>Create Post</h2>
            <form action="" className="form create-post_form" onSubmit={handleCreatePost}>
                <input 
                    type="text" 
                    placeholder='Title'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />

                <select
                    name='category'
                    value={category}
                    onChange={(e)=> {
                      setCategory(e.target.value)
                    }}
                >
                    <option value={''} >Select Category</option>
                    {
                        POST_CATEGORE.map((cat, index) => <option value={cat} key={index}>{cat}</option>)
                    }

                </select>

                <ReactQuill 
                // theme="snow" 
                modules={moduels}
                formats={formats}
                value={description} 
                onChange={setDescription} 
                />

                <input 
                    type="file" 
                    accept='png, jpg, jpeg'
                    onChange={(e)=> setThumbnail(e.target.files[0])}
                />

                <button type="submit" className='btn primary'>Create Post</button>
            </form>
        </div>
      </section>
    </>
  )
}
