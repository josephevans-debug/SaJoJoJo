import './Css/Postcard.css'

function PostCard({ title, text }) {
    return(
        <div className="Border">
            <div className="Textbox">
                {title}
                {text}
            </div>
            <div className='Uibar'>
                <button className='Likebtn'>Like</button>
                <button className='Commentbtn'>Comment</button>
            </div>
        </div>

    )
}

export default PostCard