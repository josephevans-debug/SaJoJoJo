import { useNavigate } from 'react-router-dom';
import './Css/Postcard.css'

function PostCard({ id, title, text, preview = false }) {
    const navigate = useNavigate();

    function openPost() {
        if (preview) {
            navigate(`/post/${id}`);
        }
    }
    return(
        <div className={preview ? 'Border Clickable' : 'Border'} onClick={openPost}>
            <div className="Textbox">
                <h3>{title}</h3>
                <p className={preview ? 'Preview': undefined}>{text}</p>
            </div>
            <div className='Uibar'>
                <button className='Likebtn'>Like</button>
                <button className='Commentbtn'>Comment</button>
            </div>
        </div>

    )
}

export default PostCard