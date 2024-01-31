import { useState } from "react";
import Button from "react-bootstrap/Button";
import PostCard from "../assets/PostCard";
import PostForm from "../assets/PostForm";

type Post = {
    id:number,
    title:string
}

type HomeProps = {
    isloggedIn:Boolean,
    handleclick:()=>void
}

export default function Home({ handleclick, isloggedIn}: HomeProps) {
    const username:string = "Mr.Smalls"
    
    const [posts,setPosts] = useState<Post[]>([])
    const [newPost,setNewPost] = useState<Post>({id: 1,title: ''})

    const handleINputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value,event.target.name)
        setNewPost({...newPost, [event.target.name]: event.target.value})
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setPosts([...posts,newPost])
        setNewPost({id: posts.length + 2,title:''})
    }

    return (
        <>
            <Button variant='primary' onClick={handleclick}>Click Me</Button>
            <h1>{ isloggedIn ? 'Hello ' + username : 'Hello and Welcome'}</h1>
            <PostForm handleChange={handleINputChange} newPost={newPost} handleFormSubmit={handleFormSubmit}/>
            { posts.map( P => <PostCard post ={P} key = {P.id} />) }
        </>
    )
}