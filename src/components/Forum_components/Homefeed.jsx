import { useEffect, useState } from 'react';
import PostCard from './Postcard.jsx';
import './Css/Homefeed.css'

function Homefeed() {
    const [posts, setPosts] = useState([]);   
    const [error, setError] = useState('');

    useEffect(() => {                          
        async function loadPosts() {
            try {
                const res = await fetch('/api/posts');
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || 'Could not load posts');
                setPosts(data);               
            } catch (err) {
                setError(err.message);
            }
        }
        loadPosts();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div>
            {posts.map(p => (
                <PostCard key={p.id} id={p.id} title={p.title} text={p.body} preview />
            ))}
        </div>
    );
}

export default Homefeed