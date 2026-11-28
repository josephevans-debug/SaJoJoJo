import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../Forum_components/Postcard.jsx';

function PostPage() {
    const { id } = useParams();   
    const [post, setPost] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        async function loadPost() {
            try {
                const res = await fetch(`/api/posts/${id}`);
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || 'Could not load post');
                setPost(data);
            } catch (err) {
                setError(err.message);
            }
        }
        loadPost();
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!post) return <p>Loading...</p>;

    return <PostCard id={post.id} title={post.title} text={post.body} />;
}

export default PostPage;