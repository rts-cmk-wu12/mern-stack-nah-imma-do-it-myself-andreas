import { useEffect, useState } from "react"
import PrimaryMenu from "../components/primary-menu"
import { useParams } from "react-router"

export default function IndexPage() {

    async function deleteHandler(postId) {
      
        console.log(postId)
        const response = await fetch(`/api/blogpost/delete/${postId}`, {
            method: 'DELETE'
        })
        if (response.ok) {
            setPosts(posts.filter(post => post._id !== id))
        }
    }

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/blogpost/latest')
            const data = await response.json()

            setPosts(data)
        }
        fetchData()
    })

    
    return (
        <>
            <PrimaryMenu />
            <h1>Posts</h1>
            
            {posts.map(post => (
            <div key = {post._id}>
                {post.title} {post.published} {post.text} 
                <button onClick={() => deleteHandler(post._id)}>Delete</button>
            </div>
        ))}
           
        </>
    )
}